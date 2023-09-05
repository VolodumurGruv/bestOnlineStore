const handleResponse = (res, status, message, text, payload = null) => {
  res.status(status).json({
    message,
    text,
    payload,
  });
};

export default handleResponse;
