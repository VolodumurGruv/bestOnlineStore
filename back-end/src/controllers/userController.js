import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import { validationResult } from 'express-validator';
import User from '../models/userSchema.js';
import Order from '../models/orderSchema.js';
import Review from '../models/reviewSchema.js';
import ShippingAddress from '../models/shippingAddressSchema.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/token.js';
import sendEmail from '../utils/email.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import UserService from '../services/userService.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password -resetPasswordToken -resetPasswordExpires');
    return sendRes(res, HTTP_STATUS_CODES.OK, 'All users fetched successfully.', users);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while fetching all users.', error);
  }
};

const registerUser = async (req, res, next, anonymous = null) => {
  const { firstName, lastName, password, email, phone } = anonymous || req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.MISSING_REQUIRED_FIELDS, errors.array());
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    let user;

    const { authorization } = req.headers;

    if (authorization) {
      try {
        const decodedToken = jwt.verify(authorization, `${process.env.JWT_SECRET}`);
        const userId = decodedToken._id;

        user = await User
          .findById(userId)
          .select('-password -resetPasswordToken -resetPasswordExpires');

        if (user) {
          user.firstName = firstName;
          user.lastName = lastName;
          user.password = hashedPassword;
          user.email = email;
          user.phone = phone || user.phone;
          !!anonymous;
        }
      } catch (error) {
        logger.error(error);
      }
    } else {
      user = new User({
        firstName,
        lastName,
        password: hashedPassword,
        email,
        phone: phone || null,
        isAnonymous: !!anonymous
      });
    }

    const createdUser = await user.save();

    const token = generateToken(createdUser);

    const newUser = {
      _id: createdUser._id,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      phone: createdUser.phone,
      isAdmin: createdUser.isAdmin,
      isAnonymous: createdUser.isAnonymous,
      token
    };

    anonymous ? void(0) : sendEmail(email);

    return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.NEW_USER_CREATED, newUser);

  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error.message);
  }
};

const registerAnonymous = async (req, res, next) => {
  const anonymousUser = {
    firstName: 'Anonymous',
    lastName: 'Unknown',
    email: `anonymous${Date.now()}@example.com`,
    password: 'qwW5#ertY1$',
    phone: null
  };

  registerUser(req, res, next, anonymousUser);
};

const registerUserByGoogle = async (req, res) => {
  const { gtoken } = req.body;

  try {
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        'Authorization': `Bearer ${gtoken}`
      }
    });

    if (!userInfoResponse.ok) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.GOOGLE_FETCH_FAILURE);
    }

    const userJSON = await userInfoResponse.json();

    const existingUser = await User.findOne({ email: userJSON.email });
    const { authorization } = req.headers;
    const decodedToken = jwt.verify(authorization, `${process.env.JWT_SECRET}`);
    const userId = decodedToken._id;
    const existingAnonUser = await User.findById(userId);

    if (existingUser) {
      const token = generateToken(existingUser);

      const userPayload = {
        _id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        phone: existingUser.phone,
        isAdmin: existingUser.isAdmin,
        isAnonymous: existingUser.isAnonymous,
        token
      };

      return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.GOOGLE_ACCESS_VERIFIED, userPayload);
    } else if (existingAnonUser) {
      existingAnonUser.googleId = userJSON.sub;
      existingAnonUser.firstName = userJSON.given_name || '';
      existingAnonUser.lastName = userJSON.family_name || '';
      existingAnonUser.email = userJSON.email;
      existingAnonUser.isAnonymous = false;

      const createdUser = await existingAnonUser.save();

      const token = generateToken(createdUser);

      return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.NEW_USER_CREATED, { createdUser, token });
    } else {
      const user = new User({
        googleId: userJSON.sub,
        firstName: userJSON.given_name || '',
        lastName: userJSON.family_name || '',
        email: userJSON.email,
        isAnonymous: false
      });

      const createdUser = await user.save();

      const token = generateToken(createdUser);

      const newUser = {
        _id: createdUser._id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        phone: createdUser.phone,
        isAdmin: createdUser.isAdmin,
        isAnonymous: createdUser.isAnonymous,
        token
      };

      sendEmail(createdUser.email);

      return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.NEW_USER_CREATED, newUser);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      return sendRes(res, HTTP_STATUS_CODES.OK, 'User signed in successfully.', {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        isAnonymous: user.isAnonymous,
        token,
      });
    } else {
      return sendRes(res, HTTP_STATUS_CODES.UNAUTHORIZED, MESSAGES.INVALID_CREDENTIALS);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while signing in user.', error);
  }
};

