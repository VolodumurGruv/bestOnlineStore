import User from '../models/userSchema.js';
import Order from '../models/orderSchema.js';
import Review from '../models/reviewSchema.js';
import ShippingAddress from '../models/shippingAddressSchema.js';
import bcrypt from 'bcryptjs';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';

class UserService {
  static async getUserById(userId) {
    try {
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
        return {
          status: HTTP_STATUS_CODES.OK,
          message: 'User was found.',
          data: userData,
        };
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
        message: 'Error while fetching user by ID.',
        data: error,
      };
    }
  }

  static async updateProfile(userId, requestBody) {
    try {
      const user = await User.findById(userId);

      if (user) {
        user.firstName = requestBody.firstName || user.firstName;
        user.lastName = requestBody.lastName || user.lastName;
        user.email = requestBody.email || user.email;
        user.phone = requestBody.phone || user.phone;

        if (
          !user.isAnonymous === true &&
          !user.googleId &&
          !bcrypt.compareSync(requestBody.password, user.password)
        ) {
          return {
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message: MESSAGES.INVALID_CREDENTIALS,
            data: null,
          };
        }

        let address = await ShippingAddress.findOne({ user: userId });

        if (address) {
          address.deliveryMethod = requestBody.deliveryMethod || address.deliveryMethod;
          address.address = requestBody.address || address.address;
          address.city = requestBody.city || address.city;
          address.country = requestBody.country || address.country;
          address.postalCode = requestBody.postalCode || address.postalCode;
          address.novaPoshtaAddress = requestBody.novaPoshtaAddress || address.novaPoshtaAddress;
        } else {
          address = new ShippingAddress({
            user: userId,
            deliveryMethod: requestBody.deliveryMethod,
            address: requestBody.address,
            city: requestBody.city,
            country: requestBody.country,
            postalCode: requestBody.postalCode,
            novaPoshtaAddress: requestBody.novaPoshtaAddress,
          });
        }

        const updatedAddress = await address.save();
        user.shippingAddress = updatedAddress._id;

        const updatedUser = await user.save();

        const populatedUser = await User.findById(updatedUser._id)
          .select('-password -isAdmin -resetPasswordToken -resetPasswordExpires')
          .populate('shippingAddress');

        return {
          status: HTTP_STATUS_CODES.OK,
          message: MESSAGES.USER_WAS_UPDATED,
          data: {
            user: populatedUser,
          },
        };
      }
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: 'Error while updating user profile.',
        data: error,
      };
    }
  }

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
