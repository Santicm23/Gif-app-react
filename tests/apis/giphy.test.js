
import { getGifs } from '../../src/apis';


describe('Pruebas en giphy.js', () => {

  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBeGreaterThan(0);
    
    gifs.forEach(gif => {
      expect(gif).toHaveProperty('id');
      expect(gif).toHaveProperty('title');
      expect(gif).toHaveProperty('url');
    });
  
  });

});