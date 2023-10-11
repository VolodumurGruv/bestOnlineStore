import { body } from 'express-validator';

const uploadValidation = [
  body('file')
    .custom((value, { req }) => {
      if (!value) {
        throw new Error('File is required.');
      }

      if (!value.mimetype.startsWith('image/')) {
        throw new Error('Uploaded file is not an image.');
      }

      return true;
    }),
];

export default uploadValidation;
