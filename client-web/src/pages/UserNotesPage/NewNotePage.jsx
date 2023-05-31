import React from "react";
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
      <div className="custom__bottom">
        <div className="color__one color__button"></div>
        <div className="color__two color__button"></div>
        <div className="color__three color__button"></div>
        <div className="color__four color__button"></div>
      </div>
    </div>
  );
};

export default NewNotePage;
