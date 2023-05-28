import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import ButtonOutlined from "../Button/ButtonOutlined";
import "./Navbar.css";

// Navbar Component
const Navbar = ({ handleClick }) => {

  // state to manage the theme toggle
  const [themeToggle, setThemeToggle] = useState(false);

  // function to toggle the theme
  const toggleTheme = () => {
    setThemeToggle(!themeToggle);
    const body = document.querySelector("body");

    // Applying/removing the dark-theme class based on the toggle state
    if (themeToggle) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar__title">✏️ Inscribe</h1>
      <div className="navbar__buttons">
        <div className="theme__toggle" onClick={toggleTheme}>
          {themeToggle ? (
            <BsFillSunFill className="navbar__icons" />
          ) : (
            <BsFillMoonFill className="navbar__icons" />
          )}
        </div>
        <ButtonOutlined text="Login" onClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;
