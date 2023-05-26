import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import WelcomeIllustration from "../../images/welcome_illustration.png";
import ButtonFilled from "../../components/Button/ButtonFilled";
import "./WelcomePage.css";
const WelcomePage = () => {
  return (
    <div className="welcome">
      <Navbar />
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
    </div>
  );
};

export default WelcomePage;
