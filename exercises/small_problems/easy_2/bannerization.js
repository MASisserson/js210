function logInBox(string) {
  let endString = '+' + '-'.repeat(string.length + 2) + '+';
  let betweenString = '|' + ' '.repeat(string.length + 2) + '|';
  let middleString = '| ' + string + ' |';

  console.log(endString);
  console.log(betweenString);
  console.log(middleString);
  console.log(betweenString);
  console.log(endString);
}

logInBox('To boldly go where no one has gone before.');
