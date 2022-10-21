const cleanUp = function cleanUpString(str) {
  let resultString = '';

  for (char of str) {
    let code = char.charCodeAt();

    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      resultString += char;
    } else if (resultString[resultString.length - 1] !== ' ') {
      resultString += ' ';
    }
  }

  return resultString;
};

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
