function average(numbers) {
  return numbers.reduce((sum, num) => sum + num) / numbers.length;
}

function studentGrade() {
  let rlSync = require('readline-sync');

  let score1 = Number(rlSync.question('Enter score 1: '));
  let score2 = Number(rlSync.question('Enter score 2: '));
  let score3 = Number(rlSync.question('Enter score 3: '));

  let finalGrade = Math.floor(average([score1, score2, score3]));
  console.log(finalGrade);

  let letterGrade;
  if (finalGrade >= 90) {
    letterGrade = 'A';
  } else if (finalGrade >= 70) {
    letterGrade = 'B';
  } else if (finalGrade >= 50) {
    letterGrade = 'C';
  } else {
    letterGrade = 'F';
  };

  console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);
}

studentGrade();
