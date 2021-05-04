const jwt = require("jsonwebtoken");
const debugJwt = require("debug")("app:server");

const ApiErrorUtil = require("./ApiError");
const RedisService = require("../services/redis");

class JwtUtil {
  static signAccessToken(userId, role) {
    return new Promise((resolve, reject) => {
      const payload = { id: userId, role };
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "5000s",
      };

      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          debugJwt(err);
          reject(ApiErrorUtil.serverError("Unable to sign access token"));
        }

        resolve(token);
      });
    });
  }

  static async signRefreshToken(userId, role) {
    return new Promise((resolve, reject) => {
      const payload = { id: userId, role };
      const secret = process.env.REFRESH_TOKEN_SECRET;
      const options = {
        expiresIn: "1y",
      };

      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          debugJwt(err);
          reject(ApiErrorUtil.serverError("Unable to sign refresh token"));
        }

        RedisService.set(userId, token)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

  static async verifyRefreshToken(refreshToken) {
    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
        if (err) {
          debugJwt(err);
          reject(ApiErrorUtil.unAuthorized());
        }

        const userId = payload.id;

        RedisService.get(userId, refreshToken)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }
}

module.exports = JwtUtil;
