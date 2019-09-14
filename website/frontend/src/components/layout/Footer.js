import React from "react";
import styles from "../styles/footer.module.css";
import gh from "../img/gh.svg";
import fb from "../img/fb.svg";
import env from "../img/env.svg";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <ul>
        <li>
          <a href="https://github.com/ArcMech" className={styles.icon}>
            <img src={gh}></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/arkadiusz.koziarz"
            className={styles.icon}
          >
            <img src={fb}></img>
          </a>
        </li>
        <li>
          <a href="mailto:arek.krz@gmail.com" className={styles.icon}>
            <img src={env}></img>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
