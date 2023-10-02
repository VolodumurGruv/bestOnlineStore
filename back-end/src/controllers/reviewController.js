import Review from '../models/reviewSchema.js';
import User from '../models/userSchema.js';
import Product from '../models/productSchema.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';

const addReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    if (!user || !product || !rating || !comment) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.MISSING_REQUIRED_FIELDS);
    }

    const existingUser = await User.findById(user);
    const productToUpdate = await Product.findById(product);

    if (!productToUpdate || !existingUser) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }

    const newReview = new Review({
      user,
      product,
      rating,
      comment,
    });

    await newReview.save();

    productToUpdate.numReviews += 1;
    productToUpdate.rating =
      ((productToUpdate.rating * (productToUpdate.numReviews - 1)) + rating) / productToUpdate.numReviews;

    await productToUpdate.save();

    return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.REVIEW_ADDED_SUCCESSFULLY, { review: newReview });
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_WHILE_ADDING_REVIEW, error);
  }
};

const getReviewsForProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId });

    return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.REVIEWS_RETRIEVED_SUCCESSFULLY, { reviews });
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_WHILE_RETRIEVING_REVIEWS, error);
  }
};

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;

    const reviewToUpdate = await Review.findById(reviewId);

    if (!reviewToUpdate) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.REVIEW_NOT_FOUND);
    }

    if (req.user._id.equals(reviewToUpdate.user)) {
      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { rating, comment },
        { new: true }
      );

      return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.REVIEW_UPDATED_SUCCESSFULLY, { review: updatedReview });
    } else {
      return sendRes(res, HTTP_STATUS_CODES.UNAUTHORIZED, MESSAGES.UNAUTHORIZED_TO_UPDATE_REVIEW);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_WHILE_UPDATING_REVIEW, error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const reviewToDelete = await Review.findById(reviewId);

    if (!reviewToDelete) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.REVIEW_NOT_FOUND);
    }

    if (req.user._id.equals(reviewToDelete.user) || req.user.isAdmin === true) {
      const deletedReview = await Review.findByIdAndDelete(reviewId);

      return sendRes(res, HTTP_STATUS_CODES.OK, MESSAGES.REVIEW_DELETED_SUCCESSFULLY, { review: deletedReview });
    } else {
      return sendRes(res, HTTP_STATUS_CODES.UNAUTHORIZED, MESSAGES.UNAUTHORIZED_TO_DELETE_REVIEW);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_WHILE_DELETING_REVIEW, error);
  }
};

export {
  addReview,
  getReviewsForProduct,
  updateReview,
  deleteReview
};
