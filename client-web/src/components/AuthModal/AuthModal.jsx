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
  Alert,
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

import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ open, handleClose, isSignup }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [authState, setAuthState] = useState({
    severity: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post("/auth/login", input);
      const data = await res.data;
      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        setAuthState({ severity: "success", message: "Login Successful" });
        setInput({ username: "", email: "", password: "" });
        navigate("/notes");
      }
    } catch (error) {
      setAuthState({ severity: "error", message: "Login Failed" });
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post("/auth/register", input);
      if (res.status === 200) {
        setAuthState({
          severity: "success",
          message: "Registration Successful. Please Login",
        });
        setInput({ username: "", email: "", password: "" });
      }
    } catch (error) {
      setAuthState({ severity: "error", message: "Registration Failed" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  const handleDialogClose = () => {
    handleClose();
    setInput({ username: "", email: "", password: "" });
    setAuthState({ severity: "", message: "" });
  };
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="sm"
      TransitionComponent={SlideUpTransition}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={authModalStyles.title}>
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <IconButton onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} spacing={3} sx={authModalStyles.container}>
          {authState.message && (
            <Alert severity={authState.severity}>{authState.message}</Alert>
          )}
          {isSignup && (
            <BrandStyledTextField
              id="username"
              name="username"
              onChange={handleChange}
              value={input.username}
              label="Username"
              variant="outlined"
              fullWidth={true}
            />
          )}
          <BrandStyledTextField
            id="email"
            name="email"
            onChange={handleChange}
            value={input.email}
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
              name="password"
              onChange={handleChange}
              value={input.password}
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
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
