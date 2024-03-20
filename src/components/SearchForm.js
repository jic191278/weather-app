import React, { useState } from 'react';

import '../styles/search-form.css';

const SearchForm = ({ handleCitySearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);

    setSearchInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleCitySearch(searchInput);
  };

  return (
    <form className="search-form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search City"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
