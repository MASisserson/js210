function multiplyList(arr1, arr2) {
  let comboArr = [];
  for (idx in arr1) {
    comboArr.push(arr1[idx] * arr2[idx]);
  }

  return comboArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
