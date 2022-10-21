function greetings(nameArr, titles) {
  console.log(`Hello, ${nameArr.join(' ')}! Nice to have a ${titles.title} ${titles.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
