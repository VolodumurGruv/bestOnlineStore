import Review from '../models/reviewSchema.js';

export const addReview = async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

    if (!user || !product || !rating || !comment) {
      return res.status(400).json({
        message: 'fault',
        text: 'Missing required fields'
      });
    }

    const newReview = new Review({
      user,
      product,
      rating,
      comment
    });

    await newReview.save();

    res.status(201).json({
      message: 'success',
      text: 'Review added successfully',
      payload: { review: newReview }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'fault',
      text: 'Internal Server Error',
      payload: error
    });
  }
};
