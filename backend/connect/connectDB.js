import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();


mongoose.set("strictQuery", false);
const connect = async () => {
  mongoose.connect(process.env.MONGOOSE_KEY, { useNewUrlParser: true }, () => {
    console.log("DB is Connected");
  });
};

export { connect };
