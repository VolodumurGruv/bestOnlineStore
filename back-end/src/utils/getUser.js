import User from '../models/userSchema.js';
import { MESSAGES } from './constants.js';

const getUserById = async (userId) => {console.log('util');console.log(MESSAGES.USER_NOT_FOUND);
  const user = await User.findById(userId);
  if (!user) {
    throw new Error(MESSAGES.USER_NOT_FOUND);
  }
  return user;
};

export default getUserById;
