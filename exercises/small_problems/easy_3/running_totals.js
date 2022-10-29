// With Array.prototype.reduce()
// function runningTotal(arr) {
//   let result = [];
//   arr.reduce(function(prevValue, currValue) {
//     result.push(prevValue + currValue);
//     return prevValue + currValue;
//   }, 0)

//   return result;
// }

// With Array.prototype.map()
function runningTotal(arr) {
  let sum = 0;
  return arr.map(num => sum += num)
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
