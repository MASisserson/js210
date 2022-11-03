# Literal

The `a` in the second to last line will be taken by JS to be a variable. It needs quotations around it.

# Literal Method

The function, itself, is returned.

# Mutation

An array identical to the array created on `line 1` will be printed. In the first `for` loop, `array2` is populated with the same values as those in `array1`. In the second `for` loop, the values in `array1` are switched out for different primitive values. This, however, does not affect the content in `array2` because no mutation of either array's elements is happening.

Further Exploration:

1.  Yes. The object literal in `array1` and `array2` would be the same object. Changes in that object would be reflected in both arrays.
2.  Set `array2` to equal `array1` so that they are referencing the same array object.

# Dynamic

It will log '678', and then on the next line '456'. As written here, a new property is given to `myObject` on `line 9` that has the property name `'456'` and the property value `'678'`. The actual `'prop2'` property of `myObject` is reassigned to `'456'` on `line 8`.

Further Exploration:

On the first printed line, we'll see the object: `{ funcProp: 'hello, ' }`.
On the second line, we'll see the same object, but changed: `{ funcProp: 'world!' }`.

The function definition on `line 4` is hoisted to the top of the program. Thus, the property name used on `line 2` is the return of the `myFunc()` call, which is `'funcProp'`. Then, that same property is given a different value on `line 9`.

# Array Object Part 1

line  1: a
line  2: undefined
line  3: d
line  4: 5
line  5: ['a', 'b', 'c', 'f', '-1': 'd', e: 5]

# Array Object Part 2

No. The function in this program will return 10 as the average. The `for` loop will iterate through all properties of the array, including the non-indexed properties, adding all their values together to get `20`. However, `Array.length` only counts the indexed properties, of which the array only has 2.

Further Exploration:

```javascript
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

average(myArray);
```

# What's my Bonus

```javascript
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000
```
You don't need to specify parameters in the function definition if you use the `arguments` object, which houses all of the arguments in an indexed list.

# The End is Near But Not Here

**Original**
```javascript
function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"
```

**Solution:**
```javascript
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"
```

The problem was that the array returned by `string.split(' ')` didn't have `-2` as one of its property names. Instead, you had to call the index value that was 2 less than the array's length.

**Alternative:**
```javascript
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"
```

Unlike bracket notation, slice() actually takes negative indexes as arguments and reads them as starting from the end of the array.

# After Midnight Part 1

**Original**
```javascript
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}
```

**Solution**
```javascript
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

function timeOfDay(minutes) {
  let deltaMinutes = minutes % MINUTES_PER_DAY;
  let deltaMilliseconds = deltaMinutes * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
  let date = new Date(deltaMilliseconds);

  return `${padWithZeroes(date.getUTCHours(), 2)}:${padWithZeroes(date.getUTCMinutes(), 2)}`;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
```

# After Midnight Part 2

**Solution**
```javascript
function extractTimeParts(timeStr) {
  let time = timeStr.split(':');
  return { hr: time[0], min: time[1] };
}

function afterMidnight(timeStr) {
  let time = extractTimeParts(timeStr);
  let date = new Date('January 1, 2000 00:00:00');
}

function beforeMidnight(timeStr) {
  let time = extractTimeParts(timeStr);
  let date = new Date('January 1, 2000 00:00:00');
}
```
Make a neutral date.
Make a date from the timeStr.
Subtract the 2.
Convert the millisecond result into minutes.
