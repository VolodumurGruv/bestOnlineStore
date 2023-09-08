import { Storage } from '@google-cloud/storage';
import multer from 'multer';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import handleResponse from '../utils/handleResponse.js';

const storage = new Storage({
  projectId: `${process.env.GCLOUD_PROJECT}`,
  keyFilename: './credentials.json',
});
const bucket = storage.bucket(`${process.env.GCS_BUCKET}`);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const uploadFile = async (req, res) => {
  try {
    const { file } = req;

    const fileName = `${Date.now()}_${file.originalname}`;
    const fileStream = bucket.file(fileName).createWriteStream();

    fileStream.on('error', (error) => {
      logger.error('Error uploading file to GCS:', error);
      handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
    });

    fileStream.on('finish', async () => {
      logger.info('File uploaded to GCS successfully:', fileName);

      const { productId } = req.body;
      const product = await Product.findById(productId);

      if (product) {
        product.allImages.push(fileName);
        if (product.baseImage === 'no.jpg') {
          product.baseImage = fileName;
        }

        await product.save();

        handleResponse(res, HTTP_STATUS_CODES.CREATED, 'success', 'File saved on Google Cloud Storage.', fileName);
      } else {
        logger.error('Product not found for file upload:', productId);
        handleResponse(res, HTTP_STATUS_CODES.NOT_FOUND, 'fault', MESSAGES.PRODUCT_NOT_FOUND);
      }
    });

    fileStream.end(file.buffer);
  } catch (error) {
    logger.error('Error handling file upload:', error);
    handleResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, 'fault', MESSAGES.INTERNAL_SERVER_ERROR, error);
  }
};

export { upload, uploadFile };
