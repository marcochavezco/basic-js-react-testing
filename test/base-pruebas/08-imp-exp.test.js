import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp.js', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 1;

    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe de retornar undefined si el heroe no existe', () => {
    const id = 100;

    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test('getHeoresByOwner debe de regresar un arreglo de heroes', () => {
    const dc = getHeroesByOwner('DC');
    const marvel = getHeroesByOwner('Marvel');

    expect(dc.length).toBe(3);
    expect(marvel.length).toBe(2);

    expect(dc).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);

    expect(marvel).toEqual([
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
      },
    ]);
  });
});
