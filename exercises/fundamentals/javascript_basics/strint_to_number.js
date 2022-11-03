const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const stringToInteger = function stringToInteger(numString) {
  const reversedDigits = numString.split('').reverse();
  let modifier = 1;
  let result = 0;

  reversedDigits.forEach(digit => {
    result += (DIGITS[digit] * modifier);
    modifier *= 10;
  });

  return result;
};

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
