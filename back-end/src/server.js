import dbConnection from './db.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import { fileURLToPath } from 'url';
import path from 'path';
import logger from './utils/logger.js';
import handleResponse from './utils/handleResponse.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import cartRouter from './routers/cartRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import reviewRouter from './routers/reviewRouter.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const args = process.argv.slice(2);

let mode = 'develop';
let pathToIndex = '../../tests/';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--mode' && i + 1 < args.length) {
    mode = args[i + 1];
    break;
  }
}
logger.info('mode: ' + mode);
if (mode === 'production') pathToIndex = '../../front-end/dist/front-end/';

const port = process.env.PORT || 30000;
const app = express();

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10
});

const corsOptions = {
  origin: true,
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'],
  credentials: true
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.set('trust proxy', 1);
app.get('/ip', (req, res) => {
  res.send(req.ip);
});
app.use(helmet());
app.use(limiter);
app.use(
  mongoSanitize({
    replaceWith: '_',
  }),
);
app.use('*', (req, res, next) => {
  logger.info(req.originalUrl);
  next();
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/review', reviewRouter);

const staticPath = path.join(__dirName, pathToIndex);

app.use(express.static(staticPath));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(staticPath, 'favicon.ico'));
});

app.get('*', (req, res) => {
  logger.info(JSON.stringify(req.headers));
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.use((error, req, res, next) => {
  logger.error('err: ' + error.message);
  handleResponse(res, 'fault', 'Something went wrong!', error);
});

const server = app.listen(port, () => {
  logger.info(`Server at http://localhost:${port}`);
});

server.on('close', () => {
  logger.info('Server is shutting down. Disconnecting from DB...');
  dbConnection.close(() => {
    logger.info('Disconnected from DB.');
    process.exit(0);
  });
});

app.on('error', error => {
  if (error.code === 'EACCES') {
    logger.error(`No access to port: ${port}.`);
  }
});

app.on('clientServer', (error, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

export default app;
