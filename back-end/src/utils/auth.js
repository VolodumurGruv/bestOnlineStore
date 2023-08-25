import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization) {
    const token = authorization
      .slice(7, authorization.length);
    console.log(`Token: ${token}`);

    jwt.verify(token, `${process.env.JWT_SECRET}`, (error, decode) => {
      if (error) {
        res.status(401).json({
          message: 'fault',
          text: 'Wrong token!',
          payload: error.message
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: 'fault',
      text: 'No token.'
    });
  }
};

export default isAuth;
