# Multiplication Table

```javascript

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

```

It will not print what is expected because the first for loop isn't going to include 10.

# Selected Columns

You should just get rid of the `length` variable declarations in the `for` loop headers. You should also change the `var` declarations into `let` declarations.

```javascript

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < cols.length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // expected: [[2, 2, 2], [3, 3, 3]]

```

# Counter

**Snippet 1**
15. `counter` is reassigned to `5` on `line 1`.

**Snippet 2**
TypeError. `counter` is not a variable.
Correction: NaN. When a function is called without appended parenthesis `()`, the function is returned instead of executed. A function is not a number, and so when it is multiplied with a number, you get NaN.

**Snippet 3**
15. Same as snippet 1.

**Snippet 4**
SyntaxError. Cannot declare a `let` variable with the same name as a function.
Notable that Syntax Errors happen during creation phase, before hoisting, so hoisting has no direct effect here.

# Logger

The `logger()` function includes the `status` variable in its lexical scope because `status` is declared in the same lexical scope as the `logger()` function declaration. On `line 2` `status` is set to `'debugging'`. 

# Invoice

**Solution**
```javascript

function invoiceTotal(...args) {
  let sum = 0;
  for (num of args) {
    sum += num;
  }

  return sum;
}

```

# Product of Sums

NaN will be returned. The `total()` function does not have a `return` statement, so `undefined` will be implicitly returned.
