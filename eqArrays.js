/**
 * eqArrays()
 *
 * Description: takes in 2 arrays and returns true if the arrays are equal and false otherwise
 *
 * @since 1.0.0
 * @param {array} arrayOne first array to compare
 * @param {array} arrayTwo second array to compare
 * @returns {boolean} Returns true if the arrays are equal, false otherwise
 */

const eqArrays = function(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      eqArrays(arrayOne[i], arrayTwo[i]);
    } else if (Array.isArray(arrayOne[i]) && !Array.isArray(arrayTwo[i])) {
      return false;
    } else if (!Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      return false;
    } else {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;