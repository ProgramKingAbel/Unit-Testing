const calculator = require('./calculator.js');

describe('operations', () => {
    test('add 2 and 2 toBe 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    test('subtract 2 and 2 toBe 0', () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    });
    test('multiply 2 and 2 toBe 4', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });
    test('divide 2 and 2 toBe 1', () => {
        expect(calculator.divide(2, 2)).toBe(1);
    });
});