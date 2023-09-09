const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGES = {
  MISSING_REQUIRED_FIELDS: 'Missing required fields.',
  EMPTY_QUERY_ERROR: 'Your query have a nullable length.',
  ORDER_NOT_FOUND: 'Order was not found.',
  PRODUCT_NOT_FOUND: 'Product not found.',
  VALIDATION_ERROR: 'Some errors was occured when validate.',
  DATABASE_ERROR: 'Some error occurred on DB.',
  INVALID_CREDENTIALS: 'Wrong email or password.',
  NEW_USER_CREATED: 'New user created.',
  GOOGLE_FETCH_FAILURE: 'Failed to fetch user information from Google.',
  GOOGLE_ACCESS_VERIFIED: 'Successfully verify Google access token.',
  USER_NOT_FOUND: 'User not found.',
  USER_WAS_UPDATED: 'User was updated.',
  CANNOT_DELETE_ADMIN: 'Cannot detete admin.',
  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
};

export {
  HTTP_STATUS_CODES,
  MESSAGES
};
