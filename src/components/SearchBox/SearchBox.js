import React from "react";

import IconSearch from "../../icons/IconSearch";

import "./SearchBox.scss";

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div className="search-box">
      <IconSearch />
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
