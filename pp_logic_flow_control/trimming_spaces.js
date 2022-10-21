function trim(string) {
  let indexes = [];

  for (let index in string) {
    if (string[index] !== ' ') {
      indexes.push(index);
    }
  }

  let result = '';
  for (let i = indexes[0]; i <= indexes[indexes.length - 1]; i++) {
    result += string[i];
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
