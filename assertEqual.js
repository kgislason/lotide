// FUNCTION IMPLEMENTATION - Assert Equal
const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Comparing identical strings
assertEqual("Kristy", "Kristy");

// Comparing non-identical strings
assertEqual("Kristy", "kristy");
assertEqual("Kristy", "cheese");

// Comparing identical numbers
assertEqual(12, 12);
assertEqual(100, 100.02);

// Comparing non-identical numbers
assertEqual(3, 4);
assertEqual(undefined, 0);