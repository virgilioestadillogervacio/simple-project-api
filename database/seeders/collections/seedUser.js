const debugSeeder = require("debug")("app:seeder");

const UserModel = require("../../../models/user");
const seedEmployee = require("./seedEmployee");
const seedClient = require("./seedClient");
const hashPassword = require("../../../helpers/hashPassword");
let data = require("../data/user");

const seedUser = async (callback) => {
  try {
    for (let count = 0; count < 10; count++) {
      data[count].passwd = await hashPassword(data[count].passwd);
    }

    UserModel.insertMany(data)
      .then(async () => {
        seedEmployee();
        seedClient(callback);

        debugSeeder("User created.");
      })
      .catch((err) => {
        debugSeeder("There is a problem seeding a user collection.");
        debugSeeder(err.message);
      });
  } catch (err) {
    debugSeeder(err.message);
  }
};

module.exports = seedUser;
