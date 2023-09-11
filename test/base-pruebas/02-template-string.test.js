import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas de 02-template-string', () => {
  test('Debe de regresar "Hola Marco"', () => {
    const name = 'Marco';

    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
