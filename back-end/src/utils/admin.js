import logger from './logger.js';
import sendRes from './handleResponse.js';
import {
  HTTP_STATUS_CODES,
  MESSAGES
} from './constants.js';

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    logger.info('yes. you are admin');
    next();
  } else {
    logger.info('no. you are not admin');
    sendRes(res, HTTP_STATUS_CODES.UNAUTHORIZED, MESSAGES.WRONG_ADMIN_TOKEN);
  }
};

export default isAdmin;
