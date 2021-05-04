const debugSeeder = require("debug")("app:seeder");

require("./connection");

const seedUser = require("./collections/seedUser");

const seedDb = async (callback) => {
  try {
    seedUser(callback);
  } catch (err) {
    debugSeeder(err);
  }
};

seedDb(() => {
  debugSeeder("Database seeding complete...");
  process.exit();
});
