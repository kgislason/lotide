/**
 * Function: findKey
 * 
 */

assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

// Arguments:
// - object
// - callback.
const findKey = function(object, callback) {
  // scan the object
  for (let key in object) {
    // return the first key for which the callback returns a truthy value.
    if (callback(object[key])) {
      return key;
    }
  }
  // If no key is found, then it should return undefined.
  return;
};

// Test 
const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, "noma");