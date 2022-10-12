/**
 * without.js
 *
 * @category Function
 * @param {array} source array
 * @param {array} itemsToRemove array
 * @returns {array} Returns array with only those elements from `source` array that are not present in the `itemsToRemove` array.
 */

const without = function(source, itemsToRemove = []) {
  let newArray = source;

  // Verify we are working with arrays
  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return;
  }

  // return empty array if source array is empty
  if (source.length === 0) {
    return [];
  }

  // Loop through itemsToRemove array and filter out items to remove
  for (const i2r of itemsToRemove) {
    newArray = newArray.filter(element => element !== i2r);
  }

  return newArray;
};

module.exports = without;