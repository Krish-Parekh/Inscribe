import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import SearchField from "../../components/InputBox/SearchField";
import "./NotesPage.css";
import NoteCard from "../../components/NoteCard/NoteCard";

const notes = [
  {
    id: 1,
    title: "Note 1",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, exercitationem animi cum fuga nemo eligendi assumenda in illum doloremque at unde amet, quod sunt dolorem! Nostrum magnam accusamus repudiandae saepe.",
    date: "2021-05-01",
  },
  {
    id: 2,
    title: "Note 2",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, exercitationem animi cum fuga nemo eligendi assumenda in illum doloremque at unde amet, quod sunt dolorem! Nostrum magnam accusamus repudiandae saepe.",
    date: "2021-05-02",
  },
  {
    id: 3,
    title: "Note 3",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, exercitationem animi cum fuga nemo eligendi assumenda in illum doloremque at unde amet, quod sunt dolorem! Nostrum magnam accusamus repudiandae saepe.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, exercitationem animi cum fuga nemo eligendi assumenda in illum doloremque at unde amet, quod sunt dolorem! Nostrum magnam accusamus repudiandae saepe. ",
    date: "2021-05-03",
  },
  {
    id: 4,
    title: "Note 4",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, exercitationem animi cum fuga nemo eligendi assumenda in illum doloremque at unde amet, quod sunt dolorem! Nostrum magnam accusamus repudiandae saepe.",
    date: "2021-05-04",
  }
];

const NotesPage = () => {
  return (
    <div className="notes__wrapper">
      <section className="header">
        <h1 className="header__title">📝 Notes</h1>
        <i className="header__icon">
          <BiDotsVertical />
        </i>
      </section>
      <SearchField />
      <section className="notes__container">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
          />
        ))}
      </section>
    </div>
  );
};

export default NotesPage;
