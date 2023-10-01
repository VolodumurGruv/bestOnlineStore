const handleResponse = (res, status, text, payload = null) => {
  const message = status.toString().startsWith('2') ||
    status.toString().startsWith('3')
    ? 'success'
    : 'fault';

  res.status(status).json({
    message,
    text,
    payload,
  });
};

export default handleResponse;
