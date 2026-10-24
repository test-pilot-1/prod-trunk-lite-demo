const { total } = require('./price');
test('adds price times quantity', () => { expect(total([{ price: 2, qty: 3 }, { price: 1, qty: 1 }])).toBe(7); });
