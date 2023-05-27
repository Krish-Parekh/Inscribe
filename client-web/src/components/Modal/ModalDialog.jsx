import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ModalDialog.css";

const backdropVariants = {
  expanded: {
    opacity: 1,
  },
  collapsed: {
    opacity: 0,
  },
};

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
