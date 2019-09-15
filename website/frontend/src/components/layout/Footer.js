import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <ul>
        <li>
          <a href="https://github.com/ArcMech" className={styles.icon}>
            <img src="/static/frontend/img/gh.svg"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/arkadiusz.koziarz"
            className={styles.icon}
          >
            <img src="/static/frontend/img/fb.svg"></img>
          </a>
        </li>
        <li>
          <a href="mailto:arek.krz@gmail.com" className={styles.icon}>
            <img src="/static/frontend/img/env.svg"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
