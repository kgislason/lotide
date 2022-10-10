const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

// Test Data
const array1 = [1, 2, [3, 4], 5, [6]];
const array2 = [1, 2, [3, 4], [5], [6]];
const arrayFlat = [1, 2, 3, 4, 5, 6];

// Test Cases
assertEqual(flatten(array1).length, arrayFlat.length); // =>  Should pass
assertArraysEqual(flatten(array1), arrayFlat);
assertArraysEqual(flatten(array2), arrayFlat);