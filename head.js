// FUNCTION IMPLEMENTATION - Assert Equal
const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Comparing identical strings
assertEqual("Kristy", "Kristy");

// Comparing non-identical strings
assertEqual("Kristy", "kristy");
assertEqual("Kristy", "cheese");

// Comparing identical numbers
assertEqual(12, 12);

// Comparing non-identical numbers
assertEqual(3, 4);
assertEqual(undefined, 0);

// return the first element itself
const head = (array) => {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

// Test Cases for head function
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head([0]), 0);
assertEqual(head([null, 0, 1]), 0);
