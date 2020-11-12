const express = require("express");
const http = require("http");
const host = "localhost";
const port = 3000;

const app = express();

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><head><title>Express</title></head><body><h1>Express Server</h1></body></html>"
  );
});

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Server started at http://" + host + ":" + port);
});
