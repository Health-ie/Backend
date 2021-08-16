const express = require("express");
const { hello } = require("../controllers/doctor.controller");
const router = express.Router();
router.get("/", hello);
module.exports = router;
