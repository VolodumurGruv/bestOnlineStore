import { Storage } from '@google-cloud/storage';
import multer from 'multer';
import Product from '../models/productSchema.js';

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
    const {file} = req;

    const fileName = `${Date.now()}_${file.originalname}`;
    const fileStream = bucket.file(fileName).createWriteStream();

    fileStream.on('error', (error) => {
      console.error('Error uploading file to GCS:', error);
      res.status(500).json({
        message: 'fault',
        text: 'Internal Server Error.',
        payload: error,
      });
    });

    fileStream.on('finish', async () => {
      console.log('File uploaded to GCS successfully.');

      const {productId} = req.body;
      const product = await Product.findById(productId);
      console.log(productId);
      console.log(product);

      if (product) {
        product.allImages.push(fileName);
        if (product.baseImage === 'no.jpg') {
          product.baseImage = fileName;
        }

        await product.save();

        res.json({
          message: 'success',
          text: 'File saved on Google Cloud Storage.',
          payload: fileName,
        });
      } else {
        res.status(404).json({
          message: 'fault',
          text: 'Product not found.',
        });
      }
    });

    fileStream.end(file.buffer);
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({
      message: 'fault',
      text: 'Internal Server Error.',
      payload: error,
    });
  }
};

export { upload, uploadFile };
