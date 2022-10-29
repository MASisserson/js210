function copy(obj) {
  let serializedObj = JSON.stringify(obj);
  return JSON.parse(serializedObj);
}

function addUniques(newArr, ...oldArrays) {
  oldArrays.forEach(oldArr => {
    oldArr.forEach(ele => {
      if (!newArr.includes(ele)) {
        newArr.push(ele);
      }
    });
  });
}

function union(arr1, arr2) {
  let copy1 = copy(arr1);
  let copy2 = copy(arr2);
  let comboArr = [];

  addUniques(comboArr, copy1, copy2);

  return comboArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
