import React from "react";
import "./InputField.css";
const InputField = ({ type, value, onChange, placeholder, name, error }) => {
  return (
    <div className="input__field">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`input ${error && "input__error"}`}
      />
      {error && <p className="error__message">{error}</p>}
    </div>
  );
};

export default InputField;
