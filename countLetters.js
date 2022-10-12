/**
 * countLetters();
 *
 * Takes in a sentence and returns a count of each of the letters in the sentence.
 *
 * @since 1.0.0
 * @param {string} sentence
 * @returns {object} returns object with keys for each letter in sentence and values equal count for each time that letter appears
 */
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

module.exports = countLetters;