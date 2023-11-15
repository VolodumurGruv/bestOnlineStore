import { validationResult } from 'express-validator';
import Product from '../models/productSchema.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import ProductService from '../services/productService.js';

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const skip = (page - 1) * perPage;

  const result = await ProductService.getAllProducts(req.query, skip, perPage);
  return sendRes(res, result.status, result.message, result.data);
};

const searchProducts = async (req, res) => {
  const query = JSON.parse(JSON.stringify(req.query))['keyword'];

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.VALIDATION_ERROR, errors.array());
  }

  const result = await ProductService.searchProducts(query);
  return sendRes(res, result.status, result.message, result.data);
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews');
    if (product) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'Product found.', product);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while fetching product by ID.', error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProductData = req.body;
    const newProduct = await Product.create(newProductData);

    newProduct.markModified('characteristics');
    const createdProduct = await newProduct.save();

    return sendRes(res, HTTP_STATUS_CODES.CREATED, 'Product created.', createdProduct);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while creating product.', error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const refreshedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

    if (refreshedProduct) {
      refreshedProduct.markModified('characteristics');
      const updatedProduct = await refreshedProduct.save();

      return sendRes(res, HTTP_STATUS_CODES.OK, 'Product updated.', updatedProduct);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while updating product.', error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (deletedProduct) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'Product deleted.', deletedProduct);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while deleting product.', error);
  }
};

export {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
