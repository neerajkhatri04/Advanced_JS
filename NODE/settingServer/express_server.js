const express = require("express");
const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
  // res.send("hello world GET");
  res.json({
    message: "hello world GET",
  });
});

app.post("/home", (req, res) => {
  // res.send("hello world POST");
  res.json({
    message: "hello world GET",
  });
});

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
