import React from "react";
import "./meter.scss";
import PropTypes from 'prop-types';

const Meter = ({ meterCount, styleCss = {} }) => {
  return (
    <div className="meter">
      <div
        className="gauge"
        style={{
          width: styleCss.widthGauge,
          background: styleCss.backgroundGauge,
        }}
      />
      <p className="meterCount">{meterCount}</p>
    </div>
  );
};

Meter.propTypes = {
  meterCount: PropTypes.number
}

export default Meter;
