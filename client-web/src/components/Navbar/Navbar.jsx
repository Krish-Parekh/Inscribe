import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
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
  drawer: {
    backgroundColor: "var(--tertiary-color)",
    color: "#FFFFFF",
  },
};

const Navbar = ({ handleLoginClick, handleSignupClick }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={styles.title}>
          ✏️ Inscribe
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Button
            variant="outlined"
            sx={styles.button}
            onClick={handleSignupClick}
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            sx={styles.button}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Stack>
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          color="inherit"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <CustomDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          handleLoginClick={handleLoginClick}
          handleSignupClick={handleSignupClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
