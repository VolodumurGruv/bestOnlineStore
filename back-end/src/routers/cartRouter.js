import express from 'express';
import {
  addToCart,
  getCart,
  updateCartItem,
  clearCart
} from '../controllers/cartController.js';
import isAuth from '../utils/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add-to-cart', isAuth, addToCart);
cartRouter.get('/get-cart', isAuth, getCart);
cartRouter.put('/update-cart-item', isAuth, updateCartItem);
cartRouter.delete('/clear-cart', isAuth, clearCart);

export default cartRouter;
