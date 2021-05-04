const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  passwd: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    default: "",
  },
  lname: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["ADMIN", "EMPLOYEE", "CLIENT"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

UserSchema.methods.getResetPassswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  const resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return {
    resetToken,
    resetPasswordToken,
    resetPasswordExpire,
  };
};

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
