import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';
import generateToken from '../utils/token.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES,
  TOKEN_DURATIONS
} from '../utils/constants.js';

class AuthService {
  static async signInUser(email, password) {
    try {
      const user = await User.findOne({ email });

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user, TOKEN_DURATIONS.USER);

        return {
          status: HTTP_STATUS_CODES.OK,
          message: 'User signed in successfully.',
          data: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isAnonymous: user.isAnonymous,
            token,
          },
        };
      } else {
        return {
          status: HTTP_STATUS_CODES.UNAUTHORIZED,
          message: MESSAGES.INVALID_CREDENTIALS,
          data: null,
        };
      }
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: 'Error while signing in user.',
        data: error,
      };
    }
  }

}

export default AuthService;
