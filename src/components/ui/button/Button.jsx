import React from "react";
import "./button.scss";

const Button = ({
  width,
  height,
  background,
  color,
  border,
  borderRadius,
  padding,
  fontSize,
  fontWeight,
  children,
}) => {
  return (
    <button
      className="button"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: background,
        color: color,
        border: border,
        borderRadius: borderRadius,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
