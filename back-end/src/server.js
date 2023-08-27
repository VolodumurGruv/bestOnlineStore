import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import path from 'path';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import dbConnection from './db.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const args = process.argv.slice(2);
console.log('args: ' + args);
let mode = 'develop';
let pathToIndex = '../../tests/';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--mode' && i + 1 < args.length) {
    mode = args[i + 1];
    break;
  }
}
console.log('mode: ' + mode);
if (mode === 'product') pathToIndex = '../../front-end/dist/front-end/';
console.log('path: ' + pathToIndex);

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

app.use(cors(corsOptions));
app.set('trust proxy', 1);
app.get('/ip', (req, res) => {
  res.send(req.ip);
});
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('*', (req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/upload', uploadRouter);

const staticPath = path.join(__dirName, pathToIndex);

app.use(express.static(staticPath));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(staticPath, 'favicon.ico'));
});

app.get('*', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.use((error, req, res, next) => {
  console.error('err: ' + error.message);
  res.status(500).json({
    message: 'fault',
    text: 'Something went wrong!',
    payload: error
  });
});

const server = app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

server.on('close', () => {
  console.log('Server is shutting down. Disconnecting from DB...');
  dbConnection.close(() => {
    console.log('Disconnected from DB.');
    process.exit(0);
  });
});

app.on('error', error => {
  if (error.code === 'EACCES') {
    console.log(`No access to port: ${port}.`);
  }
});

app.on('clientServer', (error, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
