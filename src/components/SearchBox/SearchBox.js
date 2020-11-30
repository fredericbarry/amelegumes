import React from "react";

import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type="search"
      className="SearchBox"
      placeholder="Rechercher"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
