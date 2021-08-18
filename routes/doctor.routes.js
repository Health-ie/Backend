const express = require("express");
const { hello } = require("../controllers/doctor.controller");
const router = express.Router();
router.get("/", hello);
router.get("/vaibhav",(req,res)=>{
    res.send("doctor vaibhav")
})
module.exports = router;
