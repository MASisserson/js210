function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

let doubler = makeDoubler('Matthew');
console.log(doubler(5));
