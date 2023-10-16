import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import getUserById from '../utils/getUser.js';
import getProductById from '../utils/getProduct.js';

const getWishList = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await getUserById(userId);

    const wishListProducts = user.wishList;
    return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.WISHLIST_RETRIEVED, wishListProducts);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, error.message, error);
  }
};

const addToWishList = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;
    const user = await getUserById(userId);

    if (user.wishList.includes(productId)) {
      return sendRes(res, HTTP_STATUS_CODES.CONFLICT, MESSAGES.PRODUCT_ALREADY_IN_WISHLIST);
    }

    await getProductById(productId);

    user.wishList.push(productId);

    await user.save();

    const updatedUser = await getUserById(userId);

    return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.PRODUCT_ADDED_TO_WISHLIST, updatedUser.wishList);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const removeFromWishList = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const user = await getUserById(userId);

    if (!user.wishList.includes(productId)) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_IN_WISHLIST);
    }

    user.wishList = user.wishList.filter(el => el !== null);
    user.wishList = user.wishList.filter(product => product.toString() !== productId);

    const updatedUser = await user.save();
    return sendRes(res, HTTP_STATUS_CODES.NO_CONTENT, MESSAGES.PRODUCT_REMOVED_FROM_WISHLIST, updatedUser.wishList);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, error.message, error);
  }
};

export {
  getWishList,
  addToWishList,
  removeFromWishList
};

