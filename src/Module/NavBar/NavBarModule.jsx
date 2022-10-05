import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import items from "./items";

import "bootstrap/dist/css/bootstrap.min.css";

const getClassName = ({ isActive }) => {
  const className = isActive ? styles.active : styles.link;
  return className;
};

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className="nav justify-content-center">
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
