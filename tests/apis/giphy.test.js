
describe('Pruebas en giphy.js', () => {

  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  
  });

});