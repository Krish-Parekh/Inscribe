import React from "react";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import "./SettingsPage.css";
const SettingsPage = () => {
  return (
    <div className="setting__wrapper">
      {/* <h1>⚙️ Settings</h1> */}
      <section className="first">
        <h2>Personal Information</h2>
        <div className="personal__info">
          <div className="personal__info__item">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="personal__info__item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
        </div>

        <button className="btn btn--primary">Save</button>
      </section>
      <section className="second">
        <h2>Appearance</h2>
        <div className="appearance__info">
          <div className="appearance__info__item">
            <label htmlFor="theme">Theme</label>
            <select name="theme" id="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
