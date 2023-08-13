import express from 'express';
import { fileURLToPath } from 'url'
import fs from 'fs';
import https from 'https';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.js';

dotenv.config({ path: '../.env' });

const port = 1337;
const app = express();
const uri = `mongodb+srv://team:${process.env.MONGODB_PASSWORD}@cluster0.qfcqvtb.mongodb.net/?retryWrites=true&w=majority`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/*
app.use('*', (req, res) => {
  console.log(req.originalUrl);
});
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, '../../front-end/dist/front-end/');
app.use(express.static(staticPath));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(join(staticPath, 'favicon.ico'));
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
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
  .on("error", (err) => {
    console.log(`Connection error ${err}`);
  });
dbConnection
  .once("open", () => {
    console.log("Connected to DB!");
  });

app.use('/api/users', userRouter);
app.use('/api/seed', userRouter);
/*
app.get('*', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
*/
const options={
  key: fs.readFileSync(path.join(__dirname,'../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname,'../cert/cert.pem'))
};

const sslServer=https.createServer(options,app);
sslServer.listen(1337, () => {
  console.log('Secure server is listening on port 1337');
});
