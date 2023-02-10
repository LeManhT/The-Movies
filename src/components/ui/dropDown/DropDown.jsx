import React from "react";
import "./dropDown.scss";
import PropTypes from 'prop-types';

const DropDown = ({ children }) => {
  console.log(children)
  return (
    <>
      {children ? (
        <div className="dropDownContainer">
          <ul className="dropDown">
            {children.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

DropDown.propTypes = {
  children: PropTypes.node
}


export default DropDown;
