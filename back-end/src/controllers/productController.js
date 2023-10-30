import { validationResult } from 'express-validator';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';
import buildProductQuery from '../utils/buildProductQuery.js';

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const skip = (page - 1) * perPage;

  try {
    const query = buildProductQuery(req.query);

    query.skip(skip).limit(perPage);

    const [products, totalProducts] = await Promise.all([
      query.exec(),
      Product.countDocuments(query.getQuery()),
    ]);

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

    const regexOptions = { $regex: new RegExp(`${query}`, 'i') };
    const searchCriteria = {
      $or: [
        { name: regexOptions },
        { descr: regexOptions },
        { brand: regexOptions },
        { category: regexOptions },
        { subcategory: regexOptions }
      ]
    };

    const products = await Product.find(searchCriteria);

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
