import PropTypes from 'prop-types';
import { useState } from 'react';

const Searchbar = ({ onChangeQuery }) => {
  const [input, setInput] = useState('');

  const HandleChangeInput = e => {
    setInput(e.currentTarget.value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    onChangeQuery(input);
    setInput('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={HandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={HandleChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};
export default Searchbar;
