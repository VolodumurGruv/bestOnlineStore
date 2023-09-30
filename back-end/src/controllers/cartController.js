import Cart from '../models/cartSchema.js';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    if (!userId || !productId || !quantity || !Number.isInteger(quantity) || quantity <= 0) {
      logger.error('Invalid input data.');
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', 'Invalid input data.');
    }

    const product = await Product.findById(productId);

    if (!product) {
      logger.error('Product not found.');
      return handleResponse(res, HTTP_STATUS_CODES.PRODUCT_NOT_FOUND, 'fault', MESSAGES.PRODUCT_NOT_FOUND);
    }

    if (product.instock && quantity > product.countInStock) {
      logger.error('Insufficient stock.');
      return handleResponse(res, HTTP_STATUS_CODES.INSUFFICIENT_STOCK, 'fault', 'Insufficient stock.');
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    let cartItem = cart.items.find(item => item.product.toString() === productId);

    if (!cartItem) {
      cartItem = {
        name: product.name,
        price: product.price,
        image: product.baseImage,
        product: productId,
        quantity: quantity
      };
      cart.items.push(cartItem);
    }

    cartItem.quantity = quantity;

    cart.totalPrice = cart.items.reduce((total, item) => {
      const productPrice = item.price;
      return total + productPrice * item.quantity;
    }, 0);

    await cart.save();

    const message = cartItem.quantity > 0 ? 'Product was successfully updated in cart.' : 'Product was successfully removed from cart.';
    logger.info(message);
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', message, cart);
  } catch (error) {
    logger.error('Internal Server Error: ', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      logger.error('Consumer cart is empty.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Consumer cart is empty.');
    }

    logger.info('Cart successfully fetched.');
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User cart in payload.', cart);
  } catch (error) {
    logger.error('Internal Server Error.', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      logger.error('Consumer cart is empty.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Consumer cart is empty.');
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    logger.info('Cart is successfuly cleared.');
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Cart is succcessfuly cleared.');
  } catch (error) {
    logger.error('Internal Server Error: ', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

export {
  addToCart,
  getCart,
  clearCart
};
