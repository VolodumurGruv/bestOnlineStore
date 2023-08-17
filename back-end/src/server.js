import express from 'express';
<<<<<<< HEAD
=======
import helmet from 'helmet';
>>>>>>> front-end-login
import RateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config({ path: '../.env' });

const port = 30000;
const app = express();
const uri = `mongodb+srv://team:${process.env.MONGODB_PASSWORD}@cluster0.qfcqvtb.mongodb.net/?retryWrites=true&w=majority`;
=======
const port = 30000;
const app = express();
const uri = process.env.MONGODB_URL;
>>>>>>> front-end-login

const limiter = RateLimit({
  windowMs: 1*60*1000,
  max: 10
});

<<<<<<< HEAD
=======
app.use(helmet());
>>>>>>> front-end-login
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

const staticPath = path.join(__dirName, pathToIndex);

app.use(express.static(staticPath));

<<<<<<< HEAD
app.get("/favicon.ico", (req, res) => {
	res.sendFile(path.join(staticPath, "favicon.ico"));
});

mongoose
	.connect(uri, {})
	.then(() => {
		console.log("Connected to MongoDB Atlas");
	})
	.catch((error) => {
		console.error("Connection error:", error);
	});
=======
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
>>>>>>> front-end-login

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
<<<<<<< HEAD
	console.log(`Server at http://localhost:${port}`);
=======
  console.log(`Server at http://localhost:${port}`);
>>>>>>> front-end-login
});

app.on('error', error => {
  if (error.code === 'EACCES') {
    console.log(`No access to port: ${port}.`);
  }
});

app.on('clientServer', (error, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
<<<<<<< HEAD
});
=======
});
>>>>>>> front-end-login
