import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Rechercher"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
