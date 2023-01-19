// Libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Require
const createInvoice = require("./routes/invoice/create");
const readAllInvoice = require("./routes/invoice/readAll");
const register = require("./routes/account/register");
const login = require("./routes/account/login");

// Use
const app = express();
app.use(express.json());
app.use(cors());

// Database
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", function () {
  // console.log("Database is now connected");
});

// Use routes
app.use(createInvoice);
app.use(readAllInvoice);
app.use(register);
app.use(login);

// Port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
