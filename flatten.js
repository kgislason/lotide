const flatten = function(myArray) {
  // let newArray = array.flat(Infinity);
  // return newArray;
  const newArray = [];

  // Check if argument is actually an array
  if (!Array.isArray(myArray)) {
    return;
  }

  for (const x of myArray) {
    if (Array.isArray(x)) {
      for (const y of x) {
        newArray.push(y);
      }
    } else if (!Array.isArray(x)) {
      newArray.push(x);
    }
  }

  return newArray;
};

module.exports = flatten;