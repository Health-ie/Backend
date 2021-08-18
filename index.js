const express = require("express");
const mongoose = require("mongoose");
//
const ErrorHandler = require("./utils/errorHandler");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//doctor routes
app.use("/doctor", require("./routes/doctor.routes"));

//hospital routes
app.use("/hospital", require("./routes/hospital.routes"));

//custom error handler
app.all("*", (req, res, next) => {
  throw new ErrorHandler(`URL not ${req.url} found!`, 404);
});

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

//database connection
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.log(err);
    console.log(`connected to db`);
  }
);
