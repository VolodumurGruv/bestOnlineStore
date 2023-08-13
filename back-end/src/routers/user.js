import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import data from '../data.js';

const userRouter = express.Router();

userRouter.get('/all', (req, res) => {

  User.find({})
    .then(users => {
      console.log(users);
      res.send(`<p>${users}</p>`);
    })
    .catch(error => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(error));
    });
});

userRouter.get('/seed', (req, res) => {

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

export default userRouter;
