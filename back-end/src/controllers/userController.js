import { validationResult } from 'express-validator';
import User from '../models/userSchema.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/token.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      message: 'success',
      text: 'All users in payload.',
      payload: users
    });
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Some error occurred on DB.',
      payload: error
    });
  }
};

const registerUser = async (req, res) => {
  const { name, password, email, phone } = req.body;

  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'fault',
        text: 'Not valid.',
        payload: errors.array(),
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = new User({
      name,
      password: hashedPassword,
      email,
      phone
    });

    const createdUser = await user.save();

    const token = generateToken(createdUser);

    const newUser = {                                                   _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      phone: createdUser.phone,
      isAdmin: createdUser.isAdmin,
      token
    };

    res.status(201).json({
      message: 'success',
      text: 'New user created.',
      payload: newUser
    });
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'User registration failed.',
      payload: error.message
    });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.json({
        message: 'success',
        text: 'Correct credentials.',
        payload: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: user.isAdmin,
          token
        }
      });
    } else {
      res.status(401).json({
        message: 'fault',
        text: 'Wrong email or password.'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Internal Server Error.',
      payload: error
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({
        message: 'success',
        text: 'User was found.',
        payload: user
      });
    } else {
      res.status(404).json({
        message: 'fault',
        text: 'User not found.'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Internal Server Error.',
      payload: error
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;

      if (req.body.password) {
        user.password = bcrypt
          .hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      const token = generateToken(updatedUser);

      res.json({
        message: 'success',
        text: 'User was updated.',
        payload: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          isAdmin: updatedUser.isAdmin,
          token
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Error on server.',
      payload: error
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User
      .findById(req.params.id);

    if (user) {
      if (user.email === 'markovalekdandr108@gmail.com') {
        res.status(400).json({
          message: 'fault',
          text: 'Cannot delete admin.'
        });
      } else {
        const deletedUser = await user.remove();
        res.json({
          message: 'success',
          text: 'User deleted.',
          payload: {
            user: deletedUser
          }
        });
      }
    } else {
      res.status(404).json({
        message: 'fault',
        text: 'User not found.'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Error on server.',
      payload: error
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;
      user.isAdmin = req.body.isAdmin || user.isAdmin;

      const updatedUser = await user.save();

      res.json({
        message: 'success',
        text: 'User updated.',
        payload: updatedUser
      });
    } else {
      res.status(404).json({
        message: 'fault',
        text: 'User not found.'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'fault',
      text: 'Error on server.',
      payload: error
    });
  }
};

export {
  getAllUsers,
  registerUser,
  signInUser,
  getUserById,
  updateProfile,
  deleteUser,
  updateUser
};
