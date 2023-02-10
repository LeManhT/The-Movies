import React from "react";
import "./searchinput.scss";
const SearchInput = ({ onClick }) => {
  return (
    <div className="search__input">
      <div className="wrapper-input">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          onKeyDown={onClick}
          type="text"
          placeholder="Search for a movie, tvshow, person,..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
