const express = require("express");
const app = express();
const path = require("node:path");

const port = Number(process.env.PORT) || 3000;
const env = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.use((err, req, res, next) => {
  console.error("fileSend error", err.message);
  res.status(500).send("something went wrong");
});

console.log(`Starting server in ${env} mode`);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
