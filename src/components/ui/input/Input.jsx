import React from "react";
import "./input.scss";

const Input = ({
  type,
  placeholder,
  styleCss = {},
  btnInput,
  nameBtnInput,
  value,
  onChange,
}) => {
  return (
    <div
      className="input__block"
      style={{
        width: styleCss.width,
        height: styleCss.height,
        border: styleCss.border,
        borderRadius: styleCss.borderRadius,
      }}
    >
      <input
        className="input__content"
        type={type}
        placeholder={placeholder}
        style={{
          fontSize: styleCss.fontSizeInput,
          padding: styleCss.paddingInput,
          color: styleCss.colorInput,
        }}
        value={value}
        onChange={onChange}
      />
      {/* {msgValidate && <p>{msgValidate}</p>} */}
      {btnInput && (
        <div className="input__btn-block">
          <div className="input__btn">{nameBtnInput}</div>
        </div>
      )}
    </div>
  );
};

export default Input;
