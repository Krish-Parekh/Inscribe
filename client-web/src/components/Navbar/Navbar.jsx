import React from "react";
import { navbarStyles } from "../../styles/styles";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const Navbar = ({ headerText, buttons = [] }) => {
  return (
    <AppBar position="static" sx={navbarStyles.navbar}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={navbarStyles.title}>
          {headerText}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={navbarStyles.button}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
