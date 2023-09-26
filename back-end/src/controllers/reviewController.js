import Review from '../models/reviewSchema.js';
import User from '../models/userSchema.js';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const addReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    if (!user || !product || !rating || !comment) {
      logger.error('Missing required fields for review:', req.body);
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', MESSAGES.MISSING_REQUIRED_FIELDS);
    }

    const existingUser = await User.findById(user);
    const productToUpdate = await Product.findById(product);

    if (!productToUpdate || !existingUser) {
      logger.error('User or product not exist.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.PRODUCT_NOT_FOUND);
    }

    const newReview = new Review({
      user,
      product,
      rating,
      comment,
    });

    await newReview.save();

    productToUpdate.numReviews += 1;
    productToUpdate.raiting = ((productToUpdate.raiting * (productToUpdate.numReviews - 1)) + rating) / productToUpdate.numReviews;

    await productToUpdate.save();

    logger.info('Review added successfully:', newReview._id);
    return handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Review added successfully', { review: newReview });
  } catch (error) {
    logger.error('Error while adding review', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  addReview
};
