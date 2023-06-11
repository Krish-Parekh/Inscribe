import { Stack, Typography, Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { landingPageStyles } from "../../styles/styles";
import heroBanner from "../../images/light_illustration.png";
import AuthModal from "../../components/AuthModal/AuthModal";
const Landing = () => {
  const [modalState, setModalState] = useState({
    isSignup: false,
    open: false,
  });
  const handleLogin = () => {
    setModalState({ isSignup: false, open: true });
  };
  const handleSignup = () => {
    setModalState({ isSignup: true, open: true });
  };

  const handleClose = () => {
    setModalState({ isSignup: false, open: false });
  };
  const navbar = {
    headerText: "✏️ Inscribe",
    buttons: [
      {
        label: "Login",
        onClick: handleLogin,
      },
      {
        label: "Signup",
        onClick: handleSignup,
      },
    ],
  };
  return (
    <Fragment>
      <Stack spacing={2} sx={landingPageStyles.wrapper}>
        <Navbar headerText={navbar.headerText} buttons={navbar.buttons} />
        <Stack sx={landingPageStyles.container}>
          <Stack direction={"column"} sx={landingPageStyles.leftContainer}>
            <Stack spacing={2} sx={landingPageStyles.textContainer}>
              <Typography
                variant={"h2"}
                component="div"
                sx={landingPageStyles.title}
              >
                Craft Your {""}
                <Typography
                  variant={"h2"}
                  component="span"
                  sx={landingPageStyles.span}
                >
                  Ideas
                </Typography>
                , <br /> Share Your Thoughts
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={landingPageStyles.subtitle}
              >
                Unleash Your Creativity, Sculpt Your Thoughts, and Shape Your
                Success with Inscribe’s Artful Note-Taking Experience.
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={landingPageStyles.rightContainer}>
            <Box component="img" src={heroBanner} alt="banner" width="100%" />
          </Stack>
        </Stack>
      </Stack>
      <AuthModal
        open={modalState.open}
        isSignup={modalState.isSignup}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

export default Landing;
