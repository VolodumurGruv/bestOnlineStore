import Cart from '../models/cartSchema.js';

const findLatestCart = async (userId) => {
  return Cart.findOne({ user: userId }).sort({ createdAt: -1 }).limit(1).exec();
};

export default findLatestCart;