const initRestorePassword = async (req, res) =>  {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    const token = generateToken(user, '5m');

    //    const resetLink = `https://online-store-api-714z.onrender.com/reset-password?token=${token}`;
    const resetLink = `https://volodumurgruv.github.io/bestOnlineStore/login?token=${token}`;

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000/12;
    await user.save();

    sendEmail(email, 'Password restore', resetLink);

    return sendRes(res, HTTP_STATUS_CODES.OK, 'Посилання для відновлення паролю надіслано на ваш email.');
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const restorePassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.INVALID_CREDENTIALS);
  }

  try {
    const user = await User.findOne({ resetPasswordToken: token });

    if (!user || user.resetPasswordExpires < Date.now()) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, 'Your token has expired.');
    }

    if (req.body.newPassword) {
      user.password = bcrypt.hashSync(req.body.newPassword, 12);
    }

    const updatedUser = await user.save();
    const newToken = generateToken(updatedUser);

    return sendRes(res, HTTP_STATUS_CODES.OK, 'New password created.', newToken);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId)
      .populate('shippingAddress')
      .populate('wishList')
      .select('-password -resetPasswordToken -resetPasswordExpires');

    const orders = await Order.find({ user: userId });
    const reviews = await Review.find({ user: userId });

    const userData = {
      user: user,
      orders: orders,
      reviews: reviews
    };

    if (user) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'User was found.', userData);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while fetching user by ID.', error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;

      if (!user.isAnonymous === true &&
          !user.googleId &&
          !bcrypt.compareSync(req.body.password, user.password)) {
        return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.INVALID_CREDENTIALS);
      }

      let address = await ShippingAddress.findOne({ user: req.user._id });

      if (address) {
        address.deliveryMethod = req.body.deliveryMethod || address.deliveryMethod;
        address.address = req.body.address || address.address;
        address.city = req.body.city || address.city;
        address.country = req.body.country || address.country;
        address.postalCode = req.body.postalCode || address.postalCode;
        address.novaPoshtaAddress = req.body.novaPoshtaAddress || address.novaPoshtaAddress;
      } else {
        address = new ShippingAddress({
          user: req.user._id,
          deliveryMethod: req.body?.deliveryMethod,
          address: req?.body.address,
          city: req.body?.city,
          country: req.body?.country,
          postalCode: req.body?.postalCode,
          novaPoshtaAddress: req.body?.novaPoshtaAddress
        });
      }

      const updatedAddress = await address.save();

      user.shippingAddress = updatedAddress._id;

      const updatedUser = await user.save();

      const populatedUser = await User.findById(updatedUser._id)
        .select('-password -isAdmin -resetPasswordToken -resetPasswordExpires')
        .populate('shippingAddress');

      return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.USER_WAS_UPDATED, {
        user: populatedUser
      });
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while updating user profile.', error);
  }
};

const deleteUser = async (req, res) => {
  const result = await UserService.deleteUser(req.params.id);
  return sendRes(res, result.status, result.message, result.data);
};

const updateUser = async (req, res) => {
  const result = await UserService.updateUser(req.params.id, req.body);
  return sendRes(res, result.status, result.message, result.data);
};
export {
  getAllUsers,
  registerUser,
  registerAnonymous,
  registerUserByGoogle,
  signInUser,
  initRestorePassword,
  restorePassword,
  getUserById,
  updateProfile,
  deleteUser,
  updateUser
};
