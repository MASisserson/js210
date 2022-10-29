function getRandomAge(max) {
  let age = 0;
  do {
    age = Math.round(Math.random() * max);
  } while (age < 20);

  return age;
}

console.log(`Teddy is ${getRandomAge(200)} years old!`);
