const express = require("express");
const path = require("path");

const app = express();

// public folder serveren
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});                     