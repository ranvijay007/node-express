const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promo: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all promotions");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "Will send the promotion of ID: " + req.params.promoId + " to you!"
    );
  })
  .post((req, res, next) => {
    res.end("Will the promotion: " + req.params.promoId + " added.");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on PromotionId" + req.params.promoId);
  })
  .delete((req, res, next) => {
    res.end("Deleting Promotion of Id " + req.params.promoId);
  });

module.exports = promoRouter;
