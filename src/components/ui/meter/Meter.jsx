import React from "react";
import "./meter.scss";
import PropTypes from 'prop-types';

const Meter = ({ meterCount }) => {
  return (
    <div className="meter">
      <div className="gauge"></div>
      <h4 className="meterCount">{meterCount}</h4>
    </div>
  );
};

Meter.propTypes = {
  meterCount: PropTypes.number
}

export default Meter;
