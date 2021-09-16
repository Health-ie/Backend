// const ErrorHandler = require("../utils/errorHandler");

exports.hello = (req, res) => {

//  to throw error
//  throw new ErrorHandler('error',404)

//  if successfull
  return res.status(200).json({
    success:1,
    message:"successful",
  })
};