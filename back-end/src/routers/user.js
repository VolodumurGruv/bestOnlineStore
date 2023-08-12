import express from 'express';
import data from '../data.js';//for mocking while create a db
import User from '../models/user.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/api/seed', (req, res, next) => {
  console.log('before insert');
  User.insertMany(data.users)
    .then(createdUsers => {
      console.log('inside then');
      console.log(createdUsers);
      res.send(`<p>${createdUsers}</p>`);
    })
    .catch(error => {
      console.log(error);
    });
});
/*  .catch(error => {
    console.log(error);
    res.send(`<p>${error}</p>`);
  })
);*/

userRouter.get('/', expressAsyncHandler(async (req, res) => {
  console.log('before get');
  const users = await User.find({});
  console.log(`get: ${users}`);
  res.send(`<p>${users}</p>`);
}));

export default userRouter;
