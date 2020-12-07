import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder={placeholder}
      onChange={searchChange}
    />
  );
};

export default SearchBox;
