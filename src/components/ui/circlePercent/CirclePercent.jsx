import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const CirclePercent = ({ number, colorPrimary, colorSecondary }) => {
  return (
      <CircularProgressbarWithChildren
        value={number}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#081c22",
          pathColor: colorPrimary,
          trailColor: colorSecondary,
        })}
      >
        <div style={{ fontSize: "13px", color: "white", fontWeight: "600" }}>
          {number}<sup style={{ fontSize: "6px" }}>%</sup>
        </div>
      </CircularProgressbarWithChildren>
  );
};

export default CirclePercent;
