require("dotenv").config();
const http = require("http");
const debugServer = require("debug")("app:server");
const debugError = require("debug")("app:error");

require("./config/mongodb");
const app = require("./app");
const formatServerError = require("./helpers/formatServerError");

const server = http.createServer(app);
const port = process.env.PORT || 8000;

server.listen(port, () => {
  debugServer(`Server is running at port ${port}`);
});

server.on("error", (error) => {
  debugServer(formatServerError(error));

  process.exit(1);
});

process.on("uncaughtException", function (err) {
  debugError(`UNCAUGHT EXCEPTION: ${err.message} || ${err.stack}`);

  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  debugError(`UNHANDLED REJECTION: ${reason}`);
  debugError(promise);

  process.exit(1);
});

process.on("SIGINT", () => {
  process.exit(0);
});

module.exports = server;
