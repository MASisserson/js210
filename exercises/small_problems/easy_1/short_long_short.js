function shortLongShort(str1, str2) {
  let stringArray = [str1, str2].sort((a, b) => (a.length - b.length));
  return (stringArray[0] + stringArray[1] + stringArray[0]);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
