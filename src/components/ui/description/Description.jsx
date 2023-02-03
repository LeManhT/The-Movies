import React from "react";

const Description = ({ title, desc }) => {
  return (
    <>
      {
        title || desc ? <div className="description">
          <strong className="description__title">{title}</strong>
          <p>{desc}</p>
        </div> : null
      }
    </>
  );
};

export default Description;
