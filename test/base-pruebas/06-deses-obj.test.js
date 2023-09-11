import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Test in 06-deses-obj.js', () => {
  test('usContext should return and object', () => {
    const persona = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
    };

    const {
      nombreClave,
      anios,
      latlng: { lat, lng },
    } = usContext(persona);

    expect(nombreClave).toBe('Ironman');
    expect(anios).toBe(45);
    expect(lat).toBe(14.1232);
    expect(lng).toBe(-12.3232);
  });
});
