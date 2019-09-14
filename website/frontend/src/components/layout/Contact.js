import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact_page}>
      <div className={styles.contact_data}>
        <h1>W czym mogę pomóc?</h1>
        <h4 className={styles.contact_info}>
          Jeżeli chcesz ze mną pracować, z chęcią podejmę współpracę! <br></br>
          Napisz do mnie maila, a potem przejdziemy do rozmowy w wygodny dla nas
          obu sposób.
        </h4>
        <h4 className={styles.contact_info}>
          Napisz do mnie na
          <a href="mailto:arek.krz@gmail.com"> arek.krz@gmail.com</a>
        </h4>
        <h4 className={styles.contact_info}>Wielkie dzięki! Do zobaczenia!</h4>
      </div>
    </section>
  );
};

export default Contact;
