
import { useState } from 'react';


export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const changeInput = ({ target }) => setInputValue(target.value);

  const submit = (e) => {
    e.preventDefault();

    const category = inputValue.trim();

    if (category.length === 0) return;
    
    onAddCategory(category);
    setInputValue('');
  };

  return (
    <form onSubmit={ submit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ changeInput }
      />
    </form>
  );
}
