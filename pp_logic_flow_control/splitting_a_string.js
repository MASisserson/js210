function getSegments(string, delimiter) {
  let resultArray = [];
  if (delimiter === '') {
    for (character of string) {
      resultArray.push(character);
    }
  } else {
    let segment = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === delimiter) {
        resultArray.push(segment);
        segment = '';
        continue;
      }

      segment += string[i];

      if (i === string.length - 1) {
        resultArray.push(segment);
      }
    }
  }

  return resultArray;
}

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let segmentArray = getSegments(string, delimiter);

  segmentArray.forEach(segment => {
    console.log(segment);
  });
}

// splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

// splitString('hello');
// logs:
// ERROR: No delimiter

// splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

// splitString('hello', ';');
// logs:
// hello

// splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
