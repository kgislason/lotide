const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};


const countOnly = (arrayAllItems, objectItemsToCount) => {
  let newObject = {};


  // Loop through the object to count
  for (let key in objectItemsToCount) {
    //console.log(key);
    // Loop through the origin array
    for (let item of arrayAllItems) {
    // console.log(item); 
      // determine if the key in the object exists in the allItems array
      // Also check if the value of th ekey is true
      if (key === item && objectItemsToCount[key]) {
        // Count how many times the key appears in the allItems array
        let count = 1;

        //console.log(key + ": " + count);
        // If we haven't created the key yet in the new object, then let's start one
        // console.log(newObject[key]);
        if (!newObject[key]) {
          newObject[key] = count;
        } else if (newObject[key]) {
          // If the key already exists, then lets increment the value by 1
          newObject[key] += count++;
        }
      }
    }
  }

  // return an object containing counts of everything that the input object listed.
  console.log(newObject);
  return newObject;
};

// Define an array
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Test Cases
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);