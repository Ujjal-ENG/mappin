const express = require("express");
const dotenv = require("dotenv");
const connect = require("./connect/connectDB.js");
const pinRoute = require("./routes/pins.js");
const userRoute = require("./routes/users.js");

dotenv.config();

const PORT = process.env.PORT || 8800;

const app = express();
app.use(express.json());

app.use("/api/pins/", pinRoute);
app.use("/api/users/", userRoute);

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
