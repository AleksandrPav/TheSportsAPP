import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

import items from "./items";

import "bootstrap/dist/css/bootstrap.min.css";

const getClassName = ({ isActive }) => {
  const className = isActive ? "active" : "link";
  return className;
};

const NavBar = () => {
  return (
    <nav className="navbar justify-content-center">
      <ul className="nav">
        {items.map(({ url, title, id }) => (
          <li key={id} className="nav-item">
            <NavLink to={url} className={getClassName}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
