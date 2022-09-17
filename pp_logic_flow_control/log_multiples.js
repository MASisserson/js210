function logMultiples(num) {
  let multiple = num;
  let finalArray = [];
  for (i = 1; multiple * i <= 100; i++) {
    if ((multiple * i) % 2 !== 0) {
      finalArray.unshift(multiple * i);
    };
  };
  
  finalArray.forEach(element => console.log(element));
}

logMultiples(17);
logMultiples(21);
