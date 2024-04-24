const { isPalindrome, isPalindrome2 } = require('./8');

test('Checking for palindrome strings', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('Hello')).toBe(false);
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindrome('12321')).toBe(true);
});

test('Checking for palindrome strings', () => {
  expect(isPalindrome2('racecar')).toBe(true);
  expect(isPalindrome2('Hello')).toBe(false);
  expect(isPalindrome2('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindrome2('12321')).toBe(true);
});