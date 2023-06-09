import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "../../images/light_illustration.png";
import Navbar from "../../components/Navbar/Navbar";
import CustomModal from "../../components/CustomModal/CustomModal";
const styles = {
  heroContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  landingContainer: {
    flexGrow: 1,
    flexDirection: "row",
    padding: "0 2rem",
    justifyContent: {
      xs: "space-betwee",
      sm: "space-around",
    },
    alignItems: "center",
  },
  title: {
    color: "var(--primary-color)",
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-medium)",
    textAlign: {
      xs: "center",
      sm: "left",
    },
    fontSize: {
      xs: "2rem",
      sm: "4rem",
    },
  },
  spanText: {
    color: "var(--tertiary-color)",
    fontSize: {
      xs: "2rem",
      sm: "4rem",
    },
  },
  subtitle: {
    color: "var(--secondary-color)",
    fontFamily: "var(--font-family)",
    fontWeight: "var(--fw-regular)",
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
    },
    textAlign: {
      xs: "center",
      sm: "left",
    },
  },
};
const Landing = () => {
  const [modalState, setModalState] = useState({
    authType: "",
    open: false,
  });
  const handleLoginClick = () => {
    setModalState({
      authType: "login",
      open: true,
    });
  };

  const handleSignupClick = () => {
    setModalState({
      authType: "signup",
      open: true,
    });
  };

  const handleClose = () => {
    setModalState({
      authType: "",
      open: false,
    });
  };
  return (
    <Stack direction="column" spacing={2} sx={{ height: "100vh" }}>
      <Navbar
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />
      <Box sx={styles.heroContainer}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={styles.landingContainer}
        >
          <Stack spacing={2}>
            <Typography variant="h2" sx={styles.title}>
              Craft Your{" "}
              <Typography variant="h2" component="span" sx={styles.spanText}>
                Ideas
              </Typography>
              , <br /> Craft Your Future!
            </Typography>
            <Typography variant="body1" sx={styles.subtitle}>
              Unleash Your Creativity, Sculpt Your Thoughts, and Shape <br />{" "}
              Your Success with Inscribe’s Artful Note-Taking Experience.
            </Typography>
          </Stack>
          <Box>
            <Box component="img" src={Banner} alt="banner" width="100%" />
          </Box>
        </Stack>
      </Box>
      <CustomModal
        handleClose={handleClose}
        open={modalState.open}
        authType={modalState.authType}
      />
    </Stack>
  );
};

export default Landing;
