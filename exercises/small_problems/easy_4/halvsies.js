function halvsies(arr) {
  // Use Array.prototype.slice()
  let halfPoint = Math.ceil(arr.length / 2);
  return [arr.slice(0, halfPoint), arr.slice(halfPoint)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
