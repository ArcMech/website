import React from "react";
import styles from "../styles/about.module.css";
import myImage from "../img/my-photo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
        <div className={styles.text_content}>
          <Link to="/blog/1" className={styles.text_content_thumbnail}>
            Cześć, jestem Arkadiusz, miło mi Cię poznać!
          </Link>
          <p>
            Minęło tyle czasu odkąd staram się o pozycję front-end developera.
            Może w końcu przełamię nieszczęsne fatum krążące nad juniorami?
          </p>
          <Link to="/blog/1">
            <button className={styles.about_button}>
              Przeczytaj moją historię
            </button>
          </Link>
        </div>
        <div className={styles.image_content}>
          <img
            src={myImage}
            alt="Arkadiusz Koziarz - twój frontend developer"
          />
        </div>
      </div>
      <ul className={styles.tags}>
        <li>Mówię w:</li>
        <li>
          <a>React</a>
        </li>
        <li>
          <a>Django</a>
        </li>
        <li>
          <a>JavaScript</a>
        </li>
        <li>
          <a>CSS</a>
        </li>
        <li>
          <a>SQL</a>
        </li>
      </ul>
    </section>
  );
};

export default About;
