
import { useState } from 'react';
import PropTypes from 'prop-types';


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
    <form onSubmit={ submit } aria-label='form'>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ changeInput }
      />
    </form>
  );
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};
