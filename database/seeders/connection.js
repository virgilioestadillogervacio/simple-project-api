const mongoose = require("mongoose");
const debugMongodb = require("debug")("app:mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/simple-project-api";

mongoose.connection.on("connecting", () => {
  debugMongodb("Connecting to MongoDB...");
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    debugMongodb("Successfully connected to MongoDB!");
  })
  .catch(() => {
    debugMongodb("Unable to connect to MongoDB!");
  });

mongoose.connection.on("connected", () => {
  debugMongodb("MongoDB connection is reconnected.");
});

mongoose.connection.on("disconnected", () => {
  debugMongodb("MongoDB connection is disconnected.");
});

mongoose.connection.on("error", () => {
  debugMongodb("An error occured! MongoDB connection is disconnected.");
});

module.exports = mongoose;
