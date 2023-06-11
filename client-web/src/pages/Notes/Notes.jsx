import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import NotesNavbar from "../../components/Navbar/NotesNavbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import axios from "../../utils/axios";

const Notes = () => {
  const userId = localStorage.getItem("userId");
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/note/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.data;
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  const deleteNote = async (id) => {
    try {
      console.log(id);
      const userId = localStorage.getItem("userId");
      await axios.delete(`/note/${userId}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAll = async () => {
    try {
      await axios.delete(`/note/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Deleted all notes");
      setNotes([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Stack spacing={2}>
      <NotesNavbar handleSearch={handleSearch} deleteAll={deleteAll}/>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        sx={{ padding: "16px" }}
        useFlexGap
        flexWrap="wrap"
      >
        {filteredNotes.map((note) => (
          <NoteCard
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            timestamp={note.createdAt}
            deleteNote={deleteNote}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Notes;
