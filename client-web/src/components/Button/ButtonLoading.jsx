import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ButtonLoading.css";
const ButtonLoading = ({ text, onClick, type, disabled = false }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
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
