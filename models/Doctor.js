const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    trim: true,
  },
  last_name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  qualification: {
    type: [String],
  },
  specialization: {
    type: [String],
  },
  start_date:{
    type: Date,
    trim: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
    trim: true,
  },
  birthdate: {
    type: Date,
    trim: true,
  },
  salt: String,
});
module.exports = mongoose.model("Doctor", doctorSchema);
