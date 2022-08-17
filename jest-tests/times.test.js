const times = require('./times');

test('5 times 5 to equal 25', () => {
  expect(times(5, 5)).toBe(25);
});