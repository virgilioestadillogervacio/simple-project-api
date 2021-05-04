const ApiErrorUtil = require("../utils/ApiError");

const role = (roles) => (req, _res, next) => {
  const { role } = req.payload;

  if (!roles.includes(role)) {
    return next(ApiErrorUtil.forbidden());
  }

  next();
};

module.exports = role;
