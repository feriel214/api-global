const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
//inculs de url des API
const carRoutes = require("./Routes/carRoutes");
const studentRoutes = require("./Routes/studentRoutes");

//connect to mongo
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

//redriction lors de reception des request
app.use("/api/car", carRoutes);
app.use("/api/student", studentRoutes);

app.listen(3000, () => console.log("Server is running"));
