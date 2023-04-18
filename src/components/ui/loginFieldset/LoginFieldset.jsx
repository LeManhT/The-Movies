import React from "react";
import './loginFieldset.scss';

const LoginFieldset = ({titleField,placeholder,fieldIdentity}) => {
  return (
    <label className="form-field" htmlFor={`${fieldIdentity}`}>
      <span>{titleField}</span>
      <input
        className="form-text"
        type="text"
        id={`${fieldIdentity}`}
        name={`${fieldIdentity}`}
        placeholder={`${placeholder}`}
      />
    </label>
  );
};

export default LoginFieldset;
