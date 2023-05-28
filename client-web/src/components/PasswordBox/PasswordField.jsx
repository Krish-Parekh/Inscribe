import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./PasswordField.css"
const PasswordField = ({ type, value, onChange, placeholder, name, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className="input__field">
      <div className="password__container">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={`input ${error && "input__error"}`}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible className="password__icon" onClick={togglePassword} />
        ) : (
          <AiOutlineEye className="password__icon" onClick={togglePassword} />
        )}
      </div>
      {error && <p className="error__message">{error}</p>}
    </div>
  );
};

export default PasswordField;
