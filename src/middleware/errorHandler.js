export const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;

  console.error(err);

  res.status(status).json({
    message:
      status >= 500 && process.env.NODE_ENV === 'production'
        ? 'Internal Server Error'
        : err.message || 'Internal Server Error',
  });
};
