import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ModalDialog.css";

/**
 * ModalDialog.jsx
 *
 * `ModalDialog` is a component that displays a customizable modal dialog box.
 * It uses framer-motion for animations.
 *
 * Props:
 *  - `children` (node): Content to be rendered inside the modal.
 *  - `isOpen` (bool): A flag indicating if the modal is open or not.
 *  - `onClose` (function): A function to close the modal.
 *
 * @param {Object} props - Properties passed to component
 * @param {React.ReactNode} props.children - Content to render in the modal
 * @param {boolean} props.isOpen - Flag for modal's open state
 * @param {Function} props.onClose - Function to close the modal
 */

// Variants for framer-motion to handle the backdrop animation
const backdropVariants = {
  expanded: {
    opacity: 1,
  },
  collapsed: {
    opacity: 0,
  },
};

// Variants for framer-motion to handle the modal animation
const modalVariants = {
  expanded: {
    x: "-50%",
    y: "-50%",
  },
  collapsed: {
    x: "-50%",
    y: "-100vh",
  },
};

const ModalDialog = ({ children, isOpen, onClose }) => {
  /*
  // Handle Escape button press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  */
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={{ type: "spring", stiffness: 60, damping: 10 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalDialog;
