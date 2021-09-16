const express = require("express");
const { login, register, logout } = require("../controllers/doctor/auth.controller");
const { hello } = require("../controllers/doctor/doctor.controller");
const router = express.Router();
router.get("/", hello);
router.post("/login",login)
router.post("/register",register)
router.get("/logout",logout)
module.exports = router;
