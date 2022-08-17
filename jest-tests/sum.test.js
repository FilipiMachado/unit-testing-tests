const sum = require('./sum')

test('adds (1 + 2) - 3 to equal 0', () => {
  expect(sum(1, 2, 3)).toBe(0)
})