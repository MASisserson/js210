function countOccurrences(arr) {
  let occurrences = {};
  arr.forEach(ele => {
    if (occurrences.hasOwnProperty(ele)) {
      occurrences[ele] += 1;
    } else {
      occurrences[ele] = 1;
    }
  });

  Object.keys(occurrences).forEach(name => console.log(`${name} => ${occurrences[name]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
