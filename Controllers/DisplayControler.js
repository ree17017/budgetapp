const expenseModels = require("../Models/DisplayModels.js");

const display = (req, res) => {
  console.log("displayControler");
  expenseModels.display(function (error, results) {
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

      res.status(200).json({ success: true, results });
    }
  });
};

module.exports = { display: display };
