import express from "express";
import * as dotenv from "dotenv";
import { connect } from "./connect/connectDB.js";

dotenv.config();

const PORT = process.env.PORT || 8800;

const app = express();
app.use(express.json());

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
