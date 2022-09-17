function indexOf(firstString, secondString) {
  let finalIndex = firstString.length - secondString.length;
  let firstCharacter;
  let matchCount;

  for (let firstIndex = 0; firstIndex <= finalIndex; firstIndex++) {
    firstCharacter = firstIndex;
    matchCount = secondString.length;

    for (let secondIndex = 0; secondIndex < secondString.length; secondIndex++) {
      if (firstString[firstCharacter] === secondString[secondIndex]) {
        matchCount -= 1;
      }
      firstCharacter++;
    }

    if (matchCount === 0) {
      return firstIndex;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  // statements
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
