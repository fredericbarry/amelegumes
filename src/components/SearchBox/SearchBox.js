import React from "react";

import IconSearch from "../../icons/IconSearch";

import "./SearchBox.scss";

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div className="search-box">
      <IconSearch width="1.25rem" height="1.25rem" />
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
