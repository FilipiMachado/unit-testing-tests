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

/* const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras não tem "requeijão" nela', () => {
  expect(shoppingList).not.toContain('requeijão');
  //expect(new Set(shoppingList)).toContain('leite')
}) */

/* function compileAndroidCode() {
  throw new Error('você está usando o JDK errado')
}

test('compilando para android segue conforme esperado', () => {
  //expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  //Você também pode usar a mensagem exata de error ou uma regexp
    //expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado')
    //expect(() => compileAndroidCode()).toThrow(/JDK/)
}) */

/* function bestWineFlavor(a) {
  console.log(a)
  return a
}

test('the best wine flavor is white grape', () => {
  expect(bestWineFlavor('white grape')).toBe('white grape')
}) */

