const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  position: {
    type: String,
    default: "",
  },
  yearOfExperience: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;
