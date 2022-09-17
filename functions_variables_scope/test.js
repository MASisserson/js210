// On Function Scope

/*
console.log('From Main:')

let user = 'Roger';
console.log(user);
let number = 13;
console.log(number);

user = 'Steven';
console.log(user);
number += 1;
console.log(number);

function myTest() {
  console.log('From within the function:');

  console.log(user);
  console.log(number);

  user = 'Harry';
  console.log(user);
  number += 1;
  console.log(number);
}

console.log('Back to Main:');
myTest();
console.log(user);
console.log(number);
*/

// On Function Variables:

/*
function myFunction() {
  console.log('this is my function');
}

myFunction();
console.log(myFunction);
console.log(myFunction());
myFunction = 'poltergeist';
console.log(myFunction);
*/

// On block-scope in functions

/*
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

if (true) {
  a = 'something else'
}
console.log(a);
*/

// Testing the Node.js wrapper function

function hello() {
	a = 'hello';
	console.log(a);
}

hello();
console.log(a);
