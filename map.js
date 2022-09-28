
const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log((eqArrays(actual, expected) === true) ? passMessage : failMessage);
};

const words = ["ground", "control", "to", "major", "tom"];
const animals = [
  {
    name: "Goldie",
    type: "dog",
  },
  {
    name: "Lizzie",
    type: "fish",
  },
  {
    name: "Nibbles",
    type: "Hamster",
  },
  {
    name: "Sasha",
    type: "dog",
  }
];

//Our map function will take in two arguments:
// An array to map
// A callback function
const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};


// Test
const wordsFirstLetter = map(words, word => word[0]);
console.log(wordsFirstLetter);

const animalNames = map(animals, x => x.name);
console.log(animalNames);

const animalTypes = map(animals, x => x.type);
console.log(animalTypes);

const wordsLength = map(words, x => `Word Length: ${x.length}`);
console.log(wordsLength);

console.log(assertArraysEqual(wordsFirstLetter, [ 'g', 'c', 't', 'm', 't' ]));

console.log(assertArraysEqual(animalNames, [ 'Goldie', 'Lizzie', 'Nibbles', 'Sasha' ]));

console.log(assertArraysEqual(animalTypes, [ 'dog', 'fish', 'Hamster', 'dog' ]));

console.log(assertArraysEqual(wordsLength, [
  'Word Length: 6',
  'Word Length: 7',
  'Word Length: 2',
  'Word Length: 5',
  'Word Length: 3'
]));