import React from "react";

import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <section className="SearchBoxSection">
      <input
        type="search"
        className="SearchBox"
        placeholder="Rechercher"
        onChange={searchChange}
      />
    </section>
  );
};

export default SearchBox;
