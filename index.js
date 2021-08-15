const express = require("express");
const app = express();

// Fake data
const expenseListFake = [
  { id: 123, expense: "item 1", value: 100 },
  { id: 124, expense: "item 2", value: 100 },
];

const displayFake = { budget: 100, expenses: 100, balance: 100 };

// Sudo code
// post Budget value
// post Expense name and amount
// get display values
app.get("/display", function (req, res) {
  res.send(displayFake);
});

// get budgetList
app.get("/expenseList", function (req, res) {
  res.send(expenseListFake);
});
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
