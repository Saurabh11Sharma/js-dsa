const helloWorld = require('./1');

test('helloWorld returns the correct string', () => {
  expect(helloWorld()).toBe('Hello World!');
});
