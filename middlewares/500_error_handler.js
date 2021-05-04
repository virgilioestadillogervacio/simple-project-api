const debugError = require("debug")("app:error");

// eslint-disable-next-line no-unused-vars
const internal_server = (err, _req, res, _next) => {
  let status = err.status || 500;
  let message = err.msg || "Internal Server Error";

  if (err.code === 11000) {
    status = 400;
    message = "Duplicate Field Value";
  }

  debugError(err);

  res.status(status).json({ status, message });
};

module.exports = internal_server;
