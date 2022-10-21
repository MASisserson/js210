function stringy(num) {
  let resultString = '';
  let i = 1;

  do {
    resultString += '1';
    i += 1;
    if (i > num) break;
    resultString += '0';
    i += 1;
  } while (i <= num);

  return resultString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
