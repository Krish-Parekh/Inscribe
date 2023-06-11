import {
  AppBar,
  FormControl,
  Stack,
  Toolbar,
  Typography,
  InputLabel,
  InputAdornment,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  navbarStyles,
  noteNavbarStyles,
  BrandStyledOutlinedInput,
} from "../../styles/styles";
import { useNavigate } from "react-router-dom";
const NotesNavbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAddNote = () => {
    navigate("/note/add");
  };
  return (
    <AppBar position="static" sx={navbarStyles.navbar}>
      <Toolbar>
        <Stack direction="row" spacing={2} sx={noteNavbarStyles.container}>
          <Typography variant="h5" component="div" sx={noteNavbarStyles.title}>
            ✏️ Inscribe
          </Typography>
          <FormControl variant="outlined" sx={noteNavbarStyles.formControl}>
            <InputLabel htmlFor="search" sx={noteNavbarStyles.label}>
              Search
            </InputLabel>
            <BrandStyledOutlinedInput
              placeholder="Search..."
              id="search"
              label="Search"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              sx={noteNavbarStyles.searchField}
            />
          </FormControl>
          <Stack direction={"row"} sx={noteNavbarStyles.buttonContainer}>
            <Tooltip title="Add Note">
              <IconButton onClick={handleAddNote}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton id="settings-button" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorEl} open={open}>
              <MenuItem onClick={handleClose}>
                <Typography sx={noteNavbarStyles.title}>Delete All</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NotesNavbar;
