const express = require("express");
const router = express.Router();

const data = require("../Controllers/DisplayControler.js");

router.use(function timeLog(req, res, next) {
  //   console.log(req);
  console.log("Time timelog:", Date.now());
  next();
});

router.get("/", data.displayTotal);

module.exports = router;
