import express from 'express';
import data from '../data.js';//for mocking while create a db
import User from '../models/user.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/api/seed', (req, res, next) => {

  User.insertMany(data.users)
    .then(createdUsers => {
      console.log(createdUsers);
      res.send(`<p>${createdUsers}</p>`);
    })
    .catch(error => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(error));
    });
});

userRouter.get('/api/users', expressAsyncHandler(async (req, res) => {
  console.log('before get');
  const users = await User.find({});
  console.log(`get: ${users}`);
  res.send(`<p>${users}</p>`);
}));

export default userRouter;
