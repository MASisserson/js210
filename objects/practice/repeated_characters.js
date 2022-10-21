// Get a count of all characters
// Iterate through the count object and return a new object with only those with count > 2

function repeatedCharacters(str) {
  let charCount = {};
  for (char of str) {
    if (charCount.hasOwnProperty(char.toLowerCase())) {
      charCount[char.toLowerCase()] += 1;
    } else {
      charCount[char.toLowerCase()] = 1;
    }
  }

  let repChars = {}
  for (char in charCount) {
    if (charCount[char] > 1) {
      repChars[char] = charCount[char];
    }
  }

  return repChars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
