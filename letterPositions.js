/**
 *
 * letterPositions()
 * @param {string} sentence
 * @returns all indices of letter positions in the sentence as an object
 */
const letterPositions = function(sentence) {
  if (!sentence) return;
  if (typeof sentence !== "string") return;

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
  return results;
};

module.exports = letterPositions;