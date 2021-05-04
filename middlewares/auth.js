const jwt = require("jsonwebtoken");
const debugJwt = require("debug")("app:jwt");

const ApiErrorUtil = require("../utils/ApiError");

module.exports = (() => {
  return (req, _res, next) => {
    const bearerToken = req.header("Authorization");

    if (!bearerToken) {
      return next(ApiErrorUtil.unAuthorized("No token provided"));
    }

    const token = bearerToken.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;

        debugJwt({ name: err.name, message: err.message });

        return next(ApiErrorUtil.unAuthorized(message));
      }

      req.payload = payload;

      next();
    });
  };
})();
