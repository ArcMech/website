import React from "react";
import styles from "../styles/header.module.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.logo_container}>
        <Link to="/">
          <div className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menu_nav}>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className={styles.menu_nav}>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
