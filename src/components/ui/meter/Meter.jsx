import React from "react";
import "./meter.scss";

const Meter = ({ meterCount, styleCss = {} }) => {
  return (
    <div className="meter">
      <div
        className="gauge"
        style={{
          width: styleCss.widthGauge,
          backgroundColor: styleCss.backgroundGauge,
        }}
      />
      <p className="meterCount">{meterCount}</p>
    </div>
  );
};

export default Meter;
