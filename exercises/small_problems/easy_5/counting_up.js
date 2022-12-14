function sequence(num) {
  let result = [];
  let count = 1;
  do {
    result.push(count);
    count += 1;
  } while (count <= num);

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
