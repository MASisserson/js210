// function objectHasProperty(obj, name) {
//   return Object.keys(obj).includes(name);
// }

// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// function incrementProperty(obj, name) {
//   if (obj.hasOwnProperty(name)) {
//     obj[name] += 1;
//   } else {
//     obj[name] = 1;
//   }

//   return obj[name];
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// function copyProperties(obj1, obj2) {
//   let counter = 0;
//   for (property in obj1) {
//     obj2[property] = obj1[property];
//     counter += 1;
//   }

//   return counter;
// }

// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function incrementProperty(obj, name) {
  if (obj.hasOwnProperty(name)) {
    obj[name] += 1;
  } else {
    obj[name] = 1;
  }

  return obj[name];
}

function wordCount(str) {
  let wordCounts = {};
  str.split(' ').forEach(word => incrementProperty(wordCounts, word));

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
