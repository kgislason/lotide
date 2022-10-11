/**
 * middle.js
 * 
 * Description: takes in an array and returns middle most element of the array.
 */

const middle = function(array) {
  // Round down to whole number; index starts at 0 so substract 1
  let middleCalc = Math.round(array.length / 2) - 1;

  if (!Array.isArray(array)) {
    return;
  } else if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(middleCalc, middleCalc + 2);
  } else if (array.length % 2 !== 0) {
    return array.slice(middleCalc, middleCalc + 1);
  }
};

module.exports = middle;