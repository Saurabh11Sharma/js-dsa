const getSum = require('./2');

it('getSum returns the correct sum', () => {
    expect(getSum(2, 3)).toBe(5);
});

it('getSum returns the correct sum', () => {
    expect(getSum(0, 0)).toBe(0);
});

it('getSum returns the correct sum', () => {
    expect(getSum(-1, 1)).toBe(0);
});
