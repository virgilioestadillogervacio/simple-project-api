const debugSeeder = require("debug")("app:seeder");

const UserModel = require("../../../models/user");
const EmployeeModel = require("../../../models/employee");
const data = require("../data/employee");

const seedEmployee = async () => {
  try {
    const users = await UserModel.find({ role: "EMPLOYEE" });

    for (let count = 0; count < 6; count++) {
      data[count].user = users[count]._id;
    }

    EmployeeModel.insertMany(data)
      .then(() => {
        debugSeeder("Employee created.");
      })
      .catch((err) => {
        debugSeeder("There is a problem seeding an employee collection.");
        debugSeeder(err.message);
      });
  } catch (err) {
    debugSeeder(err.message);
  }
};

module.exports = seedEmployee;
