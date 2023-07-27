
import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks';


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'Saitama';

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={ category }/>);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  });

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Cualquier cosa1',
        url: 'https://localhost/cualquier/cosa1.gif'
      },
      {
        id: '123',
        title: 'Cualquier cosa2',
        url: 'https://localhost/cualquier/cosa2.gif'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    });
    render(<GifGrid category={ category }/>);

    expect(screen.getAllByRole('img')).toHaveLength(gifs.length);

  });

});