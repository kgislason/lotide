const countOnly = function(allItems, itemsToCount) {
  let output = {};

  for (let key in itemsToCount) {
    for (let item of allItems) {
      // Does key in itemsToCount object exist in the allItems array?
      // Is the value of key in itemsToCount true?
      if (key === item && itemsToCount[key]) {
        // Check if key exists
        if (!output[key]) {
          output[key] = 1;
        } else if (output[key]) {
          // If key exists, increment the count by 1
          output[key] += 1;
        }
      }
    }
  }

  // return an object w/ counts of everything from input object foudn in allItems.
  return output;
};

module.exports = countOnly;