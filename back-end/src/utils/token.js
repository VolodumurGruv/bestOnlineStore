import jwt from 'jsonwebtoken';

const generateToken = (user, expire = null) => {
  const token = jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    isAnonymous: user.isAnonymous
  }, `${process.env.JWT_SECRET}`, {
    expiresIn: expire || '365d'
  });

  return token;
};

export default generateToken;
