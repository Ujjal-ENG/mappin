const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
  mongoose.connect(process.env.MONGOOSE_KEY, { useNewUrlParser: true }, () => {
    console.log("DB is Connected");
  });
};

module.exports = connect;
