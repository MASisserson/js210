function toLowerCase(string) {
  // const numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const upperCaseArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  let lowerCaseString = '';

  for (character of string) {
    if (upperCaseArray.includes(character)) {
      let asciiNumeric = character.charCodeAt(0);
      asciiNumeric += 32;
      lowerCaseString += String.fromCharCode(asciiNumeric);
    } else {
      lowerCaseString += character;
    }
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
