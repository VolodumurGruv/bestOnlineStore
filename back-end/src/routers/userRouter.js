import express from 'express';
import User from '../models/userSchema.js';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import isAuth from '../utils/auth.js';
import isAdmin from '../utils/admin.js';
import generateToken from '../utils/token.js';

const userRouter = express.Router();

userRouter.get('/all', (req, res) => {

  User.find({})
    .then(users => {
      console.log(users);
      res.send({
        message: 'success',
        text: 'All users in payload.',
        payload: users
      });
    })
    .catch(error => {
      res.setHeader('Content-Type', 'application/json');
      res.json({
        message: 'falt',
        text: 'Some error was on DB.',
        payload: error
      });
    });
});

userRouter.get('/seed', (req, res) => {
7
  User.insertMany(data.users)
    .then(createdUsers => {
      console.log(createdUsers);
      res
        .json({
          message: 'success',
          text: 'New user(s) was added to DB.',
          payload: createdUsers
        });
    })
    .catch(error => {
      res
        .setHeader('Content-Type', 'application/json');
      res
        .json({
          message: 'falt',
          text: 'An error was occured.',
          payload: error
        });
    });
});

userRouter.post('/register', (req, res) => {
  const { name, password, email, phone } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = new User({
    name,
    password: hashedPassword,
    email,
    phone
  });

  user.save()
    .then(createdUser => {
      res.status(201).json({
        message: 'success',
        text: 'New user was created.',
        payload: {
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          phone: createdUser.phone,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser)
        }
      });
    })
    .catch(error => {
      res
        .status(500)
        .json({
          message: 'falt',
          text: 'User registration failed.',
          payload: error
        });
    });
});

userRouter.post('/signin', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      res.send({
        message: 'success',
        text: 'Correct credentials.',
        payload: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: user.isAdmin,
          token: generateToken(user)
        }
      });
    } else {
      res
        .status(401)
        .send({
          message: 'falt',
          text: 'Wrong e-mail or password.'
        });
    }
  }).catch(error => {
    res
      .status(500)
      .send({
        message: 'falt',
        text: 'Internal Server Error.'
      });
  });
});

userRouter.get('/:id', (req, res) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res
        .send({
          message: 'success',
          text: 'User was find',
          payload: user
        });
    } else {
      res
        .status(404)
        .send({
          message: 'falt',
          text: 'User not fin\'d.'
        });
    }
  }).catch(error => {
    res
      .status(500)
      .send({
        message: 'falt',
        text: 'Internal Server Error.'
      });
    });
});

userRouter.put('/profile', isAuth, (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        return user.save();
      }
    })
    .then(updatedUser => {
      res.send({
        message: 'success',
        text: 'User was updated.',
        payload: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser)
        }
      });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Error on server.'
        });
    });
});

userRouter.delete('/:id', isAuth, isAdmin, (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (user) {
        if (user.email === 'markovalekdandr108@gmail.com') {
          res
            .status(400)
            .send({
              message: 'falt',
              text: 'Can not delete admin.'
            });
          return;
        }
        return user.remove();
      } else {
        res
        .status(404)
        .send({
          message: 'message',
          text: 'User was not find.'
        });
      }
    })
    .then(deletedUser => {
      if (deletedUser) {
        res
          .send({
            message: 'success',
            text: 'User deleted.',
            payload: {
              user: deletedUser
            }
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Error on server.'
        });
    });
});

userRouter.put('/:id', isAuth, isAdmin, (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.isAdmin = req.body.isAdmin || user.isAdmin;
        return user.save();
      } else {
        res
          .status(404)
          .send({
            message: 'falt',
            text: 'User was not find.'
          });
      }
    })
    .then(updatedUser => {
      res
        .send({
          message: 'success',
          text: 'User updated.',
          payload: {
            user: updatedUser
          }
        });
    })
    .catch(error => {
      res
        .status(500)
        .send({
          message: 'falt',
          text: 'Error on server.'
        });
    });
});

export default userRouter;
