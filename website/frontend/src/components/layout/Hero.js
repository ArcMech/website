import React from "react";
import styles from "../styles/hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>Kocham internety!</h1>
        <h4>
          Jeśli też je kochasz, napisz do mnie, a razem zrobimy coś ładnego.
        </h4>
        <Link to="/contact">
          <button className={styles.contact_button}>Napisz do mnie</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
