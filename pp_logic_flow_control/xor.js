let isXor = (first, second) => {
  switch (!!(first)) {
    case true:
      if (!!(second) === true) return false;
      break;
    case false:
      if (!!(second) === false) return false;
      break;
  };

  return true;
};

isXor = (first, second) => {
  return !!((first && !second) || (second && !first));
};

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
