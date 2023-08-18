import express from 'express';
import Product from '../models/productSchema.js';
import data from '../data.js';
import isAuth from '../utils/auth.js';
import isAdmin from '../utils/admin.js';

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
  Product.find({})
    .then(products => {
      res
        .send({
          message: 'success',
          text: 'All products in payload.',
          payload: { products }
        });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

productRouter.get('/seed', (req, res) => {
  Product.insertMany(data.products)
    .then(createdProducts => {
      res
        .send({
          message: 'success',
          text: 'Products created.',
          payload: { createdProducts }
        });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

productRouter.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product) {
        res
          .send({
            message: 'success',
            text: 'Products created.',
            payload: { product }
          });
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Product was not find.'
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

productRouter.post('/', isAuth, isAdmin, (req, res) => {
  const product = new Product({
    name: 'product ' + Date.now(),
    descr: 'sample description',
    shortDescr: 'short description',
    image: 'no-path',
    price: 0,
    category: 'sample category',
    brand: 'sample brand',
    instock: true,
    countInStock: 0,
    raiting: 3,
    numReviews: 0
  });

  product
    .save()
    .then(createdProduct => {
      res
        .send({
          message: 'success',
          text: 'Product createdProduct.',
          payload: {
            product: createdProduct
          }
        });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

productRouter.put('/:id', isAuth, isAdmin, (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then(product => {
      if (product) {
        product.name = req.body.name;
        product.descr = req.body.descr;
        product.shortDescr = req.body.shortDescr;
        product.price = req.body.price;
        product.image = req.body.image;
        product.category = req.body.category;
        product.brand = req.body.brand;
        product.instock = req.body.instock;
        product.countInStock = req.body.countInStock;

        product
          .save()
          .then(updatedProduct => {
            res
              .send({
                message: 'success',
                text: 'Product updatedProduct.',
                payload: {
                  product: updatedProduct
                }
              });
          })
          .catch(error => {
            res
              .status(500)
              .send({
                message: 'falt',
                text: 'Internal Server Error.',
                payload: { error }
              });
          });
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Product was not find.'
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

productRouter.delete('/:id', isAuth, isAdmin, (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then(product => {
      if (product) {
        product
          .remove()
          .then(() => {
            res
              .send({
                message: 'success',
                text: 'Product deleted.',
                payload: { product }
              });
          })
          .catch(error => {
            res
              .status(500)
              .send({
                message: 'falt',
                text: 'Internal Server Error.',
                payload: { error }
              });
          });
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'Product was not find.'
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Internal Server Error.',
          payload: { error }
        });
    });
});

export default productRouter;
