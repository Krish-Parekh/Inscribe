import React from "react";
import "./ButtonFilled.css";
const ButtonFilled = ({ text, onClick, type, disabled = false }) => {
  return (
    <button
      className="button__filled"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
