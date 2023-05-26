import React, { useState } from "react";
import "./Navbar.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import ButtonOutlined from "../Button/ButtonOutlined";
const Navbar = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const toggleTheme = () => {
    setThemeToggle(!themeToggle);
    const body = document.querySelector("body");
    if (themeToggle) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  };
  const handleLogin = () => {
    console.log("Login");
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
        <ButtonOutlined text="Login" onClick={handleLogin} />
      </div>
    </nav>
  );
};

export default Navbar;
