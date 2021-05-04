const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  company: {
    type: String,
    default: "",
  },
  numOfEmployees: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;
