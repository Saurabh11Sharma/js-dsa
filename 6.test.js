const { titleCase, titleCase2 } = require('./6');

test('Converting string to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
    expect(titleCase('javascript programming')).toBe('Javascript Programming');
    expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
});

test('Converting string to title case', () => {
    expect(titleCase2('hello world')).toBe('Hello World');
    expect(titleCase2('javascript programming')).toBe('Javascript Programming');
    expect(titleCase2('openai chatbot')).toBe('Openai Chatbot');
});
