import React from "react";
import "./menu.scss";
import PropTypes from 'prop-types';

const Menu = ({ menuContent }) => {
  return (
    <div className="menu__wrapper" style={{ width: "260px" }}>
      <div className="menu__title">
        <h3>Search Results</h3>
      </div>
      <div className="menu__scroll">
        {menuContent && menuContent.map((item) => {
          return (
            <li>
              <p>{item.content} </p>
              <span>{item.quantity}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuContent: PropTypes.array
}

export default Menu;
