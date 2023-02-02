import React from "react";
import "./meter.scss";

const Meter = ({ meterCount }) => {
  return (
    <div className="meter">
      <div className="gauge"></div>
      <h4 className="meterCount">{meterCount}</h4>
    </div>
  );
};

export default Meter;
