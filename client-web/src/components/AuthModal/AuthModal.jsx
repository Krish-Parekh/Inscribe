import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  SlideUpTransition,
  BrandStyledTextField,
  BrandStyledOutlinedInput,
  authModalStyles,
} from "../../styles/styles";

const AuthModal = ({ open, handleClose, isSignup = true }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="sm"
      TransitionComponent={SlideUpTransition}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={authModalStyles.title}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} spacing={3} sx={authModalStyles.container}>
          {isSignup && (
            <BrandStyledTextField
              label="Username"
              variant="outlined"
              fullWidth={true}
            />
          )}
          <BrandStyledTextField
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <FormControl variant="outlined">
            <InputLabel sx={authModalStyles.label} htmlFor="password">
              Password
            </InputLabel>
            <BrandStyledOutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={togglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={authModalStyles.passwordField}
            />
          </FormControl>
          <Button
            sx={authModalStyles.button}
            variant="contained"
            fullWidth={true}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
