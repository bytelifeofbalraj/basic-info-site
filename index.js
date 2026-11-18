const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT) || 3000;
const env = process.env.NODE_ENV || "development";

const server = http.createServer((req, res) => {
  let fileName;
  let statusCode;

  if (req.url === "/") {
    fileName = "index.html";
    statusCode = 200;
  } else if (req.url === "/about") {
    fileName = "about.html";
    statusCode = 200;
  } else if (req.url === "/contact-me") {
    fileName = "contact-me.html";
    statusCode = 200;
  } else {
    fileName = "404.html";
    statusCode = 404;
  }

  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/html");
      res.end("<h1> Server Error </h1>");
      return;
    }

    res.statusCode = statusCode;
    res.setHeader("content-type", "text/html");
    res.end(data);
  });
});

console.log(`Starting server in ${env} mode`);

server.listen(3000, "127.0.0.1", () => {
  console.log(`Server is running at 127.0.0.1:${port}`);
});
