import { Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import NotesNavbar from "../../components/Navbar/NotesNavbar";
import NoteCard from "../../components/NoteCard/NoteCard";

const notes = [
  {
    id: 1,
    title: "Note 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam a explicabo neque dignissimos obcaecati dolores distinctio veritatis omnis accusamus officiis optio corrupti magni pariatur est soluta veniam consequuntur, totam quibusdam!",
    timestamp: "23, Sep 2023",
  },
  {
    id: 2,
    title: "Note 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam a explicabo neque dignissimos obcaecati dolores distinctio veritatis omnis accusamus officiis optio corrupti magni pariatur est soluta veniam consequuntur, totam quibusdam!",
    timestamp: "23, Sep 2023",
  },
  {
    id: 3,
    title: "Note 3",
    content: "This is the content of note 3",
    timestamp: "23, Sep 2023",
  },
  {
    id: 4,
    title: "Note 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam a explicabo neque dignissimos obcaecati dolores distinctio veritatis omnis accusamus officiis optio corrupti magni pariatur est soluta veniam consequuntur, totam quibusdam!",
    timestamp: "23, Sep 2023",
  },
  {
    id: 5,
    title: "Note 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam a explicabo neque dignissimos obcaecati dolores distinctio veritatis omnis accusamus officiis optio corrupti magni pariatur est soluta veniam consequuntur, totam quibusdam!",
    timestamp: "23, Sep 2023",
  },
]
const Notes = () => {
  return (
    <Fragment>
      <Stack spacing={2}>
        <NotesNavbar />
        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ padding: "16px" }} useFlexGap  flexWrap="wrap" >
          {
            notes.map((note) => (
              <NoteCard key={note.id} id={note.id} title={note.title} content={note.content} timestamp={note.timestamp} />
            ))
          }
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Notes;
