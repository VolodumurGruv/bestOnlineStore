import Order from '../models/orderSchema.js';
//import sendEmail from '../utils/email.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name');
    logger.info('All orders fetched successfully');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'All orders in payload.', orders);
  } catch (error) {
    logger.error('Error while fetching all orders', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getOrderHistory = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId });

    logger.info('Order(s) fetched for user: ', req.user._id);
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Your order(s) in payload.', orders);
  } catch (error) {
    logger.error('Error while getting order history: ', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      logger.info('Order found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order found.', order);
    } else {
      logger.error('Order not found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while fetching order by ID:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const createOrder = async (req, res) => {
  if (!req.user || !req.user._id) {
    return handleResponse(res, HTTP_STATUS_CODES.UNAUTHORIZED, 'Unauthorized');
  }
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
      isPaid
    } = req.body;

    const newOrderData = {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
      user: req.user._id,
      isPaid,
      paidAt: Date.now(),
      paymentResult: {
        id: 'real_payment_id',
        status: 'success',
        update_time: Date.now(),
        email_address: req.user.email,
      },
    };

    const createdOrder = await Order.create(newOrderData);
    logger.info('Order created:', createdOrder._id);
    return handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Order created.', createdOrder);
  } catch (error) {
    logger.error('Error while creating order', error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      const { id } = req.body;

      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id,
        status: 'success',
        update_time: Date.now(),
        email_address: req.user.email,
      };

      const updatedOrder = await order.save();
      logger.info('Order paid:', req.params.id);
      return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order has been paid.', updatedOrder);
    } else {
      logger.error('Order not found for payment:', req.params.id);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while updating order to paid:', req.params.id, error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const changeStatus = async (req, res) => {
  const { orderId } = req.params;
  const updateFields = { ...req.body };

  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        updateFields
      },
      { new: true }
    );

    if (!order) {
      logger.error('Order not found for update:', orderId);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.ORDER_NOT_FOUND);
    }

    logger.info('Order updated:', orderId);
    return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order updated.', order);
  } catch (error) {
    logger.error(error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_RVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (deletedOrder) {
      logger.info('Order deleted:', orderId);
      return handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order deleted.', deletedOrder);
    } else {
      logger.error('Order not found for delete:', orderId);
      return handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while deleting order:', req.params.id, error);
    return handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  getAllOrders,
  getOrderHistory,
  getOrderById,
  createOrder,
  updateOrder,
  changeStatus,
  deleteOrder,
};
