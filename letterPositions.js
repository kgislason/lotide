const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (!arrayOne.length === arrayTwo.length) {
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

  for (let letter in sentenceArray) {
    if (sentenceArray[letter] !== ' ') {
      results[letter] = sentenceArray[letter];
    }
  }
  // logic to update results here
  return results;
};

const exampleString = ("lighthouse in the house");

console.log(letterPositions(exampleString));