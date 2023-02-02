import React from "react";
import "./dropDown.scss";

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

export default DropDown;
