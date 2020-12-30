const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("./routes/employeeRoutes");
const { config } = require("process");
console.log();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/employee", router);
app.listen(process.env.PORT, console.log(`app started on ${process.env.PORT}`));
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, connection) => {
    if (err) {
      console.log(err);
      return console.log("Error in connecting to database");
    } else console.log("Connected to Database");
  }
);
