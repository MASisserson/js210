// Part 1
/*
function repeater(str) {
  let doubled = [];
  str.split('').forEach(ele => doubled.push(ele, ele));

  return doubled.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
*/

// Part 2
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const ALPHABET_REGEX = new RegExp('[a-zA-Z]');

function doubleConsonants(str) {
  let doubled = [];
  str.split('').forEach(ele => {
    if (!VOWELS.includes(ele) && ALPHABET_REGEX.test(ele)) {
      doubled.push(ele, ele);
    } else {
      doubled.push(ele);
    }
  });

  return doubled.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
