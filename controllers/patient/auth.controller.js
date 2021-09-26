const ErrorHandler = require("../../utils/errorHandler");
const bcrypt = require("bcryptjs");
const Patient = require("../../models/Patient");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const patient = await Patient.findOne({ email });
    if (patient && (await bcrypt.compare(password, patient.password))) {
      const token = jwt.sign({ user_id: patient._id, email }, process.env.PATIENT_TOKEN_KEY, {
        expiresIn: "2h",
      });
      patient.token = token;
      res.status(200).json({
        success: true,
        message: "logged in successfully",
        info: patient,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.logout = (req, res) => {
  res.send("pat logout");
};
exports.register = async (req, res) => {
  // console.log(req.body)
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!(email && password && first_name && last_name)) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const oldPatient = await Patient.findOne({ email });
    if (oldPatient) {
      res.status(409).json({
        success: false,
        message: "Patient already exist",
      });
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const patient = await Patient.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign({ user_id: patient._id, email }, process.env.PATIENT_TOKEN_KEY, {
      expiresIn: "2h",
    });
    patient.token = token;
    res.status(201).json({
      success: true,
      message: "Patient crerated successfully",
      info: patient,
    });
  } catch (err) {
    console.log(err);
  }
};
