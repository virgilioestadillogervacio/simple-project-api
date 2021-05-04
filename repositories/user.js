const UserModel = require("../models/user");

class UserRepository {
  checkId(id) {
    return UserModel.findOne({ _id: id }).select("-passwd");
  }

  checkEmail(email) {
    return UserModel.findOne({ email });
  }

  checkSomeEmail(id, email) {
    return UserModel.findOne({ email }).where("_id").ne(id);
  }

  checkAdminRole() {
    return UserModel.findOne({ role: "ADMIN" });
  }

  checkResetPasswordToken(resetPasswordToken) {
    return UserModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
  }

  saveResetPasswordToken(email, token, expiry) {
    return UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          resetPasswordToken: token,
          resetPasswordExpire: expiry,
        },
      },
      { new: true }
    );
  }

  saveUser(email, passwd, fname, lname, role) {
    const usr = new UserModel({ email, passwd, fname, lname, role });
    return usr.save();
  }

  updateUser(id, fname, lname, email) {
    return UserModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          firstName: fname,
          lastName: lname,
          email,
        },
      },
      { new: true }
    );
  }

  deleteUser(id) {
    return UserModel.findOneAndDelete({ _id: id });
  }
}

module.exports = UserRepository;
