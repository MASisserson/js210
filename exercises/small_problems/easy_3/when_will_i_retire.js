const rlSync = require('readline-sync');

const age = Number(rlSync.question('What is your age? '));
const retirementAge = Number(rlSync.question('At what age would you like to retire? '));
const yearsToGo = retirementAge - age;
const today = new Date().getFullYear();

console.log(`It's ${today}. You will retire in ${today + yearsToGo}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);
