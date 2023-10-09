import Order from '../models/orderSchema.js';
import Cart from '../models/cartSchema.js';
import ShippingAddress from '../models/shippingAddressSchema.js';
import sendEmail from '../utils/email.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';

const getAllOrders = async (req, res) => {
  const { status } = req.query;

  try {
    const orders = await Order.find(status ? { status } : {}).populate('user', 'name');

    if (!orders || orders.length === 0) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.ORDER_NOT_FOUND);
    }

    return sendRes(res, HTTP_STATUS_CODES.OK, 'All orders in payload.', orders);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while fetching all orders.', error);
  }
};

const getOrderHistory = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId });

    return sendRes(res, HTTP_STATUS_CODES.OK, 'Your order(s) in payload.', orders);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while getting order history.', error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'Order found.', order);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while fetching order by ID.', error);
  }
};

const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, 'Consumer cart is empty.');
    }

    let existAddress = await ShippingAddress.findOne({ user: userId });

    if (!existAddress) {
      existAddress = new ShippingAddress({
        user: userId,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        deliveryMethod: req.body.deliveryMethod,
        novaPoshtaAddress: req.body.novaPoshtaAddress,
      });
    } else {
      const { address, city, country, postalCode, deliveryMethod, novaPoshtaAddress } = req.body;

      existAddress.address = address || existAddress.address;
      existAddress.city = city || existAddress.city;
      existAddress.country = country || existAddress.country;
      existAddress.postalCode = postalCode || existAddress.postalCode;
      existAddress.deliveryMethod = deliveryMethod || existAddress.deliveryMethod;
      existAddress.novaPoshtaAddress = novaPoshtaAddress || existAddress.novaPoshtaAddress;
    }

    const newAddress = await existAddress.save();

    const order = new Order({
      cart: cart._id,
      shippingAddress: newAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: cart.totalPrice,
      user: userId,
    });

    await order.save();

    const createdOrder = await Order.findOne({ user: userId }).populate('cart');

    return sendRes(res, HTTP_STATUS_CODES.CREATED, 'Order created successfully.', createdOrder);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.DATABASE_ERROR, error);
  }
};

const makePaymentOrder = async (req, res) => {
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

      sendEmail(req.user.email, 'Changes on your order', `Order ${req.params.id} was paid.`);

      const cart = await Cart.findOne({ user: req.user._id });

      cart.items = [];
      cart.totalPrice = 0;
      await cart.save();

      return sendRes(res, HTTP_STATUS_CODES.OK, 'Order has been paid.', updatedOrder);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
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
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.ORDER_NOT_FOUND);
    }

    sendEmail(req.user.email, 'Changes on your order', `Order ${orderId} was updated.`);

    return sendRes(res, HTTP_STATUS_CODES.OK, 'Order updated.', order);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_RVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndRemove(orderId);
    if (deletedOrder) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'Order deleted.', deletedOrder);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.ORDER_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while deleting order.', error);
  }
};

export {
  getAllOrders,
  getOrderHistory,
  getOrderById,
  createOrder,
  makePaymentOrder,
  changeStatus,
  deleteOrder,
};
