const sum = require('./sum')

test('adds 1 + 2 + 3 not to equal 5', () => {
  expect(sum(1, 2, 3)).not.toBe(5)
})