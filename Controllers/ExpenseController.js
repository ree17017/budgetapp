const expenseModels = require("../Models/ExpenseModels.js");

const addExpense = (req, res) => {
  const { expense, value } = req.params;
  expenseModels.addExpense(expense, value, function (error, results) {
    if (error || results === null) {
      res.sendStatus(500).json({
        success: false,
        error: error,
      });
    } else {
      res.status(200).json({ success: true, results });
    }
  });
};

module.exports = { addExpense: addExpense };
