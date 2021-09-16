const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
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
  password: {
    type: String
  },
  token: {
    type: String,
    trim: true,
  },
  salt: String,
//   role: {
//     type: Number,
//     default: 0,
//   },
//   appointments: {
//     type: Array,
//     default: [],
//   },
  // qualification: { type: String },
  // experience: [{ domain: String, years: Number }],
});

module.exports = mongoose.model("Patient", patientSchema);
