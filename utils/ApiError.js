class ApiErrorUtil {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }

  static badRequest(msg = "Bad Request") {
    return new ApiErrorUtil(400, msg);
  }

  static unAuthorized(msg = "Unauthorized") {
    return new ApiErrorUtil(401, msg);
  }

  static forbidden(msg = "Forbidden") {
    return new ApiErrorUtil(403, msg);
  }

  static notFound(msg = "Not Found") {
    return new ApiErrorUtil(404, msg);
  }

  static conflict(msg = "Conflict") {
    return new ApiErrorUtil(409, msg);
  }

  static serverError(msg = "Server Error") {
    return new ApiErrorUtil(500, msg);
  }
}

module.exports = ApiErrorUtil;
