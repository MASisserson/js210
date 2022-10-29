function swapLetters(word) {
  let ltrArr = word.split('');
  let firstEle = ltrArr.shift();
  ltrArr.unshift(ltrArr.pop());
  ltrArr.push(firstEle);

  return ltrArr.join('');
}

function swap(str) {
  let wordArr = str.split(' ');
  return wordArr.map(word => swapLetters(word)).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
