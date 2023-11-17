import jwt from 'jsonwebtoken';
import { TOKEN_DURATIONS } from './constants.js';

const generateToken = (user, expire = null) => {
  const token = jwt.sign({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
    isAnonymous: user.isAnonymous
  }, `${process.env.JWT_SECRET}`, {
    expiresIn: expire || TOKEN_DURATIONS.ANONYMOUS
  });

  return token;
};

export default generateToken;
