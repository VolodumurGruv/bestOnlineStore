import express from 'express';
import isAuth from '../utils/auth.js';
import {
  upload,
  uploadFile,
  deleteFile
} from '../controllers/uploadController.js';

const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, upload.single('file'), uploadFile);
uploadRouter.post('/delete-file', isAuth, deleteFile);

export default uploadRouter;
