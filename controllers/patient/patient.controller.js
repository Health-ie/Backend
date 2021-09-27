const Appointment = require("../../models/Appointment");
const Doctor = require("../../models/Doctor");
const Patient = require("../../models/Patient");
exports.hello = (req, res) => {
  res.send("hello hospital");
};
exports.doctorList = (req, res) => {
  Doctor.find({})
    .then(function (doc) {
      res.send(doc);
    })
    .catch((err) => console.log(err));
};
exports.bookAppointment = async (req, res) => {

  let app = new Appointment(req.body);
  await Doctor.findById(req.body.doctor_id).then(data=>app.doctor = data)
  await Patient.findById(req.body.patient_id).then(data=>app.patient = data)
  app.save(function (err, app) {
    if (err) return console.error(err);
    res.send(app);
  });
};
exports.myAppointments = (req,res) => {
  Appointment.find({ patient_id: req.body.id })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
