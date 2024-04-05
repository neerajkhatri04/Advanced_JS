const express = require("express");
const app = express();
const PORT = 3000;

const logger1 = (req, res, next) => {
  console.log("Inside logger1");
  next();
};

const logger2 = (req, res, next) => {
  console.log("Inside logger2");
  next();
};

const logArr = [logger1, logger2];

app.get("/home", logArr, (req, res) => {
  // res.send("hello world GET");
  res.json({
    message: "hello world GET",
  });
});

app.post("/home", (req, res) => {
  // res.send("hello world POST");
  res.json({
    message: "hello world POST",
  });
});

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
