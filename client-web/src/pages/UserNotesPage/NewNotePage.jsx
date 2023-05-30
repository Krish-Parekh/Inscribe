import React, { useState } from "react";
import { RiDeleteBin5Line, RiCheckLine } from "react-icons/ri";
import "./NewNotePage.css";

const NewNotePage = () => {
  return (
    <div className="new-notes__wrapper">
      <div className="input__container">
        <input type="text" placeholder="Title" className="input__title"/>
        <div className="icon__container">
          <RiDeleteBin5Line className="input__icon"/>
          <RiCheckLine className="input__icon"/>
        </div>
      </div>
      <textarea placeholder="Start writing here!!!" className="input__content"/>
    </div>
  );
};

export default NewNotePage;
