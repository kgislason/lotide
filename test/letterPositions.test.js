const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');


// const exampleString2 = "only";

// console.log(letterPositions(exampleString));
// console.log(letterPositions(exampleString)["l"]);
// console.log(letterPositions(exampleString2)["l"]);

// // Test
// assertEqual(letterPositions(exampleString)["l"].length, [0].length);
// assertArraysEqual(letterPositions(exampleString)["l"], [0]);
// assertArraysEqual(letterPositions(exampleString2)["l"], [2]);

// Expected Outcome
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

describe("#letterPositions", () => {
  it('should return an object with each letter as key and array of positions l: [0]...', () => {
    const actual = letterPositions("Lighthouse in the house");
    const expected = {
      L: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(actual, expected);
  });
  it('Should return undefined if no arguments are passed to the function', () => {
    const actual = letterPositions();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined if another data type is entered such as a number. Must be a string.', () => {
    const actual = letterPositions(1234567);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
  it('Should not record a space as a key in the object', () => {
    const actual = letterPositions("My name");
    const expected = {
      M: [0],
      y: [1],
      ' ': [2],
      n: [3],
      a: [4],
      m: [5],
      e: [6]
    };
    assert.notDeepEqual(actual, expected);
    assert.notStrictEqual(actual[3], expected[" "]);
  });
});