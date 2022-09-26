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

const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split('');

  for (let index in sentenceArray) {
    if (sentenceArray[index] !== ' ') {
      if (results[sentenceArray[index]]) {
        results[sentenceArray[index]].push(Number(index));
      } else {
        results[sentenceArray[index]] = [Number(index)];
      }
    }
  }
  // logic to update results here
  return results;
};

const exampleString = "lighthouse in the house";
const exampleString2 = "only";

console.log(letterPositions(exampleString));
console.log(letterPositions(exampleString)["l"]);
console.log(letterPositions(exampleString2)["l"]);

// Test
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