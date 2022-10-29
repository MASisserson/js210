function centerOf(str) {
  let length = str.length;
  let halfPoint = Math.ceil(length / 2);

  if (length % 2 === 0) {
    return str.slice((halfPoint - 1), (halfPoint + 1));
  } else {
    return str.slice((halfPoint - 1), halfPoint);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
