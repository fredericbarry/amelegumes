import React from "react";

import "./SearchInput.scss";

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div className="search-input">
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
