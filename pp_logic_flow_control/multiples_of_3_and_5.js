function multiplesOfThreeAndFive(min, max) {
  for (i = min; i <= max; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      let multiple = i.toString() + '!';
      console.log(multiple);
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      let multiple = i.toString();
      console.log(multiple);
    };
  };
}

multiplesOfThreeAndFive(1, 50);
