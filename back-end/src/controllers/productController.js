import { validationResult } from 'express-validator';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const skip = (page - 1) * perPage;

  try {
    let query = Product.find();

    if (req.query.minPrice) {
      query = query.where('price').gte(parseInt(req.query.minPrice, 10));
    }
    if (req.query.maxPrice) {
      query = query.where('price').lte(parseInt(req.query.maxPrice, 10));
    }

    if (req.query.category) {
      query = query.where('category').equals(req.query.category);
    }

    if (req.query.sortByPrice === 'asc') {
      query = query.sort({ price: 1 });
    } else if (req.query.sortByPrice === 'desc') {
      query = query.sort({ price: -1 });
    }

    if (req.query.sortByRating === 'asc') {
      query = query.sort({ raiting: 1 });
    } else if (req.query.sortByRating === 'desc') {
      query = query.sort({ raiting: -1 });
    }

    query = query.skip(skip).limit(perPage);

    const products = await query.exec();
    const totalProducts = await Product.countDocuments(query.getQuery());
    return sendRes(res, HTTP_STATUS_CODES.OK, 'All products in payload.', { products, totalProducts });
  } catch (error) {
    logger.error('Error while fetching all products', error);
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

const searchProducts = async (req, res) => {
  const query = JSON.parse(JSON.stringify(req.query))['keyword'];

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.VALIDATION_ERROR, errors.array());
    }

    const products = await Product.find({
      $or: [
        { name: { $regex: new RegExp(`${query}`, 'i') } },
        { descr: { $regex: new RegExp(`${query}`, 'i') } },
        { brand: { $regex: new RegExp(`${query}`, 'i') } },
        { category: { $regex: new RegExp(`${query}`, 'i') } },
        { subcategory: { $regex: new RegExp(`${query}`, 'i') } }
      ]
    });

    if (products.length > 0) {
      return sendRes(res, HTTP_STATUS_CODES.OK, 'Products found.', products);
    } else {
      return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
    }
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.BAD_REQUEST, MESSAGES.EMPTY_QUERY_ERROR, error);
  }
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
    const createdProduct = await Product.create(newProductData);

    return sendRes(res, HTTP_STATUS_CODES.CREATED, 'Product created.', createdProduct);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'Error while creating product.', error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (updatedProduct) {
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
