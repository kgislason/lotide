const countLetters = function(sentence) {
  if (typeof sentence !== 'string') return;
  if (!sentence) return;
  
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
module.exports = countLetters;