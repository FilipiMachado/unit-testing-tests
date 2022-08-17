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

// EXPECT.EXTEND(MATCHERS)

/* expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    console.log(pass)
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20)
  });
}); */

// ASYNC MATCHERS

expect.extend({
  async toBeDivisibleByExternalValue(received) {
    const externalValue = await 100;
    const pass = received % externalValue == 0;
    console.log(pass)
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

test('is divisible by external value', async () => {
  await expect(100).toBeDivisibleByExternalValue();
  await expect(101).not.toBeDivisibleByExternalValue();
});