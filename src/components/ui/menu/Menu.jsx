import React from "react";
import "./menu.scss";

const Menu = ({ menuContent, onClick, itemSearchActive, totalResults }) => {
  return (
    <div className="menu__wrapper" style={{ width: "260px" }}>
      <div className="menu__title">
        <h3>Search Results</h3>
      </div>
      <div className="menu__scroll">
        {menuContent &&
          menuContent.map((item, index) => {
            return (
              <li
                key={item.content}
                onClick={() => onClick(item.content)}
                style={
                  item.api === itemSearchActive //category
                    ? { background: "rgba(0,0,0,0.08)" }
                    : {}
                }
              >
                <p>{item.content}</p>
                <span>{totalResults[index]}</span>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
