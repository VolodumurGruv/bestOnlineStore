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
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.MISSING_REQUIRED_FIELDS);
    }

    const existingUser = await User.findById(user);
    const productToUpdate = await Product.findById(product);

    if (!productToUpdate || !existingUser) {
      logger.error('User or product not exist.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
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
    return handleResponse(res, HTTP_STATUS_CODES.CREATED, 'Review added successfully', { review: newReview });
  } catch (error) {
    logger.error('Error while adding review.', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getReviewsForProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ product: productId });

    logger.info('Reviews retrieved successfully.', reviews);
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'Reviews retrieved successfully.', { reviews });
  } catch (error) {
    logger.error('Error while retriving reviews.', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;

    const reviewToUpdate = await Review.findById(reviewId);

    if (!reviewToUpdate) {
      logger.error('Review not found.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.REVIEW_NOT_FOUND);
    }

    if (req.user._id.equals(reviewToUpdate.user)) {
      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { rating, comment },
        { new: true }
      );

      logger.info('Review updated successfully.');
      return handleResponse(res, HTTP_STATUS_CODES.OK, 'Review updated successfully', { review: updatedReview });
    } else {
      logger.error('Unauthorized to update this review.');
      return handleResponse(res, HTTP_STATUS_CODES.UNAUTHORIZED, 'Unauthorized to update this review');
    }
  } catch (error) {
    logger.error('Error while updating review.', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const reviewToDelete = await Review.findById(reviewId);

    if (!reviewToDelete) {
      logger.error('Review not found.');
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.REVIEW_NOT_FOUND);
    }

    if (req.user._id.equals(reviewToDelete.user) || req.user.isAdmin === true) {
      const deletedReview = await Review.findByIdAndDelete(reviewId);

      logger.info('Review deleted successfully.');
      return handleResponse(res, HTTP_STATUS_CODES.OK, 'Review deleted successfully', { review: deletedReview });
    } else {
      logger.error('Unauthorized to delete this review.');
      return handleResponse(res, HTTP_STATUS_CODES.UNAUTHORIZED, 'Unauthorized to delete this review');
    }
  } catch (error) {
    logger.error('Error while deleting review.', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  addReview,
  getReviewsForProduct,
  updateReview,
  deleteReview
};
