const { reverseString, reverseString2 } = require('./7');

test('Reversing a string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
    expect(reverseString('12345')).toBe('54321');
});

test('Reversing a string', () => {
    expect(reverseString2('Hello')).toBe('olleH');
    expect(reverseString2('JavaScript')).toBe('tpircSavaJ');
    expect(reverseString2('12345')).toBe('54321');
});
