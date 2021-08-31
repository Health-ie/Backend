const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
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
};