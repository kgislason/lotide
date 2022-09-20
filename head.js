// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? true : false;
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  return result ? passMessage : failMessage;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

// Comparing identical strings
console.log(assertEqual("Kristy", "Kristy"));

// Comparing non-identical strings
console.log(assertEqual("Kristy", "kristy"));
console.log(assertEqual("Kristy", "cheese"));

// Comparing identical numbers
console.log(assertEqual(12, 12));
console.log(assertEqual(100, 100.02));

// Comparing non-identical numbers
console.log(assertEqual(3, 4));
console.log(assertEqual(undefined, 0));

// return the first element itself
const head = (array) => {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

// Test Cases for head function
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), 0));
console.log(assertEqual(head([0]), 0));
console.log(assertEqual(head([null, 0, 1]), 0));
