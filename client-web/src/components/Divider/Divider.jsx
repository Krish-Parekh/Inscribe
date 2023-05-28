import React from "react";
import "./Divider.css";

const Divider = ({ text }) => {
  return (
    <div className="divider">
      <hr className="left" />
      <p className="divider__text">{text}</p>
      <hr className="right" />
    </div>
  );
};

export default Divider;
