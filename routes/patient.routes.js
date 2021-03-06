const express = require("express");
const { hello, bookAppointment, myAppointments,updateAppointment,deleteAppointment } = require("../controllers/patient/patient.controller");
const { login, register, logout } = require("../controllers/patient/auth.controller");
const pauth = require("../middleware/pauth");
const { doctorList } = require("../controllers/patient/patient.controller");
router = express.Router();
router.get("/", hello);
router.post("/login", login);
router.post("/register", register);
router.post("/private", pauth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
router.get("/doctorlist",pauth,doctorList);
router.post("/book",pauth,bookAppointment);
router.post("/myappointments",pauth,myAppointments)
router.get("/logout", logout);
router.post("/appointment/update",pauth,updateAppointment)
router.post("/appointment/delete",pauth,deleteAppointment)
module.exports = router;
