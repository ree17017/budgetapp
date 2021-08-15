const express = require("express");
const app = express();

// Fake data
var expenseListFake = [
  { id: 123, expense: "item 1", value: 100 },
  { id: 124, expense: "item 2", value: 100 },
];

const displayFake = { budget: 100, expenses: 100, balance: 100 };

app.get("/", function (req, res) {
  res.send("Hello World");
});

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

// delete budgetEntry
app.delete("/expense/:id", function (req, res) {
  const { id } = req.params;
  const expenseIndex = expenseListFake.find((expense, i) => {
    let index = -1;
    console.log(expense);
    if (expense.id === id) {
      console.log(id);
      index = i;
    }
    return index;
  });

  // Fake delete from database.
  expenseListFake = expenseListFake.splice(expenseIndex, 1);

  return res.send({
    status: 200,
    expenseList: expenseListFake,
  });
});

// update budgetEntry
app.post("/expense/:id/:expense/:value", function (req, res) {
  const { id, expense, value } = req.params;
  const expenseIndex = expenseListFake.find((expense, i) => {
    let index = -1;
    console.log(expense);
    if (expense.id === id) {
      console.log(id);
      index = i;
    }
    return index;
  });

  expenseIndex.expense = expense
  expenseIndex.value = value

  res.send(expenseListFake);
});

// Home page with init value

// create user

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
