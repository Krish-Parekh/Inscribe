import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./ButtonImage.css";
const ButtonImage = ({ text, onClick, type, disabled = false }) => {
  return (
    <button
      className="button__image"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
     <FcGoogle className="button__icon"/> {text}
    </button>
  );
};

export default ButtonImage;
