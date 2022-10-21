// Substring (1)

// function substr(string, start, length) {
//   if (start < 0) {
//     start = string.length + start;
//   }

//   let substring = '';
//   for (let i = start; i < string.length && i < start + length; i++) {
//     substring += string[i];
//   }

//   return substring;
// }

// let string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""


// Substring (2)

function evaluateStart(start) {
  if (start > string.length) {
    return string.length;
  } else if (start === NaN || start < 0 || !Number.isInteger(start)) {
    return 0;
  } else {
    return start;
  }
}

function evaluateEnd(string, end) {
  if (end === undefined || end > string.length) {
    return string.length;
  } else if (end === NaN || end < 0) {
    return 0;
  } else {
    return end;
  }
}

function substring(string, start, end) {
  let newStart = evaluateStart(start);
  let newEnd = evaluateEnd(string, end);
  
  if (newStart > newEnd) {
    [newStart, newEnd] = [newEnd, newStart];
  }

  let result_string = '';
  for (let i = newStart; i < newEnd; i++) {
    result_string += string[i];
  }

  return result_string;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
