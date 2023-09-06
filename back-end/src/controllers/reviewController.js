import Review from '../models/reviewSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const addReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    if (!user || !product || !rating || !comment) {
      logger.error('Missing required fields for review:', req.body);
      return handleResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, 'fault', ERROR_MESSAGES.MISSING_REQUIRED_FIELDS);
    }

    const newReview = new Review({
      user,
      product,
      rating,
      comment,
    });

    await newReview.save();

    logger.info('Review added successfully:', newReview._id);
    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Review added successfully', { review: newReview });
  } catch (error) {
    logger.error('Error while adding review', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  addReview
};
