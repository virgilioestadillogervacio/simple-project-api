const debugSeeder = require("debug")("app:seeder");

const UserModel = require("../../../models/user");
const ClientModel = require("../../../models/client");
const seedProject = require("./seedProject");
const data = require("../data/client");

const seedClient = async (callback) => {
  try {
    const users = await UserModel.find({ role: "CLIENT" });

    for (let count = 0; count < 3; count++) {
      data[count].user = users[count]._id;
    }

    ClientModel.insertMany(data)
      .then(async () => {
        seedProject(callback);
        debugSeeder("Client created.");
      })
      .catch((err) => {
        debugSeeder("There is a problem seeding a client collection.");
        debugSeeder(err.message);
      });
  } catch (err) {
    debugSeeder(err.message);
  }
};

module.exports = seedClient;
