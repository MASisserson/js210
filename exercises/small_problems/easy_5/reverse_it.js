// Part 1
/*
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
*/

// Part 2
function reverse(word) {
  return word.split('').reverse().join('');
}

function reverseWords(str) {
  let words = str.split(' ');
  let reversedWords = words.map(word => {
    if (word.length > 4) {
      return reverse(word);
    }

    return word;
  });

  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
