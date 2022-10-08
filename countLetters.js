const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

//   console.log((actual === expected) ? passMessage : failMessage);
// };

const countLetters = function(sentence) {
  let result = {};
  let sentenceArray = sentence.split('');

  for (let letter of sentenceArray) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  //return a count of each of the letters in that sentence.
  return result;
};

const mySentence = "lighthouse in the house";
console.log(countLetters(mySentence));

// Tests
assertEqual(countLetters(mySentence)['l'], 1);
assertEqual(countLetters(mySentence)[' '], 3);