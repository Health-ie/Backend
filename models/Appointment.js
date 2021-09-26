const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    doctor: {
      type: mongoose.Schema.Types.Mixed,
      require: true,
    },
    patient: { type: mongoose.Schema.Types.Mixed, require: true },
    status: {
      type: Boolean,
      default: 0,
    },
    details: {
      type: String,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", appointmentSchema);
