import Order from '../models/orderSchema.js';
import logger from '../utils/logger.js';

const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  ORDER_NOT_FOUND: 'Order was not found.',
  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
};

const handleResponse = (res, status, message, text, payload = null) => {
  res.status(status).json({
    message,
    text,
    payload,
  });
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    logger.info('All orders fetched successfully');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'All orders in payload.', orders);
  } catch (error) {
    logger.error('Error while fetching all orders', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getUserCart = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    logger.info('User cart fetched for user:', req.user._id);
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Your cart in payload.', orders);
  } catch (error) {
    logger.error('Error while fetching user cart for user:', req.user._id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
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
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while fetching order by ID:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const createOrder = async (req, res) => {
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
    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Order created.', createdOrder);
  } catch (error) {
    logger.error('Error while creating order', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
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
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order has been paid.', updatedOrder);
    } else {
      logger.error('Order not found for payment:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while updating order to paid:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (deletedOrder) {
      logger.info('Order deleted:', orderId);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Order deleted.', deletedOrder);
    } else {
      logger.error('Order not found for delete:', orderId);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while deleting order:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  getAllOrders,
  getUserCart,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
