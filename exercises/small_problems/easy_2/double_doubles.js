const isDouble = function isADoubleNumber(num) {
  let strNum = String(num);
  let halfPoint = Math.floor(strNum.length / 2);
  let firstHalf = strNum.substring(0, halfPoint);
  let lastHalf = strNum.substring(halfPoint, strNum.length);

  return firstHalf === lastHalf;
}

const twice = function doubleUnlessIsADoubleNumber(num) {
  if (isDouble(num)) {
    return num;
  }

  return (num * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
