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
  return results;
};

module.exports = letterPositions;