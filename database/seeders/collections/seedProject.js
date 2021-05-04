const debugSeeder = require("debug")("app:seeder");

const EmployeeModel = require("../../../models/employee");
const ClientModel = require("../../../models/client");
const ProjectModel = require("../../../models/project");
const data = require("../data/project");

const seedProject = async (callback) => {
  try {
    const employees = await EmployeeModel.find();
    const clients = await ClientModel.find();

    ProjectModel.insertMany([
      {
        name: data[0].name,
        client: clients[0]._id,
        employees: [employees[0]._id],
      },
      {
        name: data[1].name,
        client: clients[1]._id,
        employees: [employees[1]._id, employees[2]._id],
      },
      {
        name: data[2].name,
        client: clients[2]._id,
        employees: [employees[3]._id, employees[4]._id, employees[5]._id],
      },
    ])
      .then(() => {
        debugSeeder("Project created.");
        callback();
      })
      .catch((err) => {
        debugSeeder("There is a problem seeding a project collection.");
        debugSeeder(err.message);
      });
  } catch (err) {
    debugSeeder(err.message);
  }
};

module.exports = seedProject;
