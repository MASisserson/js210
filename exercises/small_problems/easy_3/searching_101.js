let rlSync = require('readline-sync');

let num1 = Number(rlSync.question('Enter the 1st number: '));
let num2 = Number(rlSync.question('Enter the 2nd number: '));
let num3 = Number(rlSync.question('Enter the 3rd number: '));
let num4 = Number(rlSync.question('Enter the 4th number: '));
let num5 = Number(rlSync.question('Enter the 5th number: '));
let num6 = Number(rlSync.question('Enter the last number: '));

function includes(checkNum, ...numArr) {
  if (numArr.includes(checkNum)) {
    console.log(`The number ${checkNum} appears in ${numArr}`);
  } else {
    console.log(`The number ${checkNum} does not appear in ${numArr}`);
  }
}

includes(num6, num1, num2, num3, num4, num5);

// Further Exploration

function hasGreaterThan(arr, val) {
  arr.some(ele => ele > val);
}
