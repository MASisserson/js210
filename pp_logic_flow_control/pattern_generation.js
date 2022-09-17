function digits(currentRow) {
  let numberString = '';

  for (i = 1; i <= currentRow; i++) {
    numberString += String(i);
  }

  return numberString;
}

function stars(totalRows, currentRow) {
  let starString = '';

  for (i = currentRow; i < totalRows; i++) {
    if (currentRow > 99) {
      starString += '***';
    } else if (currentRow > 9) {
      starString += '**';
    } else {
      starString += '*'
    }
  }

  return starString;
}

function generatePattern(nStars) {
  for (row = 1; row <= nStars; row++) {
    console.log(digits(row) + stars(nStars, row));
  }
}

generatePattern(20);

// console output
/*
1******
12*****
123****
1234***
12345**
123456*
1234567
*/
