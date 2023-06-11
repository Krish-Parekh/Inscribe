import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Stack } from "@mui/material";
import { noteStyles } from "../../styles/styles";
import { BrandStyledTextField } from "../../styles/styles";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
const Note = () => {
  const { noteId } = useParams();
  const userId = localStorage.getItem("userId");
  const [note, setNote] = useState({ title: "", content: "" });
  console.log("NoteId", noteId);
  console.log("UserId", userId);
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`/note/${userId}/${noteId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.data;
        console.log(data);
        setNote({
          title: data.title,
          content: data.content,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [noteId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/note/${userId}/${noteId}`, note, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/note/${userId}/${noteId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const navbar = {
    header: "✏️ Inscribe",
    buttons: [
      { label: "Update", onClick: handleUpdate },
      { label: "Delete", onClick: handleDelete },
    ],
  };
  return (
    <Fragment>
      <Navbar headerText={navbar.header} buttons={navbar.buttons} />
      <Stack direction="column" sx={noteStyles.container} spacing={2}>
        <BrandStyledTextField
          label="Title"
          variant="outlined"
          margin="normal"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <BrandStyledTextField
          label="Content"
          variant="outlined"
          multiline
          name="content"
          value={note.content}
          onChange={handleChange}
          inputProps={{
            style: {
              height: "75vh",
            },
          }}
        />
      </Stack>
    </Fragment>
  );
};

export default Note;
