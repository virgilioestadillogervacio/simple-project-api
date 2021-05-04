const crypto = require("crypto");
const { validationResult } = require("express-validator");

const BaseController = require("./base");
const UserRepository = require("../repositories/user");
const RedisService = require("../services/redis");
const JwtUtil = require("../utils/Jwt");
const ApiErrorUtil = require("../utils/ApiError");
const checkPassword = require("../helpers/checkPassword");
const hashPassword = require("../helpers/hashPassword");
const sendEmail = require("../helpers/sendEmail");

class AuthController extends BaseController {
  constructor() {
    super();
    this.user = new UserRepository();
  }

  get register() {
    return async (req, res, next) => {
      try {
        const usrInfo = req.body;
        usrInfo.role = usrInfo.role.toUpperCase();

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        let user = await this.user.checkEmail(usrInfo.email);
        if (user) {
          throw ApiErrorUtil.conflict(`${usrInfo.email} is registered already`);
        }

        user = (await usrInfo.role) === "ADMIN" && this.user.checkAdminRole();
        if (user) {
          throw ApiErrorUtil.badRequest();
        }

        const data = await super.register(usrInfo);

        const accessToken = await JwtUtil.signAccessToken(data.id, usrInfo.role);
        const refreshToken = await JwtUtil.signRefreshToken(data.id, usrInfo.role);

        res.status(201).json({ accessToken, refreshToken });
      } catch (err) {
        next(err);
      }
    };
  }

  get login() {
    return async (req, res, next) => {
      try {
        const { email, passwd } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw ApiErrorUtil.badRequest(errors.array());
        }

        const usr = await this.user.checkEmail(email);

        if (!usr) {
          throw ApiErrorUtil.notFound(`${email} is not registered.`);
        }

        const matched = await checkPassword(passwd, usr.passwd);

        if (!matched) {
          throw ApiErrorUtil.badRequest("Username or password does not match");
        }

        const access_token = await JwtUtil.signAccessToken(usr.id, usr.role);
        const refresh_token = await JwtUtil.signRefreshToken(usr.id, usr.role);

        res.status(200).json({ access_token, refresh_token });
      } catch (err) {
        next(err);
      }
    };
  }

  get me() {
    return async (req, res, next) => {
      try {
        const id = req.payload.id;

        const user = await this.user.checkId(id);

        res.status(200).json({
          status: 200,
          data: user,
        });
      } catch (err) {
        next(err);
      }
    };
  }

  get refreshToken() {
    return async (req, res, next) => {
      try {
        const { refresh_token } = req.body;

        if (!refresh_token) throw ApiErrorUtil.badRequest();

        const userId = await JwtUtil.verifyRefreshToken(refresh_token);
        const accessToken = await JwtUtil.signAccessToken(userId);
        const refreshToken = await JwtUtil.signRefreshToken(userId);

        res.status(200).json({ accessToken, refreshToken });
      } catch (err) {
        next(err);
      }
    };
  }

  get logout() {
    return async (req, res, next) => {
      try {
        const { refresh_token } = req.body;

        if (!refresh_token) throw ApiErrorUtil.badRequest();

        const userId = await JwtUtil.verifyRefreshToken(refresh_token);

        RedisService.delete(userId)
          .then((data) => {
            res.status(200).json({ message: data });
          })
          .catch((err) => {
            throw err;
          });
      } catch (err) {
        next(err);
      }
    };
  }

  get forgotPassword() {
    return async (req, res, next) => {
      const { email } = req.body;

      try {
        const usr = await this.user.checkEmail(email);
        if (!usr) {
          throw ApiErrorUtil.notFound("Email not found!");
        }

        const {
          resetToken,
          resetPasswordToken,
          resetPasswordExpire,
        } = usr.getResetPassswordToken();

        await this.user.saveResetPasswordToken(email, resetPasswordToken, resetPasswordExpire);

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

        const message = `
          <h1>You have requested a password reset</h1>
          <p>Please go to this link to reset your password</p>
          <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;

        try {
          sendEmail({
            to: "virgiliogervacioestadillo@gmail.com",
            subject: "Password Reset Request",
            text: message,
          });

          res.status(200).json({
            success: true,
            message: "Email sent!",
          });
        } catch (error) {
          usr.resetPasswordToken = undefined;
          usr.resetPasswordExpire = undefined;
          await usr.save();

          next(
            ApiErrorUtil.serverError({
              success: false,
              message: "Email could not be sent!",
            })
          );
        }
      } catch (error) {
        next(error);
      }
    };
  }

  get resetPassword() {
    return async (req, res, next) => {
      const { password } = req.body;

      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.resetToken)
        .digest("hex");

      try {
        const usr = await this.user.checkResetPasswordToken(resetPasswordToken);

        if (!usr) {
          throw ApiErrorUtil.badRequest({
            success: false,
            message: "Invalid reset token",
          });
        }

        usr.passwd = await hashPassword(password);
        usr.resetPasswordToken = undefined;
        usr.resetPasswordExpire = undefined;

        await usr.save();

        res.status(200).json({
          success: true,
          message: "Password reset successfully!",
        });
      } catch (error) {
        next(error);
      }
    };
  }
}

module.exports = AuthController;
