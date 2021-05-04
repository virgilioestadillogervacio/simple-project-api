const debugSeeder = require("debug")("app:seeder");

require("./connection");

const UserModel = require("../../models/user");
const EmployeeModel = require("../../models/employee");
const ClientModel = require("../../models/client");
const ProjectMOdel = require("../../models/project");

const dropDb = async (callback) => {
  try {
    await UserModel.collection.drop();
    await EmployeeModel.collection.drop();
    await ClientModel.collection.drop();
    await ProjectMOdel.collection.drop();

    callback();
  } catch (err) {
    debugSeeder(err.message);
    process.exit();
  }
};

dropDb(() => {
  debugSeeder("Database collections dropped!");
  process.exit();
});
