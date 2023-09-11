import { retornaArreglo, usState } from '../../src/base-pruebas/07-deses-arr';

describe('Test in 07-deses-arr.js', () => {
  test('retornarArreglo debe de retornar un arreglo', () => {
    const [text, number] = retornaArreglo();

    expect(typeof text).toBe('string');
    expect(typeof number).toBe('number');
  });
});
