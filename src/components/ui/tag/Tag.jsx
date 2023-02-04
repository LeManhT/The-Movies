import React from "react";
import "./tag.scss";
import PropTypes from 'prop-types';

const Tag = ({ tagContent, color }) => {
  return (
    <div className="tag">
      <span style={{ color: { color } }}>{tagContent}</span>
    </div>
  );
};

Tag.propTypes = {
  tagContent: PropTypes.string
}
export default Tag;
