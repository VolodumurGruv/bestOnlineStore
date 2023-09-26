import express from 'express';
import isAuth from '../utils/auth.js';
import { uploadFile } from '../controllers/uploadController.js';

const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, upload.single('file'), uploadFile);

export default uploadRouter;
