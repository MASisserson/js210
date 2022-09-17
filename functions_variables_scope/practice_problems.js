const sum = (numbers) => {
  let total = 0;
  for(let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }

  return total;
}

const average = (numbers) => {
  return sum(numbers) / numbers.length;
}

console.log(average([1, 2, 3, 4, 5, 6]));

let temperatures = [45, 79, 1, 101, 54];
console.log(average(temperatures));
