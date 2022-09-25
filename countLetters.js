const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const countLetters = (sentence) => {
  let sentenceArray = sentence.split('');
  console.log(sentenceArray);
  let result = {};
  // takes in a sentence (string)

  for (let letter of sentenceArray) {
    console.log(letter);
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  //return a count of each of the letters in that sentence.
  return result;
};

console.log(countLetters("lighthouse in the house"));