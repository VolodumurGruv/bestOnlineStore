import { Storage } from '@google-cloud/storage';
import multer from 'multer';
import Product from '../models/productSchema.js';
import logger from '../utils/logger.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from '../utils/constants.js';
import sendRes from '../utils/handleResponse.js';

const bucketPath = `${process.env.BUCKET_PATH}`;

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
    const fileName = `${Date.now()}_${file['originalname']}`;
    const fileStream = bucket.file(fileName).createWriteStream();

    fileStream.on('error', (error) => {
      return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_UPLOADING_FILE, error);
    });

    fileStream.on('finish', async () => {
      logger.info('File uploaded to GCS successfully:', fileName);

      const { productId } = req.body;
      const product = await Product.findById(productId);

      if (product) {
        const imagePath = bucketPath.concat(fileName);

        product.allImages.push(imagePath);

        if (product.baseImage === 'no.jpg') {
          product.baseImage = imagePath;
        }

        await product.save();

        logger.info('The image successfully added to product.');

        return sendRes(res, HTTP_STATUS_CODES.CREATED, MESSAGES.FILE_SAVED_ON_GCS, imagePath);
      } else {
        return sendRes(res, HTTP_STATUS_CODES.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND);
      }
    });

    fileStream.end(file.buffer);
  } catch (error) {
    return sendRes(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, MESSAGES.ERROR_HANDLING_FILE_UPLOAD, error);
  }
};

export { upload, uploadFile };
