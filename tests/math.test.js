const math = require('../math')

test('soma 2 + 3 igual a 5', () => {
    expect(math.soma(2,3)).toBe(5);
})
test('sub 3 - 2 igual a 1', () => {
    expect(math.sub(3,2)).toBe(1);
})
test('div 3 / 3 igual a 5', () => {
    expect(math.div(3,3)).toBe(1);
})
test('mult 1 * 3 igual a 5', () => {
    expect(math.mult(1,3)).toBe(3);
})