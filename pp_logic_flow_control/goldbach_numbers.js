function isPrime(num) {
  if (num === 2) return true;
  if (num < 2) return false;

  for (candidate = Math.floor(num / 2); candidate >= 2; candidate--) {
    if (num % candidate === 0) return false;
  }

  return true;
};

function checkGoldbach(num) {
  if (num % 2 !== 0 || num < 4) {
    console.log(null);
    return;
  }

  for (i = 2; i <= num; i++) {
    if (isPrime(i) && isPrime(num - i)) {
      console.log(String(i) + ' ' + String(num - i));
    }

    if (i >= Math.floor(num / 2)) {
      break;
    }
  }
}

// console.log(isPrime(3));

// for (i = 2; i <= 4; i++) {
//   console.log(isPrime(i));
// }

// checkGoldbach(3);
// logs: null

// checkGoldbach(4);
// logs: 2 2

// checkGoldbach(12);
// logs: 5 7

// checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
