const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  hobby: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("adminTbl", adminSchema);

module.exports = admin;
