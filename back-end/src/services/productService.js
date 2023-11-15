import Product from '../models/productSchema.js';
import buildProductQuery from '../utils/buildProductQuery.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';

class ProductService {
  static async getAllProducts(queryParams, skip, perPage) {
    try {
      const query = buildProductQuery(queryParams);
      query.skip(skip).limit(perPage);

      const [products, totalProducts] = await Promise.all([
        query.exec(),
        Product.countDocuments(query.getQuery()),
      ]);

      return {
        status: HTTP_STATUS_CODES.OK,
        message: 'All products in payload.',
        data: { products, totalProducts },
      };
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: MESSAGES.INTERNAL_SERVER_ERROR,
        data: error,
      };
    }
  }

  static async searchProducts(query) {
    try {
      const regexOptions = { $regex: new RegExp(`${query}`, 'i') };
      const searchCriteria = {
        $or: [
          { name: regexOptions },
          { brand: regexOptions },
          { category: regexOptions },
          { subcategory: regexOptions },
        ],
      };

      const products = await Product.find(searchCriteria);

      if (products.length > 0) {
        return {
          status: HTTP_STATUS_CODES.OK,
          message: 'Products found.',
          data: products,
        };
      } else {
        return {
          status: HTTP_STATUS_CODES.NOT_FOUND,
          message: MESSAGES.PRODUCT_NOT_FOUND,
          data: null,
        };
      }
    } catch (error) {
      return {
        status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message: MESSAGES.INTERNAL_SERVER_ERROR,
        data: error,
      };
    }
  }
}

export default ProductService;
