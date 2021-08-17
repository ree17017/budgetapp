const expenseModels = require("../Models/DisplayModels.js");

const displayTotal = (req, res) => {
  expenseModels.displayTotal(function (error, results) {
    if (error || results === null) {
      res.sendStatus(500).json({
        success: false,
        error: error,
      });
    } else {
      let total = 0;
      results.expenseListFake.forEach((expense) => {
        total += expense.value;
      });

      results = { ...results, expense: total };

      res.send({ success: true, results });
    }
  });
};

module.exports = { displayTotal: displayTotal };
