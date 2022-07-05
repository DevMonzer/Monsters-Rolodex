import React from "react";
import "./search-box.css";

const SearchBox = ({ placeholder, onChangeJandler, cssClass }) => {
  return (
    <div>
      <input
        className={`search-box ${cssClass}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeJandler}
      />
    </div>
  );
};

export default SearchBox;
