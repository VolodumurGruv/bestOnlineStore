import User from '../models/userSchema.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';

class UserService {
  static async deleteUser(userId) {
    try {
      const user = await User.findById(userId);

      if (user) {
        if (this.isAdmin(user)) {
          return {
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message: MESSAGES.CANNOT_DELETE_ADMIN,
            data: null,
          };
        } else {
          const deletedUser = await user.remove();
          return {
            status: HTTP_STATUS_CODES.OK,
            message: 'User deleted.',
            data: {
              user: deletedUser
            },
          };
        }
      } else {
        return {
          status: HTTP_STATUS_CODES.NOT_FOUND,
          message: MESSAGES.USER_NOT_FOUND,
          data: null,
        };
      }
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: MESSAGES.INTERNAL_SERVER_ERROR,
        data: error,
      };
    }
  }

  static async updateUser(userId, requestBody) {
    try {
      const user = await User.findById(userId);

      if (!user) {
        return {
          status: HTTP_STATUS_CODES.NOT_FOUND,
          message: MESSAGES.USER_NOT_FOUND,
          data: null,
        };
      }

      user.firstName = requestBody.firstName || user.firstName;
      user.lastName = requestBody.lastName || user.lastName;
      user.email = requestBody.email || user.email;
      user.phone = requestBody.phone || user.phone;
      user.isAdmin = requestBody.isAdmin || user.isAdmin;
      user.isAnonymous = requestBody.isAnonymous || user.isAnonymous;

      const updatedUser = await user.save();

      return {
        status: HTTP_STATUS_CODES.OK,
        message: 'User updated.',
        data: updatedUser,
      };
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: MESSAGES.INTERNAL_SERVER_ERROR,
        data: error,
      };
    }
  }

  static isAdmin(user) {
    return user.isAdmin === true;
  }
}

export default UserService;
