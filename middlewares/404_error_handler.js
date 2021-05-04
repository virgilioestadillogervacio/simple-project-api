const not_found = (_req, _res, next) => {
  next({ status: 404, msg: "Not Found!" });
};

module.exports = not_found;
