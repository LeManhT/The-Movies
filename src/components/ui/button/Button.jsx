import React from "react";
import "./button.scss";

const Button = ({
  width,
  height,
  background,
  // hoverBackground,
  color,
  border,
  borderRadius,
  padding,
  children,
  fontSize,
  fontWeight
}) => {
  return (
    <button
      className="button"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: background,
        // hoverBackground:  hoverBackground,
        color: color,
        border: border,
        borderRadius: borderRadius,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
    >
      {children}
    </button>
  );
};

export default Button;
