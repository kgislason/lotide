// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? true : false;
  const passMessage = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
  const failMessage = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;

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