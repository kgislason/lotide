const assert = require('chai').assert;
const map = require('../map');

// Define arrays to work with
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

describe("#map", () => {

  it('should return first letter of all words in array words', () => {
    const actual = map(words, word => word[0]);
    const expected = [ 'g', 'c', 't', 'm', 't' ];
    assert.deepEqual(actual, expected);
  });

  it('should return animals names from object animals, ["Goldie", "Lizzie", "Nibbles", "Sasha"]', () => {
    // const animalNames = map(animals, x => x.name);
    const actual = map(animals, x => x.name);
    const expected = [ 'Goldie', 'Lizzie', 'Nibbles', 'Sasha' ];
    assert.deepEqual(actual, expected);
  });

  it('should return word lengths - Word Length: 6... in an array', () => {
    const actual = map(words, x => `Word Length: ${x.length}`);
    const expected = ["Word Length: 6", "Word Length: 7", "Word Length: 2", "Word Length: 5", "Word Length: 3"
    ];
    assert.deepEqual(actual, expected);
  });

  it('should return animal types - [ "dog", "fish", "Hamster", "dog"]', () => {
    const actual = map(animals, x => x.type);
    const expected = [ 'dog', 'fish', 'Hamster', 'dog'];
    assert.deepEqual(actual, expected);
  });

  it('should return undefined if the map() function has no arguments map()', () => {
    const actual = map();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should return undefined if the map() function has no function argument - map([1, 2, 3])', () => {
    const actual = map([1, 2, 3]);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
  it('should return undefined if the argument passed is not an array', () => {
    const actual = map('string', x => x < 0);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
