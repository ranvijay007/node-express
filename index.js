const express = require("express");
const http = require("http");
const morgan = require("morgan");
const host = "localhost";
const port = 3000;
const mongoose = require("mongoose");

const app = express();
const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);
connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

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
