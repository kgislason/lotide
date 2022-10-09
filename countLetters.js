const assertEqual = require('./assertEqual');

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