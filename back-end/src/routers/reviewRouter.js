import express from 'express';
import { addReview } from '../controllers/reviewController.js';
import isAuth from '../utils/auth.js';

const reviewRouter = express.Router();

reviewRouter.post('/add', isAuth, addReview);

export default reviewRouter;
