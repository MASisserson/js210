'use strict';

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     qux: qux,
//     baz: baz,
//   };
// }

// #################################################################

// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log('bar');
//     },
//     qux: function(arg1) {
//       console.log('qux');
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log('baz');
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// #################################################################

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let myObj = foo(1, 2, 3);

// let bar = myObj.bar;
// let qux = myObj.qux;
// let baz = myObj.baz;

// #################################################################

// Currently on Problem 4

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ]
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// #################################################################

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// #################################################################

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// function product() {
//   // let numbers = Array.prototype.slice.call(arguments);
//   let numbers = Array.from(arguments);
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result);

// #################################################################

// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// #################################################################

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const { first, second, ...rest } = obj;

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// }

// const first = obj.first;
// const second = obj.second;
// const third = obj.third;
// const fourth = obj.rest;
// const rest = { third, fourth };

// console.log(first);
// console.log(second);
// console.log(rest);

// #################################################################

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// #################################################################

function sort(...args) {
  return {
    first: args[0],
    last: args[4],
    middle: [args[1], args[2], args[3]].sort(),
  };
}

let positions = ['first', 'second', 'third', 'fourth', 'fifth'];

let { first, last, middle } = sort(...positions);

console.log(first);
console.log(last);
console.log(middle);
