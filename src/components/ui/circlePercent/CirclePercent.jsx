import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const CirclePercent = ({ number }) => {
  return (
      <CircularProgressbarWithChildren
        value={number}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#081c22",
          pathColor: (number>60) ? "#1fb96e" : ((number>30) ? "#cdd030" : "#c8225a"),
          trailColor: (number>60) ? "#1d4028" : ((number>30) ? "#3e3b10" : "#4e1533"),
        })}
      >
        <div style={{ fontSize: "13px", color: "white", fontWeight: "600" }}>
          {number}<sup style={{ fontSize: "6px" }}>%</sup>
        </div>
      </CircularProgressbarWithChildren>
  );
};

export default CirclePercent;
