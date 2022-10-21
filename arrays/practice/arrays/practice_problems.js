function lastElementInArray(array) {
  array[array.length - 1];
}

function rollCall(firstNameArray) {
  for (let i = 0; i < firstNameArray.length; i++) {
    console.log(firstNameArray[i]);
  }
}

function reverseArray(array) {
  let resultArray = [];
  for (let i = (array.length - 1); i >= 0; i--) {
    resultArray.push(array[i]);
  }

  return resultArray;
}

function joinAsString(array) {
  let resultString = '';
  for (ele of array) {
    resultString += String(ele);
  }

  return resultString;
}

console.log(joinAsString([1, 2, 3]));
