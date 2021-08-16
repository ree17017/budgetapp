const express = require("express");
const app = express();
const expenseRouter = require("./Routes/ExpenseRouter.js");
const displayRoute = require("./Routes/DisplayRoute.js");

// Fake data
let budget = 0;
let balance = 0;
let expense = 0;

// Need to move this as a DB.
let expenseListFake = [
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
  for (const e in expenseListFake) {
    total += expenseListFake[e].value;
  }

  expense = total;
}

function setBalanceTotal() {
  balance = budget - totalExpenses();
}

const displayFake = {
  budget: budget,
  expenses: expense,
  balance: balance,
};

// put Budget value
app.use("/expense", expenseRouter);

// get display values
app.use("/display", displayRoute);

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
