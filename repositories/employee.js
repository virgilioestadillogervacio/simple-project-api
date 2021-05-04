const BaseRepository = require("./base");
const EmployeeModel = require("../models/employee");

class EmployeeRepository extends BaseRepository {
  constructor() {
    super();
  }

  saveEmployee(userId) {
    const employee = new EmployeeModel({ user: userId });
    return employee.save();
  }

  getEmployees() {
    return EmployeeModel.find().populate(
      "user",
      "-passwd -resetPasswordExpire -resetPasswordToken"
    );
  }

  getEmployee(id) {
    return EmployeeModel.findOne({ _id: id }).populate(
      "user",
      "-passwd -resetPasswordExpire -resetPasswordToken"
    );
  }

  checkEmployee(id, employeeId) {
    return EmployeeModel.findOne({
      _id: employeeId,
      user: {
        _id: id,
      },
    }).populate("user", "-passwd");
  }

  async updateEmployee(id, employeeInfo) {
    const employee = await EmployeeModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          position: employeeInfo.position,
          yearOfExperience: employeeInfo.yearOfExperience,
        },
      },
      { new: true }
    ).populate("user", "-passwd");

    employee.user.fname = employeeInfo.fname;
    employee.user.lname = employeeInfo.lname;
    employee.user.email = employeeInfo.email;

    await employee.user.save();
    await employee.save();

    return employee;
  }

  async deleteEmployee(id) {
    const employee = await EmployeeModel.findOneAndDelete({ _id: id }).populate("user", "-passwd");
    this.setUserId = employee.user._id;

    await this.deleteUser;

    return employee;
  }
}

module.exports = EmployeeRepository;
