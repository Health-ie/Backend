const express = require("express");
const mongoose = require("mongoose");
const ErrorHandler = require("./utils/errorHandler");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = process.env.PORT || 5000;
require("./config/database").connect();
//middleware for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization,x-access-token");
  next();
});
//doctor routes
app.use("/doctor", require("./routes/doctor.routes"));
app.get("/",(req,res)=>res.send("hello"))
//hospital routes
app.use("/patient", require("./routes/patient.routes"));

//custom error handler
// app.all("*", (req, res, next) => {
//   throw new ErrorHandler(`URL not ${req.url} found!`, 404);
// });

//error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: 0,
    message: err.message,
    stack: err.stack,
  });
});

//starting server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

