import jwt from 'jsonwebtoken';

const generateToken = (user, expire = null) => {
  const token = jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
  }, `${process.env.JWT_SECRET}`, {
    expiresIn: expire || '30d'
  });

  return token;
};

export default generateToken;
