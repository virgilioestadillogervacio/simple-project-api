const debugRedis = require("debug")("app:redis");

const Redis = require("../config/redis");
const ApiErrorUtil = require("../utils/ApiError");

class RedisService {
  static set(userId, token) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-unused-vars
      Redis.SET(userId, token, "EX", 365 * 42 * 60 * 60, (err, _reply) => {
        if (err) {
          debugRedis(err);
          reject(ApiErrorUtil.serverError());
        }

        resolve(token);
      });
    });
  }

  static get(userId, refreshToken) {
    return new Promise((resolve, reject) => {
      Redis.GET(userId, (err, result) => {
        if (err) {
          debugRedis(err);
          reject(ApiErrorUtil.serverError());
        }

        if (refreshToken === result) resolve(userId);

        reject(ApiErrorUtil.unAuthorized());
      });
    });
  }

  static delete(userId) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-unused-vars
      Redis.DEL(userId, (err, _val) => {
        if (err) {
          debugRedis(err);
          reject(ApiErrorUtil.serverError());
        }

        resolve("OK");
      });
    });
  }
}

module.exports = RedisService;
