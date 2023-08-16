import express from 'express';
import Order from '../models/orderSchema.js';
import isAuth from '../utils/auth.js';
import  isAdmin from '../utils/admin.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, (req, res) => {
  Order.find({})
    .populate('user', 'name')
    .then(orders => {
      res.send({
        message: 'success',
        text: 'All orders in payload.',
        payload: {
          orders
        }
      });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.'
        });
    });
});

orderRouter.get('/cart', isAuth, (req, res) => {
  Order.find({ user: req.user._id })
    .then(orders => {
      res.send({
        message: 'success',
        text: 'Your cart in payload.',
        payload: {
          orders
        }
      });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.'
        });
    });
});

orderRouter.post('/', isAuth, (req, res) => {
  if (req.body.orderItems.length === 0) {
    res
      .status(400)
      .send({
        message: 'falt',
        text: 'Cart is empty.'
      });
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
      isPaid: true, //
      paidAt: Date.now(), //
      paymentResult: {
        id: 'real_payment_id', //
        status: 'success', //
        update_time: Date.now(), //
        email_address: req.user.email, //
      },
    });

    order
      .save()
      .then(createdOrder => {
        res
          .status(201)
          .send({
            message: 'success',
            text: 'New order created.',
            payload: {
              order: createdOrder
            }
          });
      })
      .catch(error => {
        res
          .status(500)
          .send({
            message: 'falt',
            text: 'Internal Server Error.'
          });
      });
  }
});

orderRouter.get('/:id', isAuth, (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      if (order) {
        res.send({
          message: 'success',
          text: 'Your order in payload.',
          payload: {
            order
          }
        });
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Order was not find.'
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.'
        });
    });
});

//заглушка. перевірка оплати завжди 'success'
orderRouter.put('/:id/pay', isAuth, (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: 'success', //
          update_time: Date.now(), //
          email_address: req.user.email, //
        };
        return order.save();
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Order was not find.'
          });
      }
    })
    .then(updatedOrder => {
      if (updatedOrder) {
        res
          .send({
            message: 'success',
            text: 'Order has been paid.',
            payload: {
              order: updatedOrder
            }
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.'
        });
    });
});

orderRouter.delete('/:id', isAuth, isAdmin, (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      if (order) {
        return order.remove();
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Order was not find.'
          });
      }
    })
    .then(deletedOrder => {
      if (deletedOrder) {
        res
          .send({
            message: 'success',
            text: 'Order was deleted.',
            payload: {
              order: deletedOrder
            }
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.'
        });
    });
});

export default orderRouter;
