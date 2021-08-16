const express = require("express");
const router = express.Router();

const data = require("../Controllers/DisplayControler.js");

console.log("display");

router.use(function timeLog(req, res, next) {
  //   console.log(req);
  console.log("Time timelog:", Date.now());
  next();
});

router.get("/", data.display);

console.log("finished");
module.exports = router;
