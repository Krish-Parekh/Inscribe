import {
  AppBar,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
  InputAdornment,
  styled,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
const CustomOutlinedInput = styled(OutlinedInput)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
  }
  .MuiOutlinedInput-root {
    border-radius: 16px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-radius: 16px;
  }
`;
const styles = {
  navbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
    color: "inherit",
    paddingBlock: "0.8rem",
  },
  title: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    paddingLeft: "1rem",
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
const NotesNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
          flexGrow={1}
          sx={{ alignItems: "center" }}
        >
          <Typography
            flexGrow={1}
            variant="h5"
            component="div"
            sx={styles.title}
          >
            ✏️ Inscribe
          </Typography>

          <FormControl
            variant="outlined"
            sx={{
              flexGrow: 2,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
            }}
          >
            <InputLabel htmlFor="search">Search</InputLabel>
            <CustomOutlinedInput
              placeholder="Search...."
              id="search"
              label="Search"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Stack
            flexGrow={1}
            direction="row"
            spacing={2}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Tooltip title="Add Note" placement="bottom">
              <IconButton onClick={() => navigate("/add-note")}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings" placement="bottom">
              <IconButton id="settings-button" onClick={toggleOpen}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={document.getElementById("settings-button")}
              open={open}
              onClose={toggleOpen}
            >
              <MenuItem>
                <Typography>Delete All</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NotesNavbar;
