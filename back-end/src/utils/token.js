import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign({
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1d'
  });
};

export default generateToken;
