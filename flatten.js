const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  assertEqual(eqArrays(arrayOne, arrayTwo), true);
};

const flatten = (array) => {
  // let newArray = array.flat(Infinity);
  // return newArray;
  let newArray = [];

  for (let value of array) {
    if (Array.isArray(value)) {
      for (let item of value) {
        newArray.push(item);
      }
    } else if (!Array.isArray(value)) {
      newArray.push(value);
    }
  }

  return newArray;
};

// Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log(flatten([1, 2, [3, 4], [5], [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);