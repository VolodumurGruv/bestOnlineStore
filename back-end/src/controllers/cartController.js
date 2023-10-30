import Cart from '../models/cartSchema.js';
import Product from '../models/productSchema.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import getUserById from '../utils/getUser.js';

const findLatestCart = async (userId) => {
  return Cart.findOne({ user: userId }).sort({ createdAt: -1 }).limit(1).exec();
};

const sendCartResponse = async (res, userId, message, cart) => {
  if (cart) {
    return sendRes(res, HTTP_STATUS_CODES.OK, message, cart);
  }

  try {
    const userCart = await findLatestCart(userId);

    if (!userCart) {
      const newCart = new Cart({ user: userId, items: [] });
      await newCart.save();
      return sendRes(res, HTTP_STATUS_CODES.OK, message, newCart);
    }
    return sendRes(res, HTTP_STATUS_CODES.OK, message, userCart);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    if (!userId || !productId || quantity === undefined || quantity < 0) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.INVALID_INPUT_DATA);
    }

    await getUserById(userId);

    const product = await Product.findById(productId);

    if (!product) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }

    if (product.instock && quantity > product.countInStock) {
      return sendRes(res, HTTP_STATUS_CODES.INSUFFICIENT_STOCK, MESSAGES.INSUFFICIENT_STOCK);
    }

    let cart = await findLatestCart(userId);

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    let cartItem = cart.items.find(item => item.product.toString() === productId);

    if (quantity === 0) {
      if (cartItem) {
        cart.items = cart.items.filter(item => item.product.toString() !== productId);
      }
    } else {
      if (!cartItem) {
        cartItem = {
          name: product.name,
          price: product.price,
          image: product.baseImage,
          product: productId,
          quantity: quantity
        };
        cart.items.push(cartItem);
      } else {
        cartItem.quantity = quantity;
      }
    }

    cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

    await cart.save();

    const message = cartItem.quantity > 0
      ? MESSAGES.PRODUCT_UPDATED_IN_CART
      : MESSAGES.PRODUCT_REMOVED_FROM_CART;

    return sendCartResponse(res, userId, message, cart);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    await getUserById(userId);
    return sendCartResponse(res, userId, MESSAGES.USER_CART_IN_PAYLOAD);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await findLatestCart(userId);

    if (!cart) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.CONSUMER_CART_EMPTY);
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    return sendCartResponse(res, userId, MESSAGES.CART_CLEARED_SUCCESSFULLY);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

export {
  addToCart,
  getCart,
  clearCart
};
