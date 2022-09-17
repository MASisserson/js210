let rlSync = require('readline-sync');

num1 = Number(rlSync.question('Enter the first number: '));
num2 = Number(rlSync.question('Enter the second number: '));

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);
