var expenseListFake = [
  { id: 123, expense: "item 1", value: 100 },
  { id: 124, expense: "item 2", value: 100 },
];

var budget = 0; // in the DB
var balance = 0; // in the DB

const displayTotal = (callback) => {
  callback(null, {
    expenseListFake: expenseListFake,
    budget: budget,
    balance: balance,
  });
};

module.exports = { displayTotal: displayTotal };
