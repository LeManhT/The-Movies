import React from "react";
import "./toolTip.scss";
const ToolTip = ({ children }) => {
  return (
    <div className="tooltip" >
      <span>{children}</span>
    </div>
  );
};

export default ToolTip;
