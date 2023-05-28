import React from "react";
import "./ButtonOutlined.css";

/**
 * ButtonOutlined.jsx
 *
 * `ButtonOutlined` is a component that displays a clickable, outlined button.
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
