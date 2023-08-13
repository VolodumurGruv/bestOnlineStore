import jwt from 'jsonwebtoken';

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {console.log('yes');
    next();
  } else {console.log('no');
    res
      .status(401)
      .send({ message: 'Wrong admin token' });
  }
};

export default isAdmin;
