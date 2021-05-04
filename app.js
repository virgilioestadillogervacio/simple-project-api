const express = require("express");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const employeeRoute = require("./routes/employee");
const clientRoute = require("./routes/client");
const projectRoute = require("./routes/project");
const notFound = require("./middlewares/404_error_handler");
const serverError = require("./middlewares/500_error_handler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("short"));
}

// API Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/employee", employeeRoute);
app.use("/api/v1/client", clientRoute);
app.use("/api/v1/project", projectRoute);

app.use(notFound);
app.use(serverError);

module.exports = app;
