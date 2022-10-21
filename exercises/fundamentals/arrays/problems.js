// Array Copy Part 1

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// myArray.pop();
// console.log(myArray);
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myArray);
// console.log(myOtherArray);

// `line 8` in the code above logs `[ 1, 2, 3, 4 ]` to the console. On `line 4` `myOtherArray` is initialized to the same array that `myArray` points to.
// `line 12` in the code above also logs `[1, 2, 3, 4]` to the console. Though `myArray` is reassigned on `line 10` to a new array, `myOtherArray` retains its reference to `[1, 2, 3, 4]`'s location in memory.


// Array Copy Part 2

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);


// Array Concat Part 1

// function concat(array1, addition) {
//   let comboArr = array1.slice();
//   if (Array.isArray(addition)) {
//     addition.forEach(ele => comboArr.push(ele));
//   } else {
//     comboArr.push(addition);
//   }

//   return comboArr;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                                      // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }


// Array Concat Part 2

// function concat(...args) {
//   let comboArr = [];

//   args.forEach(function(arg) {
//     if (Array.isArray(arg)) {
//       arg.forEach(ele => comboArr.push(ele));
//     } else {
//       comboArr.push(arg);
//     }
//   });

//   return comboArr;
// }

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]


// Array Pop and Push

// function pop(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   const last = arr[arr.length - 1];
//   arr.length -= 1;
//   return last;
// }

// // pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                       // 3
// console.log(array1);                            // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// function push(arr, ...args) {
//   if (args.length === 1) {
//     arr[arr.length] = args[0];
//   } else {
//     args.forEach(ele => arr[arr.length] = ele);
//   }

//   return arr.length;
// }

// // push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0


// Array and String Reverse

// function reverseValues(input) {
//   let result = [];
//   for (val of input) {
//     result.unshift(val);
//   }

//   return result;
// }

// function reverse(input) {
//   let result = reverseValues(input);

//   if (typeof(input) === 'string') {
//     return result.join('');
//   } else {
//     return result;
//   }
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]


// Array Shift and Unshift

// function shift(arr) {
//   const firstElement = arr[0];
//   arr.splice(0, 1);

//   return firstElement;
// }

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// function unshift(arr, ...args) {
//   const resultArray = args.concat(arr);
//   arr.length = 0;
//   resultArray.forEach(ele => arr.push(ele));

//   return arr.length;
// }

// function unshift(array, ...args) {
//   for (let i = 0; i < args.length; i += 1) {
//     array.splice(i , 0, args[i]);
//   }

//   return array.length;
// }

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// const testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5, 6));           // 3
// console.log(testArray);                       // [5, 2, 3]


// Array Slice and Splice

// function slice(array, begin, end) {
//   if (begin > array.length) {
//     begin = array.length;
//   }

//   if (end > array.length) {
//     end = array.length;
//   }

//   let sliceArray = [];
//   for (let i = begin; i < end; i++) {
//     sliceArray.push(array[i]);
//   }

//   return sliceArray;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

// function rotate(arr, rotations) {
//   for (let i = 0; i < rotations; i++) {
//     arr.push(arr.shift());
//   }
// }

// function rotateReverse(arr, rotations) {
//   for (let i = 0; i < rotations; i++) {
//     arr.unshift(arr.pop());
//   }
// }

// function deleteValues(array, start, deleteCount) {
//   let deletedValues = [];
//   for (let i = start; i < (start + deleteCount); i++) {
//     deletedValues.push(array[i]);
//     array[i] = array[i + deleteCount];
//   }

//   array.length -= deleteCount;

//   return deletedValues;
// }

// function insertValues(arr, start, values) {
//   rotate(arr, start);

//   values.forEach(value => arr.unshift(value));

//   rotateReverse(arr, start);
// }

// function splice(array, start, deleteCount, ...args) {
//   (start > array.length) ? (start = array.length) : null;
//   (deleteCount > (array.length - start)) ? (deleteCount = (array.length - start)) : null;

//   const deletedValues = deleteValues(array, start, deleteCount);
//   insertValues(array, start, args);

//   return deletedValues;
// }

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]


// Oddities

// `===` compares the memory locations of arrays. The return value of `oddities()` is a different array from the array presented by the literals of the other operand, so we get `false`.


// Array Comparison

// function areArraysEqual(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   let first = array1.slice().sort();
//   let second = array2.slice().sort();
//   for (idx in first) {
//     if (first[idx] !== second[idx]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
// console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
// console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
// console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
// console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
// console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
// console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
// console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
// console.log(areArraysEqual([1, 1], [1, 1]));                        // true
