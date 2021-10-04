const express = require("express");
const { login, register, logout } = require("../controllers/doctor/auth.controller");
const { hello, allAppointments,myAppointments,updateProfile,done } = require("../controllers/doctor/doctor.controller");
const dauth = require("../middleware/dauth")
const router = express.Router();
router.get("/", hello);
router.post("/login", login);
router.post("/register", register);
router.get("/logout",logout)
router.post("/private", dauth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });
router.get("/allappointments",dauth,allAppointments)
router.post("/updateprofile",dauth,updateProfile)
router.post("/myappointments",dauth,myAppointments)
router.post("/done",done)
module.exports = router;
