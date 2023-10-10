import express from 'express';
import { fetchAndSendData } from '../controllers/dataController.js';
import isAuth from '../utils/auth.js';
import isAdmin from '../utils/admin.js';

const dataRouter = express.Router();

dataRouter.get('/compare-data', isAuth, isAdmin, fetchAndSendData);

export default dataRouter;
