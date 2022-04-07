const mongoose = require("mongoose");
const pageSchema = require("./pageSchema");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "DEFAULT",
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    type: Array,
    default: [],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
