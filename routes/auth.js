const router = require("express").Router();

const AuthController = require("../controllers/auth");
const auth = require("../middlewares/auth");
const authLogin = require("../middlewares/schema/loginUser");
const authRegister = require("../middlewares/schema/registerUser");

const controller = new AuthController();

router.post("/register", authRegister, controller.register);
router.post("/login", authLogin, controller.login);
router.get("/me", auth, controller.me);
router.post("/refresh-token", auth, controller.refreshToken);
router.post("/logout", auth, controller.logout);
router.post("/forgot-password", controller.forgotPassword);
router.put("/reset-password/:resetToken", controller.resetPassword);

module.exports = router;
