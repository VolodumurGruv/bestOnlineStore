import express from 'express';
import RateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

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

const port = 30000;
const app = express();
const uri = `mongodb+srv://team:${process.env.MONGODB_PASSWORD}@cluster0.qfcqvtb.mongodb.net/?retryWrites=true&w=majority`;

const limiter = RateLimit({
  windowMs: 1*60*1000,
  max: 10
});

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', (req, res, next) => {
  console.log(req.originalUrl);
  res.header('Access-Control-Allow-Origin',
    '*');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials',
    'true');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization');
  next();
});

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/upload', uploadRouter);

const staticPath = path.join(__dirname, pathToIndex);
app.use(express.static(staticPath));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(staticPath, 'favicon.ico'));
});

mongoose.connect(uri, {})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Connection error:', error);
  });

const dbConnection = mongoose.connection;
dbConnection
  .on('error', (err) => {
    console.log(`Connection error ${err}`);
  });
dbConnection
  .once('open', () => {
    console.log('Connected to DB!');
  });


app.get('*', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

app.on('error', error => {
  if (error.code === 'EACCES') {
    console.log(`No access to port: ${port}.`);
  }
});

app.on('clientServer', (error, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
