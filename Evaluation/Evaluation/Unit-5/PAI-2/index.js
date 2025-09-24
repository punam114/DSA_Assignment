/** @format */

const express = require("express");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello people");
});

app.post("/user", (req, res) => {
  const { email, password } = req.body;
  res.json({ msg: "User Created", data: { email, password } });
});

app.listen(3000);
