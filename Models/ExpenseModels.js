// Models are for putting into and getting from the database.
// Fake data
var expenseListFake = [
  { id: 123, expense: "item 1", value: 100 },
  { id: 124, expense: "item 2", value: 100 },
];

// make this have it's own display? This would be busniess logic not database.
// Even though I would be calulating this from that database.
// create a display file. This should follow the collection for the display.
var budget = 0; // in the DB
var balance = 0; // in the DB
var expense = 0; // calculated from the expense List should I do this calulcation on the customer?

const addExpense = (expense, value, callback) => {
  console.log("addExpense model");
  expenseListFake.push({
    id: expenseListFake.length + 1,
    expense: expense,
    value: value,
  });
  callback(null, expenseListFake);
};

module.exports = {
  addExpense: addExpense,
};
