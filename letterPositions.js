/**
 *
 * letterPositions()
 *
 * Description: Takes in a string and returns all indices of letter positions in the string
 *
 * @since 1.0.0
 * @param {string} sentence
 * @returns {object} all indices of letter positions in the sentence as an object
 */

const letterPositions = function(sentence) {
  // validate sentence argument
  if (!sentence || typeof sentence !== "string") return;

  // Create empty object to return
  const results = {};

  // turn sentence string into array
  const sentenceArray = sentence.split('');

  // loop through sentence array
  for (let index in sentenceArray) {
    // Do not include spaces in results object
    if (sentenceArray[index] !== ' ') {
      // Check if key exists
      if (results[sentenceArray[index]]) {
        // If key exists, add a new item to the value array
        results[sentenceArray[index]].push(Number(index));
      } else {
        // if not, create a new value array with one element
        results[sentenceArray[index]] = [Number(index)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;