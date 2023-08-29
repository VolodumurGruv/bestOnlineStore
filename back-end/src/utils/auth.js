import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization) {
    const token = authorization;

    jwt.verify(token, `${process.env.JWT_SECRET}`, (error, decode) => {
      if (error) {
        console.dir(error);
        res.status(401).json({
          message: 'fault',
          text: 'Invalid token.',
          payload: error.message
        });
      } else {
        const nowInSeconds = Math.floor(Date.now() / 1000);
        if (decode.exp && decode.exp < nowInSeconds) {
          console.log('Token has expired.');
          return res.status(401).json({
            message: 'fault',
            text: 'Token has expired.'
          });
        }
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
