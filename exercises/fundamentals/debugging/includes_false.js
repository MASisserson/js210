'use strict';

function includesFalse(list) {
  for (let idx = 0; idx < list.length; idx++) {
    let element = list[idx];

    if (element === false) {
      return true;
    }
  }

  return false;
}
// eslint-disable-next-line indent
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true
