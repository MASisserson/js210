function interleave(arr1, arr2) {
  let comboArr = [];
  for (idx in arr1) {
    comboArr.push(arr1[idx], arr2[idx]);
  }

  return comboArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
