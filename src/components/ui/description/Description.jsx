import React from "react";
import PropTypes from 'prop-types';

const Description = ({ title, desc, style = {}, children }) => {
  return (
    <>
      {
        title || desc ? <div className="description">
          <strong className="description__title" style={style ? { "fontSize": style.fontSize } : { "fontSize": "18px" }}>{title}</strong>
          {children}
          {desc ? <p>{desc}</p> : null}
        </div> : null
      }
    </>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Description;
