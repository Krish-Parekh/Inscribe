import { styled, Slide } from "@mui/material";
import { TextField, OutlinedInput } from "@mui/material";
import { forwardRef } from "react";

/* Navbar Styles */
export const navbarStyles = {
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
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    padding: {
      xs: "6px 12px",
      sm: "8px 16px",
    },
  },
};

/* AuthModal Styles */
export const authModalStyles = {
  title: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
    },
  },
  container: {
    padding: "1rem 0",
  },
  label: {
    "&.Mui-focused": {
      color: "var(--tertiary-color)",
    },
  },
  passwordField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--tertiary-color)",
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--tertiary-color)",
    },
  },

  button: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    backgroundColor: "var(--tertiary-color)",
    color: "var(--surface-color)",
  },
};

/* LandingPage Styles */
export const landingPageStyles = {
  wrapper: {
    height: "100vh",
  },
  container: {
    flexGrow: 1,
    flexDirection: {
      xs: "column",
      md: "row",
    },
    padding: "0 1rem",
  },
  leftContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: {
      xs: "center",
      md: "flex-start",
    },
  },
  title: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    fontSize: {
      xs: "2rem",
      sm: "3rem",
      md: "4rem",
    },
    color: "var(--primary-color)",
    textAlign: {
      xs: "center",
      md: "left",
    },
  },
  span: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    fontSize: {
      xs: "2rem",
      sm: "3rem",
      md: "4rem",
    },
    color: "var(--tertiary-color)",
  },

  subtitle: {
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-semibold)",
    width: {
      xs: "100%",
      sm: "80%",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.85rem",
      md: "0.95rem",
    },
    color: "var(--secondary-color)",
    textAlign: {
      xs: "center",
      md: "left",
    },
  },
};

/* Custom Fields */
export const BrandStyledTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
    caret-color: var(--tertiary-color);
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--tertiary-color);
  }
  &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--tertiary-color);
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--tertiary-color);
  }

  .MuiFormLabel-root.Mui-focused {
    color: var(--tertiary-color);
  }
`;

export const BrandStyledOutlinedInput = styled(OutlinedInput)`
  .MuiOutlinedInput-input {
    font-family: var(--font-family);
    caret-color: var(--tertiary-color);
  }
  & .MuiOutlinedInput-notchedOutline: {
    borderColor: "var(--tertiary-color)",
  },
  &:hover > .MuiOutlinedInput-notchedOutline: {
    borderColor: "var(--tertiary-color)",
  },
`;

/* Transitions */
export const SlideUpTransition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
