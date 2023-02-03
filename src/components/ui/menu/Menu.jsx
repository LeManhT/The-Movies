import React from "react";
import "./menu.scss";
const Menu = ({ menuContent }) => {
  return (
    <div className="menu__wrapper" style={{ width: "260px" }}>
      <div className="menu__title">
        <h3>Search Results</h3>
      </div>
      <div className="menu__scroll">
        {menuContent &&
          menuContent.map((item) => {
            return (
              <li key={item.content}>
                <p>{item.content}</p>
                <span>{item.quantity}</span>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
