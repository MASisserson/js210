# Defaults

My first thoughts:
1. There is nothing here to make sure `price` is given.
2. There is nothing here to force explicit coercion.

Actual:
1. 0 is a falsy value in JavaScript. Thus, 0 will be put into the same bucket as `undefined` during the initial vetting process.

# Equal

**Solution**
```javascript

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);

```

The JavaScript strict equality operator `===` returns `true` for objects only when the two operands are the same object. This is because each unique object is stored in a different space in memory, even if they have the same contents and value.

# Amount Payable

```
40
45
```

This is because `startingBalance` is reassigned prior to each call of `totalPayable`. These changes are tracked for use within the function.

# Caller

```javascript

function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

```

# What's My Value?

```

3
4
3
5

```

Neither `3.4` nor `-2` is a non-negative integer. As such, they don't count as indexed properties. An array's `length` property only includes indexed properties. `Object.keys()` returns an array containing all of its argument's property names as elements. These elements are given indexed property names, and thus count towards their array's length.

# Length

```

['JavaScript', 'Ruby', 'Python']
3
['JavaScript', 'Ruby', 'Python', <1 empty item>]
4
['JavaScript']
1
['JavaScript', <2 empty items>]
3
['JavaScript', <1 empty item>, 'Python']
undefined
3

```

When you increase an array's length manually, JavaScript creates indexed property names for each required space, but no value is given to those elements. Thus, they are displayed as `<empty items>` when printing the array and as `undefined` when printing the referenced value. Note that this doesn't mean that `undefined` is the value. JS just uses this word when the value is referenced to be printed with `console.log()`. When an array's length is manually reduced, elements are removed from the end of the array until the array is of the desired length. When a value is given to an indexed position greater than the array's length, empty items are used to fill the positions between the formerly last items in the array and the newly added value.

# The Red Pill

Welcome
to
the
Matrix!
