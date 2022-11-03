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

// const stringToSignedInteger = function stringToSignedInteger(numString) {
//   let digits = numString.split('');
//   let sign;
//   if (numString[0] === '+') {
//     digits.shift();
//     sign = 1;
//   } else if (numString[0] === '-') {
//     digits.shift();
//     sign = -1;
//   }

//   let int = stringToInteger(digits.join(''));
//   if (!!sign) {
//     int *= sign;
//   }

//   return int;
// };

const stringToSignedInteger = function stringToSignedInteger(numString) {
  switch(numString[0]) {
    case '-': return -stringToInteger(numString.slice(1));
    case '+': return stringToInteger(numString.slice(1));
    default:  return stringToInteger(numString);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
