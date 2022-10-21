let rlSync = require('readline-sync');

let int = parseInt(rlSync.question('Please enter an integer greater than 0: '));
let computation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

function consecutiveSum(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

function consecutiveProduct(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

if (computation === 's') {
  console.log(`The sum of the integers between 1 and ${int} is ${consecutiveSum(int)}.`);
} else if (computation === 'p') {
  console.log(`The product of the integers between 1 and ${int} is ${consecutiveProduct(int)}.`);
} else {
  console.log('Sorry, not a valid choice.');
}
