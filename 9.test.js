const { countVowels, countVowels2 } = require('./9');

test('Counting vowels in a string', () => {
  expect(countVowels('Hello, World!')).toBe(3);
  expect(countVowels('JavaScript')).toBe(3);
  expect(countVowels('OpenAI Chatbot')).toBe(6);
  expect(countVowels('Coding Challenge')).toBe(5);
});

test('Counting vowels in a string', () => {
  expect(countVowels2('Hello, World!')).toBe(3);
  expect(countVowels2('JavaScript')).toBe(3);
  expect(countVowels2('OpenAI Chatbot')).toBe(6);
  expect(countVowels2('Coding Challenge')).toBe(5);
});
