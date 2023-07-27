
import { render, screen, fireEvent } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

  test('Debe de mostrar <GifExpertApp /> correctamente', () => {

    render(<GifExpertApp />);

    expect(screen.getByText('GifExpertApp'));

  });

  test('Debe de mostrar una lista de categorias con una por defecto', () => {
    
    render(<GifExpertApp />);

    expect(screen.getAllByRole('heading').filter((el) => {
      for (const key in el) {
        if (el[key].type)
          return el[key].type === 'h3';
      }
    })).toHaveLength(1);

  });

  test('Debe de mostrar la cantidad de categorias que se le pasen', () => {

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'Overwatch' } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: 'Avatar' } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: 'Demon slayer' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading').filter((el) => {
      for (const key in el) {
        if (el[key].type)
          return el[key].type === 'h3';
      }
    })).toHaveLength(4);

  });

  test('No debe de mostrarse 2 veces la misma categoria', () => {

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'Overwatch' } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: 'Overwatch' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading').filter((el) => {
      for (const key in el) {
        if (el[key].type)
          return el[key].type === 'h3';
      }
    })).toHaveLength(2);

  });

});