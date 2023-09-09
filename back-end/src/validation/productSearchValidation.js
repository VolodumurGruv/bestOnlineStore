import { query } from 'express-validator';

const validateProductSearch = [
  query('keyword')
    .notEmpty()
    .isString()
    .withMessage('Query should be string')
];

export default validateProductSearch;
