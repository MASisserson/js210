const isPrime = function(num) {
  if (num === 2) return true;
  if (num < 2) return false;

  for (i = Math.floor(num / 2); i >= 3; i--) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
