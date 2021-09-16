const ErrorHandler = require("../../utils/errorHandler");
const bcrypt = require("bcryptjs");
const Patient = require("../../models/Patient");
exports.login = (req, res) => {
  res.send("doc login");
};
exports.logout = (req, res) => {
  res.send("doc logout");
};
 exports.register = async (req, res) => {
    
//   try {
//     const { first_name, last_name, email, password } = req.body;
//     if (!(email && password && first_name && last_name)) {
//       throw new ErrorHandler("All input is required",400)
//     }
//     const oldUser = await User.findOne({ email });
//     if (oldUser) {
//         throw new ErrorHandler("User Already Exist. Please Login",409)
//     }
//     encryptedPassword = await bcrypt.hash(password, 10);
//     const user = await Patient.create({
//       first_name,
//       last_name,
//       email: email.toLowerCase(),
//       password: encryptedPassword,
//     });
//     const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
//       expiresIn: "2h",
//     });
//     user.token = token;
//     res.status(201).json({
//         success:1,
//         message:"user crerated successfully",
//         user:user
//       })
//   } catch (err) {
//     console.log(err);
//   }
 };
