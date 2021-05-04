const UserModel = require("../models/user");
const EmployeeModel = require("../models/employee");
const ClientModel = require("../models/client");

class BaseRepository {
  set setUserId(id) {
    this.userId = id;
  }

  get getUser() {
    return UserModel.findOne({ _id: this.userId });
  }

  get getClient() {
    return ClientModel.findOne({ user: this.userId });
  }

  get getEmployee() {
    return EmployeeModel.findOne({ user: this.userId });
  }

  get deleteUser() {
    return UserModel.findOneAndDelete({ _id: this.userId });
  }
}

module.exports = BaseRepository;
