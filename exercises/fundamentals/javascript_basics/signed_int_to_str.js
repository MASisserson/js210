"use strict";

const DIGIT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const getDigits = function getDigits(int) {
  let num = Math.abs(int);
  let digits = [];

  do {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  } while (num > 0);

  return digits.reverse();
};

const integerToString = function integerToString(int) {
  const digits = getDigits(int);
  let digitChars = [];
  digits.forEach(digit => digitChars.push(DIGIT_CHARS[digit]));

  return digitChars.join('');
};

const signedIntegerToString = function signedIntegerToString(int) {
  if (int === 0) return '0';

  const digits = getDigits(int);
  let digitChars = [];
  digits.forEach(digit => digitChars.push(DIGIT_CHARS[digit]));

  if (int === Math.abs(int)) {
    return '+' + digitChars.join('');
  } else {
    return '-' + digitChars.join('');
  }
};

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
