import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import CartService from '../services/cartService.js';

export const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    if (!userId || !productId || quantity === undefined || quantity < 0) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.INVALID_INPUT_DATA);
    }

    const result = await CartService.addToCart(userId, productId, quantity);
    return sendRes(res, HTTP_STATUS_CODES.OK, result.message, result.cart);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await CartService.getCart(userId);
    return sendRes(res, HTTP_STATUS_CODES.OK, result.message, result.cart);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await CartService.clearCart(userId);
    return sendRes(res, HTTP_STATUS_CODES.OK, result.message, result.cart);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};
