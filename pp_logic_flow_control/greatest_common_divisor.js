// Sorts numbers with smallest first.
function sortNumbers(num1, num2) {
  if (num1 > num2) {
    return [num2, num1];
  } else {
    return [num1, num2];
  };
}

function gcd(num1, num2) {
  numbers = sortNumbers(num1, num2);
  candidate = numbers[0];

  while (true) {
    if ((numbers[0] % candidate === 0) && (numbers[1] % candidate === 0)) {
      return candidate
    };
    candidate -= 1;
  };
}

// function gcd(num1, num2) {
//   numbers = [num1, num2];
//   while (num1 !== 0 && num2 !== 0) {
//     numbers.sort();
//     numbers = [numbers[0], (numbers[1] % numbers[0])];
//   };

//   return numbers[0];
// }

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
