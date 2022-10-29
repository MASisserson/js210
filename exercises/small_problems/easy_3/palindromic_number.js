function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  let numStr = String(num);
  while (numStr.startsWith('0')) { numStr = numStr.slice(1, numStr.length) }

  return isPalindrome(String(numStr));
}

console.log(isPalindromicNumber('00034543'));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
