import React from "react";

const Description = ({ title, desc, style = {} }) => {
  return (
    <>
      {
        title || desc ? <div className="description">
          <strong className="description__title" style={style ? { "fontSize": style.fontSize } : { "fontSize": "18px" }}>{title}</strong>
          <p>{desc}</p>
        </div> : null
      }
    </>
  );
};

export default Description;
