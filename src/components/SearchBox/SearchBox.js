import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <div className="search-box">
      <input type="search" placeholder={placeholder} onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
