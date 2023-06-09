import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  styled,
  Button,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
  }
`;
const CustomOutlinedInput = styled(OutlinedInput)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
  }
`;

const styles = {
  modalTitleContainer: {
    justifyContent: "space-between",
  },
  modalTitle: {
    fontFamily: "var(--font-family)",
  },
  modalContentContainer: {
    paddingBlock: "1rem",
  },
  modalButton: {
    fontFamily: "var(--font-family)",
    letterSpacing: "0.1rem",
  },
};

const CustomModal = ({ open, handleClose, authType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const isSignup = authType === "signup";
  return (
    <Dialog fullWidth={true} open={open} maxWidth="md" TransitionComponent={Transition}>
      <DialogTitle>
        <Stack direction="row" sx={styles.modalTitleContainer}>
          <Typography sx={styles.modalTitle} variant="h4">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack sx={styles.modalContentContainer} direction="column" spacing={2}>
          {isSignup && <CustomTextField label="Username" variant="outlined" />}
          <CustomTextField label="Email" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <CustomOutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained">
            <Typography sx={styles.modalButton}>
              {isSignup ? "Sign Up" : "Login"}
            </Typography>
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
