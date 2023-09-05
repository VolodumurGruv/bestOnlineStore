import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    logger.info('All products fetched successfully');
    handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'All products in payload.', products);
  } catch (error) {
    logger.error('Error while fetching all products', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews');
    if (product) {
      logger.info('Product found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Product found.', product);
    } else {
      logger.error('Product not found by ID:', req.params.id);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while fetching product by ID:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProductData = req.body;
    const createdProduct = await Product.create(newProductData);
    logger.info('Product created:', createdProduct._id);
    handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'Product created.', createdProduct);
  } catch (error) {
    logger.error('Error while creating product', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (updatedProduct) {
      logger.info('Product updated:', productId);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Product updated.', updatedProduct);
    } else {
      logger.error('Product not found for update:', productId);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while updating product:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (deletedProduct) {
      logger.info('Product deleted:', productId);
      handleResponse(res, HTTP_STATUS_CODES.OK, 'success', 'Product deleted.', deletedProduct);
    } else {
      logger.error('Product not found for delete:', productId);
      handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', ERROR_MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    logger.error('Error while deleting product:', req.params.id, error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', ERROR_MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
