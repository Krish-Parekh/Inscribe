import React from "react";
import "./ButtonOutlined.css";
const ButtonOutlined = ({ text, onClick, type, disabled = false }) => {
  return (
    <button
      className="button__outlined"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonOutlined;
