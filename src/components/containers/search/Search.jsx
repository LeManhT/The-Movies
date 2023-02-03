import React from "react";
import Menu from "../../ui/menu/Menu";
import "./search.scss";

const Search = () => {
  return (
    <div>
      <div className="search">
        <div className="search__input"></div>
        <div className="search__container">
          <div className="container_results">
            <Menu
              menuContent={[
                { content: "Movies", quantity: 2 },
                { content: "TV Shows", quantity: 2 },
                { content: "People", quantity: 2 },
                { content: "Networks", quantity: 2 },
                { content: "Companies", quantity: 2 },
                { content: "Keywords", quantity: 2 },
                { content: "Collections", quantity: 2 },
              ]}
            />
          </div>
          <div className="container_list">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
