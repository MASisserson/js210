function invoiceTotal(...args) {
  let sum = 0;
  for (num of args) {
    sum += num;
  }

  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
