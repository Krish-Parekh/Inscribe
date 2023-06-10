import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
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

const AddNotesNavbar = ({ handleAddNote }) => {
  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={styles.title}>
          ✏️ Inscribe
        </Typography>
        <Button
          variant="outlined"
          sx={styles.button}
          onClick={handleAddNote}
        >
          Save
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AddNotesNavbar;
