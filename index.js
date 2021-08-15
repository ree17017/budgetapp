const express = require("express");
const app = express();

// Fake data
const budget = 0;
const balance = 0;
const expense = 0;

// Need to move this as a DB.
var expenseListFake = [
  { id: 123, expense: "item 1", value: 100 },
  { id: 124, expense: "item 2", value: 100 },
];

// Home page with init value
// Need to switch this out to direct to the React router.
app.get("/", function (req, res) {
  res.send("Hello World");
});

function totalExpenses() {
  let total = 0;
  for (const expense in expenseListFake) {
    total += expenseListFake[expense].value;
  }
  expense = total;
}

function balanceTotal() {
  balanceTotal = budget - totalExpenses();
}

const displayFake = {
    budget: budget,
    expenses: expense,
    balance: balance,
};

// put Budget value
app.put("/expense/:expense/:value", function (req, res) {
  const { expense, value } = req.params;
  const lastID = expenseListFake.length + 1;
  const newExpense = { id: lastID, expense: expense, value: value };
  expenseListFake.push(newExpense);
  res.send(200);
});

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
    if (expense.id === id) {
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
    if (expense.id === id) {
      index = i;
    }
    return index;
  });

  expenseIndex.expense = expense;
  expenseIndex.value = value;

  res.send(expenseListFake);
});

// create user how can I keep users private without login? And no have users over use DB?

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
