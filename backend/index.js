const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user-routes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 9000;
const MONGO_URL = process.env.MONGODB_DB_URL;

mongoose
  .connect(MONGO_URL, {})
  .then(() => {
    console.log("MONGO DB CONNECTED!");
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });

app.get("/", (req, res) => {
  res.json({
    Message: "Hello World!",
  });
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("SERVER STARTED AT PORT: " + PORT);
});
