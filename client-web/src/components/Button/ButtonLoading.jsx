import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ButtonLoading.css";
/**
 * ButtonLoading.jsx
 *
 * `ButtonLoading` is a component that displays a clickable button 
 * which shows a loading spinner for 1 second upon clicking.
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
const ButtonLoading = ({ text, onClick, type, disabled = false }) => {

  // Local state for loading indicator
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles button click. It displays the loading spinner for 1 second
   * and then returns the button to its initial state.
   */
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <button
      className="button__loading"
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {isLoading ? (
        <motion.div
          className="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ) : text}
    </button>
  );
};

export default ButtonLoading;
