function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

function unshift(arr, val) {
  arr.reverse();
  arr[arr.length] = val;
  arr.reverse();
  return arr.length;
}

// let array = [1, 2, 3];
// console.log(unshift(array, 4));
// console.log(array);

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let firstElement = arr[0];
  arr.reverse();
  arr.length -= 1;
  arr.reverse();

  return firstElement;
}

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

function lastIndexOf(arr, val) {
  for (let i = (arr.length - 1); i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

function slice(arr, start, end) {
  let resultArray = [];

  if (!start && !end) {
    for (ele of arr) {
      push(resultArray, ele);
    }
  } else {
    for (let i = start; i < end; i++) {
      push(resultArray, arr[i]);
    }
  }

  return resultArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

function rotate(arr) {
  push(arr, shift(arr));

  return arr;
}

function splice(arr, start, num) {
  // Rotate to get start element to front of array.
  for (let i = 0; i < start; i++) {
    rotate(arr);
  }
  
  // Shift elements out of the array and into the new array `num` times.
  const originalLength = arr.length;
  let splicedElements = [];
  for (let i = 0; i < num; i++) {
    push(splicedElements, shift(arr));
  }

  // Rotate to original order: (arr.length - (start + num))
  for (let i = (start + num); i < originalLength; i++) {
    rotate(arr);
  }

  return splicedElements;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

function concat(arr1, arr2) {
  let combinedArray = slice(arr1);
  for (ele of arr2) {
    push(combinedArray, ele);
  }

  return combinedArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(arr, str) {
  elementString = '';
  for (idx in arr) {
    if (Number(idx) === (arr.length - 1)) {
      elementString += String(arr[idx]);
      continue;
    }

    elementString += (String(arr[idx]) + str);
  }

  return elementString;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

function lastElementOf(arr) {
  return arr[arr.length -1];
}

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // returns undefined
// console.log(nthElementOf(digits, -1));  // returns undefined

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice();
  }

  return arr.slice(arr.length - count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

function oddElementsOf(arr) {
  let oddIndexArray = [];
  for (let i = 1; i < arr.length; i += 2) {
    oddIndexArray.push(arr[i]);
  }

  return oddIndexArray;
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

function forwardReverseArray(arr) {
  return arr.concat(arr.slice().reverse());
}

// let digits = [1, 2, 3];
// console.log(forwardReverseArray(digits));

function sortDescending(arr) {
  return arr.slice().sort((a, b) => Number(b) - Number(a));
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let resultArray = [];
  arr.forEach(subArray => resultArray.push(subArray.reduce((sum, val) => sum + val)));

  return resultArray;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

function uniqueElements(arr) {
  let uniqueElementArray = [];
  arr.forEach(function(ele) {
    if (!uniqueElementArray.includes(ele)) {
      uniqueElementArray.push(ele);
    }
  });

  return uniqueElementArray;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

function missing(ints) {
  let missingDigitsArr = [];
  for (let i = ints[0]; i < ints[ints.length - 1]; i++) {
    if (!ints.includes(i)) {
      missingDigitsArr.push(i);
    }
  }

  return missingDigitsArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
