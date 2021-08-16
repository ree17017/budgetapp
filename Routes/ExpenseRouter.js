const express = require("express");
const router = express.Router();

const data = require("../Controllers/ExpenseController.js");

router.use(function timeLog(req, res, next) {
  //   console.log(req);
  console.log("Time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("init");
});

router.put("/:expense/:value", data.addExpense);

module.exports = router;
