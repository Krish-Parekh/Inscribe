import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./ButtonImage.css";
/**
 * ButtonImage.jsx
 *
 * `ButtonImage` is a component that displays a clickable button with an icon.
 *
 * Props:
 *  - `text` (string): Text to display in the button.
 *  - `onClick` (function): Function to execute when the button is clicked.
 *  - `type` (string): The type of the button. Could be "button", "submit", or "reset".
 *  - `disabled` (boolean, default = false): If `true`, the button will be disabled.
 *
 * @param {Object} props - Properties passed to component
 * @param {string} props.text - Button label
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.type - Button type
 * @param {boolean} [props.disabled=false] - Indicator whether button is disabled
 */
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
