import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const styles = {
  navbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
    color: "inherit",
  },
  title: {
    flexGrow: 1,
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
  },
  button: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    borderColor: "var(--tertiary-color)",
    color: "var(--tertiary-color)",
  },
};

const NoteNavbar = ({ handleUpdateNote, handleDeleteNote }) => {
  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={styles.title}>
          ✏️ Inscribe
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button variant="outlined" sx={styles.button} onClick={handleUpdateNote}>
            Update
          </Button>
          <Button variant="outlined" sx={styles.button} onClick={handleDeleteNote}>
            Delete
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NoteNavbar;
