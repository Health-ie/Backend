const express = require("express");
const { hello } = require("../controllers/patient/patient.controller");
const { login, register, logout } = require("../controllers/patient/auth.controller");
const auth = require("../middleware/auth");
router = express.Router();
router.get("/", hello);
router.post("/login", login);
router.post("/register", register);
router.post("/private", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
router.get("/logout", logout);
module.exports = router;
