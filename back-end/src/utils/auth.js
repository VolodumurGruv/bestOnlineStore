import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization
      .slice(7, authorization.length);
    console.log(`Token: ${token}`);

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (error, decode) => {
      if (error) {
        res
          .status(401)
          .send({
            message: 'falt',
            text: 'Wrong token!'
          });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res
      .status(401)
      .send({
        message: 'falt',
        text: 'No token.'
      });
  }
};

export default isAuth;