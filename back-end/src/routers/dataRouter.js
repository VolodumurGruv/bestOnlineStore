import express from 'express';
import {
  fetchAndSendData,
  getPopularProducts
} from '../controllers/dataController.js';
import isAuth from '../utils/auth.js';
import isAdmin from '../utils/admin.js';

const dataRouter = express.Router();

dataRouter.get('/compare-data', isAuth, isAdmin, fetchAndSendData);
dataRouter.get('/popular-products', isAuth/*, isAdmin*/, getPopularProducts);

export default dataRouter;
