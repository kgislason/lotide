const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
const mySentence = "lighthouse in the house";
console.log(countLetters(mySentence));

// Tests
assertEqual(countLetters(mySentence)['l'], 1);
assertEqual(countLetters(mySentence)[' '], 3);