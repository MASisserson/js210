function indexOf(firstString, secondString) {
  let finalIndex = firstString.length - secondString.length;

  for (let firstIndex = 0; firstIndex <= finalIndex; firstIndex++) {
    let matchCount = secondString.length;

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex++) {
      if (firstString[firstIndex + secondIndex] === secondString[secondIndex]) {
        matchCount -= 1;
      }
    }

    if (matchCount === 0) {
      return firstIndex;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let finalIndex = firstString.length - secondString.length;

  for (let firstIndex = finalIndex; firstIndex >= 0; firstIndex--) {
    let matchCount = secondString.length;

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex++) {
      if (firstString[firstIndex + secondIndex] === secondString[secondIndex]) {
        matchCount -= 1;
      }
    }

    if (matchCount === 0) {
      return firstIndex;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
