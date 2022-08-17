//const minus = require('./sum')

test('dois mais dois', () => {
  const value = 1.5 + 2;
  console.log(value)
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  //expect(value).toBeLessThan(5);
  //expect(value).toBeLessThanOrEqual(4.5);

  // toBe e toEqual são equivalentes para números
  //expect(value).toBe(4);
  //expect(value).toEqual(4);
});