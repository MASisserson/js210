function crunch(string) {
  let prevChar = '';
  let resultString = '';

  for (char of string) {
    if (char !== prevChar) {
      resultString += char;
    }
    prevChar = char;
  }

  return resultString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
