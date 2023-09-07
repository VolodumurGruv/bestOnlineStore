import { validationResult } from 'express-validator';
import fetch from 'node-fetch';
import User from '../models/userSchema.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/token.js';
import sendWelcomeEmail from '../utils/email.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    logger.info('All users fetched successfully.');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'All users in payload.', users);
  } catch (error) {
    logger.error('Error while fetching all users:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.DATABASE_ERROR, error);
  }
};

const registerUser = async (req, res) => {
  const { name, password, email, phone } = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', ERROR_MESSAGES.MISSING_REQUIRED_FIELDS, errors.array());
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = new User({
      name,
      password: hashedPassword,
      email,
      phone
    });

    const createdUser = await user.save();

    const token = generateToken(createdUser);

    const newUser = {
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      phone: createdUser.phone,
      isAdmin: createdUser.isAdmin,
      token
    };

    sendWelcomeEmail(email);

    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', ERROR_MESSAGES.NEW_USER_CREATED, newUser);
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error.message);
  }
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
      throw new Error(ERROR_MESSAGES.GOOGLE_FETCH_FAILURE);
    }

    const userJSON = await userInfoResponse.json();

    const existingUser = await User.findOne({ googleId: userJSON.sub });

    if (existingUser) {
      const token = generateToken(existingUser);

      const userPayload = {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        phone: existingUser.phone,
        isAdmin: existingUser.isAdmin,
        token
      };

      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', ERROR_MESSAGES.GOOGLE_ACCESS_VERIFIED, userPayload);
    } else {
      const user = new User({
        googleId: userJSON.sub,
        name: userJSON.name,
        email: userJSON.email
      });

      const createdUser = await user.save();

      const token = generateToken(createdUser);

      const newUser = {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        phone: createdUser.phone,
        isAdmin: createdUser.isAdmin,
        token
      };

      handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', ERROR_MESSAGES.NEW_USER_CREATED, newUser);
    }
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error.message);
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      logger.info('User signed in successfully:', user._id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Correct credentials.', {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token,
      });
    } else {
      logger.error('Invalid credentials for user:', email);
      handleResponse(res, HTTP_STATUS_CODES.UNAUTHORIZED, 'fault', ERROR_MESSAGES.INVALID_CREDENTIALS);
    }
  } catch (error) {
    logger.error('Error while signing in user:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
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
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.USER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while fetching user by ID:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;

      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      const token = generateToken(updatedUser);

      logger.info('User profile updated:', updatedUser._id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', ERROR_MESSAGES.USER_WAS_UPDATED, {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        isAdmin: updatedUser.isAdmin,
        token,
      });
    }
  } catch (error) {
    logger.error('Error while updating user profile:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const isAdmin = (user) => {
  return user.email === 'markovalekdandr108@gmail.com';
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      if (isAdmin(user)) {
        handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', ERROR_MESSAGES.CANNOT_DELETE_ADMIN);
      } else {
        const deletedUser = await user.remove();
        handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User deleted.', {
          user: deletedUser
        });
      }
    } else {
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.USER_NOT_FOUND);
    }
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.USER_NOT_FOUND);
      return;
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.isAdmin = req.body.isAdmin || user.isAdmin;

    const updatedUser = await user.save();

    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User updated.', updatedUser);
  } catch (error) {
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  getAllUsers,
  registerUser,
  registerUserByGoogle,
  signInUser,
  getUserById,
  updateProfile,
  deleteUser,
  updateUser
};
