// Part 1

/*
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
*/

// Part 2

function justAlphabet(str) {
  const alphabet = new RegExp('[a-zA-Z]');
  return str.split('').filter(ele => alphabet.test(ele)).join('');
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  return isPalindrome(justAlphabet(str).toLowerCase());
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
