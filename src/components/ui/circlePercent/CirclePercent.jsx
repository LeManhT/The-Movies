import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import PropTypes from 'prop-types';

const CirclePercent = ({ number = 40 }) => {
  return (
    <CircularProgressbarWithChildren
      value={number}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#081c22",
        pathColor:
          number > 70 ? "#1fb96e" : number > 40 ? "#cdd030" : "#c8225a",
        trailColor:
          number > 70 ? "#1d4028" : number > 40 ? "#3e3b10" : "#4e1533",
      })}
    >
      <div style={{ fontSize: "13px", color: "white", fontWeight: "600" }}>
        {number}
        <sup style={{ fontSize: "6px" }}>%</sup>
      </div>
    </CircularProgressbarWithChildren>
  );
};

CirclePercent.propTypes = {
  number: PropTypes.number
}

export default CirclePercent;
