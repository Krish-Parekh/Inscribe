import React from "react";
import "./ButtonFilled.css";
/**
 * ButtonFilled.jsx
 *
 * `ButtonFilled` is a component that displays a clickable button with a filled background.
 * 
 *  Props:
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
