import React from "react";
import "./NoteCard.css";
import { RiDeleteBin5Line } from "react-icons/ri";
const NoteCard = ({ date, title, content }) => {
  return (
    <div className="note__card">
      <section className="note__card__header">
        <h6 className="timestamp"> {date} </h6>
        <div className="note__card__cta">
          <input type="checkbox" className="note__card__checkbox" />
          <i className="icon__note__delete">
            <RiDeleteBin5Line />
          </i>
        </div>
      </section>
      <section className="note__card__body">
        <h3 className="note__card__title">{title}</h3>
        <p className="note__card__content">{content}</p>
      </section>
    </div>
  );
};

export default NoteCard;
