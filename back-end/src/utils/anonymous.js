import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

const isAnonymous = async (req, res, next) => {
  const { name, password, email } = req.body;

  if (!!name || !!password || !!email) next();

  const { authorization: token } = req.headers.authorization;

  if (token) {
    try {
      const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
      const userId = decodedToken._id;

      try {
        const user = await User.findById(userId).exec();

        if (user) {
          req.user = user;
          req.method = 'PUT';
          req.redirect(303, '/api/user/profile');
        }
      } catch (err) {
        console.error(err);
      } finally {
        next();
      }
    } catch (error) {
      console.error(error);
      next();
    }
  }

  next();
};

export default isAnonymous;
