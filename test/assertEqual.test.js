const assertEqual = require('../assertEqual');

// TEST CODE
console.log("\n#assertEqual");
console.log("Should print failed for 2 different strings:");
assertEqual("Lighthouse Labs", "Bootcamp", false);
console.log("Should print passed for 2 identical numbers:");
assertEqual(1, 1, true);

console.log("Should assert passed for identical strings:");
assertEqual("Kristy", "Kristy", true);

console.log("\nComparing non-identical strings:");
assertEqual("Kristy", "kristy", false);
assertEqual("Kristy", "cheese", false);

console.log("\nComparing identical numbers:");
assertEqual(12, 12, true);

console.log("\nComparing non-identical numbers");
assertEqual(3, 4, false);
assertEqual(100, 100.02, false);
assertEqual(undefined, 0, false);
console.log("END assertArraysEqual \n");