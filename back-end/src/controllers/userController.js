import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/userSchema.js';
import ShippingAddress from '../models/shippingAddressSchema.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/token.js';
import sendEmail from '../utils/email.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    logger.info('All users fetched successfully.');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'All users in payload.', users);
  } catch (error) {
    logger.error('Error while fetching all users:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const registerUser = async (req, res, next, anonymous = null) => {
  const { name, password, email, phone } = anonymous || req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {console.log(errors.array());
      handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', MESSAGES.MISSING_REQUIRED_FIELDS, errors.array());
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    let user;

    const {authorization} = req.headers;

    if (authorization) {
      try {
        const decodedToken = jwt.verify(authorization, `${process.env.JWT_SECRET}`);
        const userId = decodedToken._id;

        user = await User.findById(userId);

        if (user) {
          user.name = name;
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
        name,
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
      name: createdUser.name,
      email: createdUser.email,
      phone: createdUser.phone,
      isAdmin: createdUser.isAdmin,
      isAnonymous: createdUser.isAnonymous,
      token
    };

    anonymous ? void(0) : sendEmail(email);

    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', MESSAGES.NEW_USER_CREATED, newUser);

  } catch (error) {console.log(3);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error.message);
  }
};

const registerAnonymous = async (req, res, next) => {
  const anonymousUser = {
    name: 'Anonymous',
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
      return handleResponse(res, HTTP_STATUS_CODES, 'fault', MESSAGES.GOOGLE_FETCH_FAILURE);
    }

    const userJSON = await userInfoResponse.json();

    const existingUser = await User.findOne({ email: userJSON.email });

    if (existingUser) {
      const token = generateToken(existingUser);

      const userPayload = {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        phone: existingUser.phone,
        isAdmin: existingUser.isAdmin,
        isAnonymous: existingUser.isAnonymous,
        token
      };

      return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', MESSAGES.GOOGLE_ACCESS_VERIFIED, userPayload);
    } else {
      const user = new User({
        googleId: userJSON.sub,
        name: userJSON.name,
        email: userJSON.email,
        isAnonymous: false
      });

      const createdUser = await user.save();

      const token = generateToken(createdUser);

      const newUser = {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        phone: createdUser.phone,
        isAdmin: createdUser.isAdmin,
        isAnonymous: createdUser.isAnonymous,
        token
      };

      sendEmail(createdUser.email);

      return handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', MESSAGES.NEW_USER_CREATED, newUser);
    }
  } catch (error) {
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      logger.info('User signed in successfully:', user._id);
      return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Correct credentials.', {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        isAnonymous: user.isAnonymous,
        token,
      });
    } else {
      logger.error('Invalid credentials for user:', email);
      return handleResponse(res, HTTP_STATUS_CODES.UNAUTHORIZED, 'fault', MESSAGES.INVALID_CREDENTIALS);
    }
  } catch (error) {
    logger.error('Error while signing in user:', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const initRestorePassword = async (req, res) =>  {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.USER_NOT_FOUND);
    }

    const token = generateToken(user, '5m');

    //    const resetLink = `https://online-store-api-714z.onrender.com/reset-password?token=${token}`;
    const resetLink = `https://volodumurgruv.github.io/bestOnlineStore/login?token=${token}`;

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000/12;
    await user.save();

    sendEmail(email, 'Password restore', resetLink);

    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Посилання для відновлення паролю надіслано на ваш email.');
  } catch (error) {
    logger.error(error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const restorePassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    logger.error('Invalid credentials for user.');
    return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', MESSAGES.INVALID_CREDENTIALS);
  }

  try {
    const user = await User.findOne({ resetPasswordToken: token });

    if (!user || user.resetPasswordExpires < Date.now()) {
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', 'Your token has expired.');
    }

    if (req.body.newPassword) {
      user.password = bcrypt.hashSync(req.body.newPassword, 8);
    }

    const updatedUser = await user.save();
    const newToken = generateToken(updatedUser);

    logger.info('New password created.');
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'New password created.', newToken);
  } catch (error) {
    logger.error(error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      logger.info('User found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User was found.', user);
    } else {
      logger.error('User not found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.USER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while fetching user by ID:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('shippingAddress');

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;

      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      const token = generateToken(updatedUser);

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
          deliveryMethod: req.body?.deliveryMethod,
          address: req?.body.address,
          city: req.body?.city,
          country: req.body?.country,
          postalCode: req.body?.postalCode,
          novaPoshtaAddress: req.body?.novaPoshtaAddress
        });
      }

      const updatedAddress = await address.save();

      logger.info('User profile updated:', updatedUser._id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', MESSAGES.USER_WAS_UPDATED, {
        updatedUser,
        token,
        updatedAddress,
      });
    }
  } catch (error) {
    logger.error('Error while updating user profile:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const isAdmin = (user) => user.isAdmin === true;

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      if (isAdmin(user)) {
        handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', MESSAGES.CANNOT_DELETE_ADMIN);
      } else {
        const deletedUser = await user.remove();
        handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User deleted.', {
          user: deletedUser
        });
      }
    } else {
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.USER_NOT_FOUND);
    }
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.USER_NOT_FOUND);
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.isAnonymous = req.body.isAnonymous || user.isAnonymous;

    const updatedUser = await user.save();

    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User updated.', updatedUser);
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
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
