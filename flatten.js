const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(myArray) {
  // let newArray = array.flat(Infinity);
  // return newArray;
  const newArray = [];

  // Check if argument is actually an array
  if (!Array.isArray(myArray)) {
    return;
  }

  for (const x of myArray) {
    if (Array.isArray(x)) {
      for (const y of x) {
        newArray.push(y);
      }
    } else if (!Array.isArray(x)) {
      newArray.push(x);
    }
  }

  return newArray;
};

// Test Data
const array1 = [1, 2, [3, 4], 5, [6]];
const array2 = [1, 2, [3, 4], [5], [6]];
const arrayFlat = [1, 2, 3, 4, 5, 6];

// Test Cases
console.log(flatten(array1)); // => [1, 2, 3, 4, 5, 6]
assertEqual(flatten(array1.length, arrayFlat)); // =>  Should pass
assertArraysEqual(flatten(array1), arrayFlat);
console.log("----");
console.log(flatten(array2));
assertArraysEqual(flatten(array2), arrayFlat);