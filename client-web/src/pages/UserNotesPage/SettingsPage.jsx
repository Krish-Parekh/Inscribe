import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import "./SettingsPage.css";
const SettingsPage = () => {
  return (
    <div className="settings__wrapper">
      <h1>⚙️ Settings</h1>
      <div className="settings__container">
        <div className="first">
          <h2>Personal Information</h2>
          <div className="personal__info">
            <div className="personal__info__item">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="username" />
            </div>
            <div className="personal__info__item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="joe@gmail.com"
              />
            </div>
          </div>
          <button className="btn btn__primary">Save</button>
        </div>
        <div className="second">
          <h2>Appearance</h2>
          <div className="appearance__item">
            <BsFillSunFill className="appearance__icon"/>
            <p>Light Mode</p>
          </div>
          <div className="appearance__item">
            <FaRegMoon className="appearance__icon"/>
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
