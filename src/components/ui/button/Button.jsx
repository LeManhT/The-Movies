import React from "react";
import "./button.scss";

const Button = ({
  styleCss = {
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #000",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "10px",
    fontWeight: "400",
  },
  children = "Component Button",
}) => {
  const {
    width,
    height,
    backgroundColor,
    color,
    border,
    borderRadius,
    padding,
    fontSize,
    fontWeight,
  } = styleCss;
  return (
    <button
      className="button"
      style={{
        width,
        height,
        backgroundColor,
        color,
        border,
        borderRadius,
        padding,
        fontSize,
        fontWeight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
