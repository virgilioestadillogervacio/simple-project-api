const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
    },
  ],
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
});

const ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = ProjectModel;
