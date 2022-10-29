// Part 1

function tallyWordLengths(word, lengthCount) {
  let length = word.length;
  if (lengthCount.hasOwnProperty(length)) {
    lengthCount[length] += 1;
  } else {
    lengthCount[length] = 1;
  }
}

function wordSizes(str) {
  if (str.length === 0) { return {} }

  let wordArr = str.split(' ');
  let lengthCount = {};
  wordArr.forEach(word => tallyWordLengths(word, lengthCount));

  return lengthCount;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
