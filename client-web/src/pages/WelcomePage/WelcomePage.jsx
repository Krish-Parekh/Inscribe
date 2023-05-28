import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import WelcomeIllustration from "../../images/welcome_illustration.png";
import ButtonFilled from "../../components/Button/ButtonFilled";
import AuthModal from "../../components/Modal/AuthModal";
import "./WelcomePage.css";

const WelcomePage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginError, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const [signupError, setSignupErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleLoginModal = () => setOpenLogin(!openLogin);
  const toggleSignupModal = () => setOpenSignup(!openSignup);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="welcome">
      <Navbar handleClick={toggleLoginModal} />
      <div className="welcome__main">
        <div className="welcome__intro">
          <h1 className="intro__headline">
            Craft Your <span className="intro__highlight">Ideas,</span>
            <br />
            Craft Your Future!
          </h1>
          <p className="intro__subheadline">
            Unleash Your Creativity, Sculpt Your Thoughts, and Shape <br /> Your
            Success with Inscribe’s Artful Note-Taking Experience.
          </p>
          <ButtonFilled text="Create Account" onClick={toggleSignupModal} />
        </div>
        <div className="welcome__illustration">
          <img
            src={WelcomeIllustration}
            alt="Welcome Illustration"
            className="graphic__image"
          />
        </div>
      </div>
      <AuthModal
        isOpen={openLogin}
        onClose={toggleLoginModal}
        mode="login"
        onInputChange={handleLoginChange}
      />
      <AuthModal
        isOpen={openSignup}
        onClose={toggleSignupModal}
        mode="signup"
        onInputChange={handleSignupChange}
      />
    </div>
  );
};

export default WelcomePage;
