const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  ORDER_NOT_FOUND: 'Order was not found.',
  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
};

export {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES
};
