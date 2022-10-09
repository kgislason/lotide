const assertEqual = require('./assertEqual');

// takes in an object and a value.
const findKeyByValue = function(object, value) {
  // scan the object
  for (let key in object) {
    // return the first key which contains the given value.
    if (object[key].includes(value)) {
      return key;
    }
  }
  // If no key with that given value is found,
  // then it should return undefined.
  return;
};

// Tests
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);