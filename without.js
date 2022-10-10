/**
 * Function: without
 *
 * Description: returns a new array with only those elements from `source` that are not present in the `itemsToRemove` array.
 *
 * - `source` is an array
 * - `itemsToRemove is an array
 *
 */

const without = function(source, itemsToRemove) {
  let newArray = source;

  // Verify we are working with arrays
  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return;
  }

  // Loop through itemsToRemove array
  for (const ri of itemsToRemove) {
    // modify the newArray by filtering out items to remove (ri = remove item)
    // Each loop should build on the a new array that as prev been filtered
    newArray = newArray.filter(element => element !== ri);
  }

  return newArray;

};

module.exports = without;