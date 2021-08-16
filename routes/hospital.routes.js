const express = require("express");
const { hello } = require("../controllers/hospital.controller");
router = express.Router();
router.get("/", hello);
module.exports = router;
