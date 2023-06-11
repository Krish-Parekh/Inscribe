import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Stack } from "@mui/material";
import { noteStyles } from "../../styles/styles";
import { BrandStyledTextField } from "../../styles/styles";
const Note = () => {
  const handleUpdate = () => {
    console.log("Update");
  };
  const handleDelete = () => {
    console.log("Delete");
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
        <BrandStyledTextField label="Title" variant="outlined" margin="normal" />
        <BrandStyledTextField
          label="Content"
          variant="outlined"
          multiline
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
