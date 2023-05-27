import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import WelcomeIllustration from "../../images/welcome_illustration.png";
import ButtonFilled from "../../components/Button/ButtonFilled";
import ModalDialog from "../../components/Modal/ModalDialog";
import InputField from "../../components/InputBox/InputField";
import PasswordField from "../../components/PasswordBox/PasswordField";
import ButtonImage from "../../components/Button/ButtonImage";
import "./WelcomePage.css";
import ButtonOutlined from "../../components/Button/ButtonOutlined";

const WelcomePage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const toggleModal = () => setOpenLogin(!openLogin);

  const [loginCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="welcome">
      <Navbar handleClick={toggleModal} />
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
          <ButtonFilled text="Create Account" />
        </div>
        <div className="welcome__illustration">
          <img
            src={WelcomeIllustration}
            alt="Welcome Illustration"
            className="graphic__image"
          />
        </div>
      </div>
      {openLogin && (
        <ModalDialog isOpen={openLogin} onClose={toggleModal}>
          <p className="welcome__greetings">Welcome Back</p>
          <ButtonImage text="Login with Google" />
          <InputField
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <PasswordField
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </ModalDialog>
      )}
    </div>
  );
};

export default WelcomePage;
