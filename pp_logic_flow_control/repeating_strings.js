function repeat(string, times) {
  if (Number.isInteger(times) || times < 0) {
    return;
  }

  let resultString = '';
  for (let i = 0; i < times; i++) {
    resultString += string;
  }

  return resultString;
}

console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
