import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFile, FaUserAlt, FaPlus } from "react-icons/fa";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const routes = [
  {
    path: "/notes/new",
    name: "Add note",
    icon: <FaPlus />,
  },
  {
    path: "/notes/",
    name: "Notes",
    icon: <FaFile />,
  },
  {
    path: "/user",
    name: "User",
    icon: <FaUserAlt />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="sidebar__wrapper">
      <motion.div
        animate={{ width: isOpen ? "300px" : "75px" }}
        className="sidebar"
      >
        <div className="sidebar__header">
          {isOpen && <h1 className="sidebar__title">Inscribe ✏️</h1>}
          <i className="sidebar__close-icon" onClick={toggleSidebar}>
            {isOpen ? <AiOutlineDoubleLeft /> : <RxHamburgerMenu />}
          </i>
        </div>
        <div className="sidebar__items">
          {routes.map((route, index) => (
            <Link to={route.path} key={index} className="sidebar__link">
              <div className="sidebar__item">
                <div className="sidebar__item-icon">{route.icon}</div>
                {isOpen && (
                  <div className="sidebar__item-name">{route.name}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      <main className="sidebar__content"> {children} </main>
    </div>
  );
};

export default Sidebar;
