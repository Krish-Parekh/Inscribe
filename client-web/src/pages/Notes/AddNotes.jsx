import React from "react";
import AddNotesNavbar from "../../components/Navbar/AddNotesNavbar";
import { Stack, TextField, styled } from "@mui/material";
const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
    font-size: 1.2rem;
  }
`;
const AddNotes = () => {
  return (
    <Stack direction="column" height="100vh" sx={{ padding: "16px" }} spacing={2}>
      <AddNotesNavbar />
      <CustomTextField label="Title" variant="outlined" margin="normal" />
      <CustomTextField
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
  );
};

export default AddNotes;
