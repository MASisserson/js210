function getNewCharacter(oldIndex, rotation, alphabet) {
  newIndex = (oldIndex + rotation) % alphabet.length;
  return alphabet[newIndex];
}

function rot13(string) {
  const ALPHABET_ARRAY = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  const ROTATION = 13;

  let resultString = '';
  for (character of string) {
    let index = ALPHABET_ARRAY.indexOf(character.toUpperCase());
    if (index === -1) {
      resultString += character;
      continue;
    }

    let newCharacter = getNewCharacter(index, ROTATION, ALPHABET_ARRAY);
    if (/[a-z]/.test(character)) {
      resultString += newCharacter.toLowerCase();
    } else {
      resultString += newCharacter;
    }
  }

  return resultString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
