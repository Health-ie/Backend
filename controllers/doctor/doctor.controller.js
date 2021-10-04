// const ErrorHandler = require("../utils/errorHandler");

const { response } = require("express");
const Appointment = require("../../models/Appointment");
const Doctor = require("../../models/Doctor");

exports.hello = (req, res) => {
  //  to throw error
  //  throw new ErrorHandler('error',404)

  //  if successfull
  return res.status(200).json({
    success: 1,
    message: "successful",
  });
};
exports.allAppointments = (req, res) => {
  Appointment.find({})
    .then(function (app) {
      res.send(app);
    })
    .catch((err) => console.log(err));
};
exports.myAppointments = (req, res) => {
  Appointment.find({ doctor_id: req.body.id })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
exports.updateProfile = (req, res) => {
  Doctor.findByIdAndUpdate(req.body.doctor_id, req.body.data, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
};
exports.done = (req,res) => {
  Appointment.findByIdAndUpdate(req.body.appointment_id, {status:true}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
}