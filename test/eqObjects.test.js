const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// Test Cases
describe("#eqObjects", () => {

  it('Should return true for euqal objects with only primitive data types, same keys where keys are in reverse order - { a: "1", b: "2" } === { b: "2", a: "1" }', () => {
    const actual = eqObjects({ a: "1", b: "2" }, { a: "1", b: "2" });
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('Should return false if there is one more key value pair in one of the objects { a: "1", b: "2" } === { a: "1", b: "2", c: "3" }', () => {
    const actual = eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('Should return false for non equal objects where one value is an emoty object: { a: "1", b: "2" } !== { a: "1", b: {} }', () => {
    const actual = eqObjects({ a: "1", b: "2" }, { a: "1", b: {} });
    const expected = false;
    assert.deepEqual(actual, expected);
  });

  it('Should return false for non equal objects where one value is an array: { a: "1", b: "2" } !== { a: "1", b: {} }', () => {
    const actual = eqObjects({ a: "1", b: [1, 2, []] }, { a: "1", b: [] });
    const expected = false;
    assert.deepEqual(actual, expected);
  });

  it('Should return undefined if no arguements present', () => {
    const actual = eqObjects();
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });

  it('Should return undefined if not an object', () => {
    const actual = eqObjects(1, 2);
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });

  it('Should return undefined if is array instead of object', () => {
    const actual = eqObjects([], []);
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });

  it('Should return true for equal objects with nested objects', () => {
    const actual = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('Should return false - { a: { z: 1 }, b: 2 } !== { a: { z: 1 }, b: { x: 2 } }', () => {
    const actual = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { x: 2 } });
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
