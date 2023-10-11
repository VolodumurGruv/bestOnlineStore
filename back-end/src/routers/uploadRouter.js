import express from 'express';
import uploadValidation from '../validation/uploadValidation.js';
import isAuth from '../utils/auth.js';
import {
  upload,
  uploadFile,
  deleteFile
} from '../controllers/uploadController.js';

const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, uploadValidation, upload.single('file'), uploadFile);
uploadRouter.post('/delete-file', isAuth, deleteFile);

export default uploadRouter;
