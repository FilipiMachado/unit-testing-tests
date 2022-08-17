//const minus = require('./sum')

/* test('dois mais dois', () => {
  const value = 1.5 + 2;
  console.log(value)
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe e toEqual são equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
}); */

/* test('adicionando floating numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
  expect(value).toBeCloseTo(0.3); // Isso funciona.
}); */

/* test('não existe "I" em team', () => {
  expect('team').not.toMatch(/I/);
})

test('mas existe "stop" em Christopher', () => {
  expect('Christopher').toMatch(/stop/);
}) */

const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  //expect(shoppingList).toContain('leite');
  expect(new Set(shoppingList)).toContain('leite')
})