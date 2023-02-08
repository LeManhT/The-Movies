import React from "react";
import "./toolTip.scss";
import PropTypes from 'prop-types';

const ToolTip = ({ children }) => {
  return (
    <div className="tooltip" >
      <span>{children}</span>
    </div>
  );
};
ToolTip.propTypes = {
  children: PropTypes.node
}
export default ToolTip;
