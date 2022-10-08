const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

//   console.log((actual === expected) ? passMessage : failMessage);
// };

const countOnly = function(allItems, itemsToCount) {
  let output = {};

  for (let key in itemsToCount) {
    for (let item of allItems) {
      // Does key in itemsToCount object exist in the allItems array?
      // Is the value of key in itemsToCount true?
      if (key === item && itemsToCount[key]) {
        // Check if key exists
        if (!output[key]) {
          output[key] = 1;
        } else if (output[key]) {
          // If key exists, increment the count by 1
          output[key] += 1;
        }
      }
    }
  }

  // return an object w/ counts of everything from input object foudn in allItems.
  return output;
};

// Define an array
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Test Cases
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);