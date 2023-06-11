import React, { Fragment, useState } from "react";
import { Stack } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { inputFieldStyles } from "../../styles/styles";
import axios from "../../utils/axios";

const AddNotes = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = axios.post("/note/create", { ...note, userId }, config);
      const data = await res.data;
      setNote({ title: "", content: "" });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navbar = {
    header: "📝 Add Note",
    buttons: [{ label: "Save", onClick: handleSave }],
  };
  return (
    <Fragment>
      <Navbar headerText={navbar.header} buttons={navbar.buttons} />
      <Stack
        direction="column"
        height="100vh"
        sx={{ padding: "16px" }}
        spacing={2}
      >
        <input
          id="title"
          value={note.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          style={inputFieldStyles.title}
        />
        <textarea
          id="content"
          value={note.content}
          onChange={handleChange}
          name="content"
          type="text"
          placeholder="Content"
          style={inputFieldStyles.content}
        />
      </Stack>
    </Fragment>
  );
};

export default AddNotes;
