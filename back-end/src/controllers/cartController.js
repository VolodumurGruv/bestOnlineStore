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
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const product = await Product.findById(productId);

    if (!product) {
      logger.error('Product not found.');
      handleResponse(res, HTTP_STATUS_CODES.PRODUCT_NOT_FOUND, 'fault', 'Product not found.');
      return;
    }

    const existingItem = cart.items.find(item => item.product.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        name: product.name,
        price: product.price,
        image: product.baseImage,
        product: productId,
        quantity
      });
    }

    cart.totalPrice = cart.items.reduce((total, item) => {
      const productPrice = product.price;
      return total + productPrice * item.quantity;
    }, 0);

    await cart.save();

    logger.info('Product was successfully added to cart.');
    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Product was successfully added to cart.', cart);
  } catch (error) {
    logger.error('Internal Server Error: ', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      logger.error('Consumer cart is empty.');
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Consumer cart is empty.');
      return;
    }

    logger.info('Cart successfully fetched.');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'User cart in payload.', cart);
  } catch (error) {
    logger.error('Internal Server Error.', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const updateCartItem = async (req, res) => {
  try {
    const userId = req.user._id;

    const {productId} = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      logger.error('Product not found.');
      handleResponse(res, HTTP_STATUS_CODES.PRODUCT_NOT_FOUND, 'fault', MESSAGES.PRODUCT_NOT_FOUND);
      return;
    }

    const newQuantity = req.body.quantity;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      logger.error('Consumer cart is empty.');
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Consumer cart is empty.');
      return;
    }

    const cartItem = cart.items.find(item => item.product.toString() === productId);

    if (!cartItem) {
      logger.error('Product was not found in cart.');
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Product was not found in cart.');
      return;
    }

    if (newQuantity > 0) {
      cartItem.quantity = newQuantity;
    } else {
      cart.items = cart.items.filter(item => item.product.toString() !== productId);
    }

    cart.totalPrice = cart.items.reduce((total, item) => {
      const productPrice = product.price;
      return total + productPrice * item.quantity;
    }, 0);

    await cart.save();

    logger.info('Consumer cart was successfuly updated.');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Consumer cart was successfuly updated.', cart);
  } catch (error) {
    logger.error('Internal Server Error: ', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      logger.error('Consumer cart is empty.');
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', 'Consumer cart is empty.');
      return;
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    logger.info('Cart is successfuly cleared.');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Cart is succcessfuly cleared.');
  } catch (error) {
    logger.error('Internal Server Error: ', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.DATABASE_ERROR, error);
  }
};

export {
  addToCart,
  getCart,
  updateCartItem,
  clearCart
};
