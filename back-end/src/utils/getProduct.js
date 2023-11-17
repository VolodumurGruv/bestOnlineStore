import Product from '../models/productSchema.js';
import { MESSAGES } from './constants.js';

const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error(MESSAGES.PRODUCT_NOT_FOUND);
  }
  return product;
};

export default getProductById;
