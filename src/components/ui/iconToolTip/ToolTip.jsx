import React from "react";
import "./toolTip.scss";
const ToolTip = ({ children }) => {
  return (
    <li className="tooltip">
      <span>{children}</span>
    </li>
  );
};

export default ToolTip;
