const express = require("express");
const cors = require("cors");
// const helmet = require("helmet");
// const xss = require("xss-clean");
// const compression = require("compression");
// const passport = require("passport");
// const httpStatus = require("http-status");
const app = express();

// enable cors
app.use(cors());
app.options("*", cors());

// Jade
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.get("/", function (req, res) {
  res.render("home", {
    title: "Welcome to Home page",
    date: new Date(),
  });
});

app.get("/about-us", function (req, res) {
  res.render("about-us", {
    title: "Welcome to About us page",
    date: new Date(),
  });
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = app;
