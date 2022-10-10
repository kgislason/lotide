const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const exampleString = "lighthouse in the house";
const exampleString2 = "only";

console.log(letterPositions(exampleString));
console.log(letterPositions(exampleString)["l"]);
console.log(letterPositions(exampleString2)["l"]);

// Test
assertEqual(letterPositions(exampleString)["l"].length, [0].length);
assertArraysEqual(letterPositions(exampleString)["l"], [0]);
assertArraysEqual(letterPositions(exampleString2)["l"], [2]);

// Expected Outcome
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }