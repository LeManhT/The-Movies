import React from "react";
import "./tag.scss";

const Tag = ({ tagContent, color }) => {
  return (
    <li className="tag">
      <span style={{ color: { color } }}>{tagContent}</span>
    </li>
  );
};

export default Tag;
