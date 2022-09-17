let apples = 3;
let bananas = 1;

areEqual = apples === bananas;
console.log(areEqual);

eitherOr = apples || bananas;
console.log(eitherOr);

if (apples === bananas) {
  console.log('We have as many bananas as apples.');
} else {
  if (apples == bananas) {
    console.log('Same number but different type.');
  } else {
    console.log('Not equal!');
  }
}

let lastName = 'Parker';
familyMessage = (lastName === 'Sisserson') ? "You're part of the family!" : "You're not family."
console.log(familyMessage);
