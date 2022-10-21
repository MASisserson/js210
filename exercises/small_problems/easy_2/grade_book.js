const getGrade = function letterGradeFromAverage(n1, n2, n3) {
  let gradeArray = ['90A', '80B', '70C', '60D', '0F'];
  let args = Array.from(arguments);
  let avgGrade = args.reduce((sum, grade) => sum + grade) / args.length;

  for (letterGrade of gradeArray) {
    if (avgGrade > parseInt(letterGrade)) {
      return letterGrade[letterGrade.length - 1];
    }
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
