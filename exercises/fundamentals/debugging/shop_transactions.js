"use strict";

const transactionLog = [];

// function isMoneySyntax(input) {
//   /^\d*.\d?\d?/g.test(input);
// }

function processInput(input) {
  // if (!isMoneySyntax(input)) {
  //   throw (new Error("Data isn't in proper syntax. Use XX.XX syntax."));
  // }
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch (error) {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  // for (let i = 0; i < transactionLog.length; i++) {
  //   total += transactionLog[i];
  // }

  transactionLog.forEach(function(transaction) {
    total += transaction;
  });

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
