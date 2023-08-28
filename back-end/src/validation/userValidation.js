import { body } from 'express-validator';

const validateUserData = [
  body('name')
    .exists({ checkFalsy: true })
    .withMessage('User name is required')
    .isString()
    .withMessage('User name should be string')
    .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ]{3,30}(?: [A-Za-zА-Яа-яІіЇїЄєҐґ]{3,30}){0,1}$/)
    .withMessage('Name must be between 3 and 30 characters.'),
  body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 16 })
    .withMessage('Password must be between 8 and 16 characters.'),
  body('email')
    .isEmail()
    .withMessage('Invalid email format.'),
  body('phone')
    .matches(/^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,}-\d{2,}-\d{2,}$/)
    .withMessage('Invalid phone number format.')
];

export default validateUserData;
