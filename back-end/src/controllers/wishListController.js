import User from '../models/userSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const getWishList = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
      logger.error(MESSAGES.USER_NOT_FOUND);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    const wishListProducts = user.wishList;

    return handleResponse(res, HTTP_STATUS_CODES.OK, 'Wishlist retrieved successfully.', wishListProducts);
  } catch (error) {
    logger.error('Error getting wishlist:', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error getting wishlist.', error);
  }
};

const addToWishList = async (req, res) => {
  try {
    const userId = req.user._id;

    const {productId} = req.body;

    const user = await User.findById(userId);

    if (!user) {
      logger.error(MESSAGES.USER_NOT_FOUND);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    if (user.wishList.includes(productId)) {
      logger.info('Product is already in the wishlist.');
      return handleResponse(res, HTTP_STATUS_CODES.CONFLICT, 'Product is already in the wishlist.');
    }

    user.wishList.push(productId);
    await user.save();

    return handleResponse(res, HTTP_STATUS_CODES.CREATED, 'Product was successfully added to the wishlist.');
  } catch (error) {
    logger.error('Error adding to wishlist:', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error adding to wishlist.', error);
  }
};

const removeFromWishList = async (req, res) => {
  try {
    const userId = req.user._id;

    const {productId} = req.params;

    const user = await User.findById(userId);

    if (!user) {
      logger.error(MESSAGES.USER_NOT_FOUND);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    if (!user.wishList.includes(productId)) {
      logger.error(MESSAGES.PRODUCT_NOT_FOUND);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'Product is not in the wishlist.');
    }

    user.wishList = user.wishList.filter(product => product.toString() !== productId);
    await user.save();

    logger.info('Product was successfully removed from the wishlist');
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'Product was successfully removed from the wishlist.');
  } catch (error) {
    logger.error('Error removing from wishlist:', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error removing from wishlist.', error);
  }
};

export {
  getWishList,
  addToWishList,
  removeFromWishList
};
