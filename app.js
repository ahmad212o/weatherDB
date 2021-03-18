const express = require("express");
const mysql = require("mysql2");
const app = express();
const importCsv = require("./csv");
const weather = require("./Routes/weather");

app.get("/", (req, res, next) => {
  return res.json("hi");
});
app.use("/weather", weather);
app.on("listening", () => {
  console.log("server listening");
});

const server = app.listen(process.env.PORT || 3000);
