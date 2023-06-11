import React, { Fragment } from "react";
import { Stack, TextField, styled } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { inputFieldStyles } from "../../styles/styles";
const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
    font-size: 1.2rem;
  }
`;

const AddNotes = () => {
  const handleSave = () => {
    console.log("Save");
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
        <input type="text" placeholder="Title" style={inputFieldStyles.title} />
        <textarea
          type="text"
          placeholder="Content"
          style={inputFieldStyles.content}
        />
      </Stack>
    </Fragment>
  );
};

export default AddNotes;
