const functions = require('./index.js');

test('counts string length', () => {
    expect(functions.stringLength('Abel')).toBe(4);
})

test('length > 0', () => {
    expect(functions.stringLength('Abel')).toBeGreaterThan(0);
})

test('length < 10', () => {
    expect(functions.stringLength('Abel')).toBeLessThan(10);
})

test('Reverse String', ()  => {
    expect(functions.reverseString('Abel')).toEqual('lebA');
})