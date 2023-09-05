import express from 'express';
import {
  getAllOrders,
  getUserCart,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js';
import isAuth from '../utils/auth.js';
import  isAdmin from '../utils/admin.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, getAllOrders);
orderRouter.get('/cart', isAuth, getUserCart);
orderRouter.post('/', isAuth, createOrder);
orderRouter.get('/:id', isAuth, getOrderById);
orderRouter.put('/:id/pay', isAuth, updateOrder);
orderRouter.delete('/:id', isAuth, isAdmin, deleteOrder);

export default orderRouter;
