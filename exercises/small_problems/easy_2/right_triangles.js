function triangle(count) {
  console.log();

  for (let i = 1; i <= count; i++) {
    console.log(' '.repeat(count - i) + '*'.repeat(i));
  }

  console.log();
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
