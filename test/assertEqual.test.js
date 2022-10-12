const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp", false);
assertEqual(1, 1, true);

// Comparing identical strings
assertEqual("Kristy", "Kristy", true);

// Comparing non-identical strings
assertEqual("Kristy", "kristy", false);
assertEqual("Kristy", "cheese", false);

// Comparing identical numbers
assertEqual(12, 12, true);
assertEqual(100, 100.02, false);

// Comparing non-identical numbers
assertEqual(3, 4, false);
assertEqual(undefined, 0, false);