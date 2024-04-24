const { findMaxNumber, findMaxNumber2, findMaxNumber3, findMaxNumber4 } = require('./5');

test('Finding the maximum number in an array', () => {
  expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
});

test('Finding the maximum number in an array 2', () => {
  expect(findMaxNumber2([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber2([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber2([10, 10, 10, 10])).toBe(10);
});

test('Finding the maximum number in an array 3', () => {
  expect(findMaxNumber3([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber3([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber3([10, 10, 10, 10])).toBe(10);
});

test('Finding the maximum number in an array 4', () => {
  expect(findMaxNumber4([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber4([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber4([10, 10, 10, 10])).toBe(10);
});