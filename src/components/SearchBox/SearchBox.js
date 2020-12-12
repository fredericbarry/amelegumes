import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div className="search-box">
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
