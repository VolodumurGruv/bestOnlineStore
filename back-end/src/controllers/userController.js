import fetch from 'node-fetch';
import { validationResult } from 'express-validator';
import User from '../models/userSchema.js';
import generateToken from '../utils/token.js';
import sendEmail from '../utils/email.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES,
  TOKEN_DURATIONS
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import UserService from '../services/userService.js';
import AuthService from '../services/authService.js';

const getAllUsers = async (req, res) => {
  const result = await UserService.getAllUsers();
  return sendRes(res, result.status, result.message, result.data);
};

const registerUser = async (req, res, next, anonymous = null) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.MISSING_REQUIRED_FIELDS, errors.array());
  }

  const { firstName, lastName, password, email, phone } = anonymous || req.body;
  const result = await UserService.registerUser(firstName, lastName, password, email, phone, anonymous, req.headers.authorization);
  return sendRes(res, result.status, result.message, result.data);
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

    if (existingUser) {
      const token = generateToken(existingUser, TOKEN_DURATIONS.USER);

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
    } else {
      const user = new User({
        googleId: userJSON.sub,
        firstName: userJSON.given_name || '',
        lastName: userJSON.family_name || '',
        email: userJSON.email,
        isAnonymous: false
      });

      const createdUser = await user.save();

      const token = generateToken(createdUser, TOKEN_DURATIONS.USER);

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
  const result = await AuthService.signInUser(email, password);
  return sendRes(res, result.status, result.message, result.data);
};

const initRestorePassword = async (req, res) => {
  const { email } = req.body;
  const result = await AuthService.initRestorePassword(email);
  return sendRes(res, result.status, result.message, result.data);
};

const restorePassword = async (req, res) => {
  const { token, newPassword } = req.body;
  const result = await AuthService.restorePassword(token, newPassword);
  return sendRes(res, result.status, result.message, result.data);
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const result = await UserService.getUserById(userId);
  return sendRes(res, result.status, result.message, result.data);
};

const updateProfile = async (req, res) => {
  const result = await UserService.updateProfile(req.user._id, req.body);
  return sendRes(res, result.status, result.message, result.data);
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
