const ErrorHandler = require("../../utils/errorHandler");
const bcrypt = require("bcryptjs");
const Doctor = require("../../models/Doctor");
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
    const doctor = await Doctor.findOne({ email });
    if (doctor && (await bcrypt.compare(password, doctor.password))) {
      const token = jwt.sign({ user_id: doctor._id, email }, process.env.DOCTOR_TOKEN_KEY, {
        expiresIn: "2h",
      });
      doctor.token = token;
      res.status(200).json({
        success: true,
        message: "logged in successfully",
        info: doctor,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
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
    const oldDoctor = await Doctor.findOne({ email });
    if (oldDoctor) {
      res.status(409).json({
        success: false,
        message: "Doctor already exist",
      });
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const doctor = await Doctor.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign({ user_id: doctor._id, email }, process.env.DOCTOR_TOKEN_KEY, {
      expiresIn: "2h",
    });
    doctor.token = token;
    res.status(201).json({
      success: true,
      message: "Doctor crerated successfully",
      info: doctor,
    });
  } catch (err) {
    console.log(err);
  }
};
