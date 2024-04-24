const { countOccurrences, countOccurrences2 } = require('./4');

test('Count Occurrences of a Character', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('programming', 'm')).toBe(2);
  expect(countOccurrences('banana', 'a')).toBe(3);
});

test('Count Occurrences of a Character 2', () => {
  expect(countOccurrences2('hello', 'l')).toBe(2);
  expect(countOccurrences2('programming', 'm')).toBe(2);
  expect(countOccurrences2('banana', 'a')).toBe(3);
});
