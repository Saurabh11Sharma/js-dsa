const calculator = require('./3');

test('return the sum of numbers', () => {
    expect(calculator(1, 2, '+')).toBe(3);
});

test('return the subtraction of numbers', () => {
    expect(calculator(1, 2, '-')).toBe(-1);
});

test('return the multiplication of numbers', () => {
    expect(calculator(1, 2, '*')).toBe(2);
});

test('return the division of numbers', () => {
    expect(calculator(1, 2, '/')).toBe(0.5);
});

test('return error when division by zero', () => {
    expect(calculator(1, 0, '/')).toBe('Cannot divide by Zero!');
});

test('return invalid operation', () => {
    expect(calculator(1, 2, '=')).toBe('Invalid Operator!')
})
