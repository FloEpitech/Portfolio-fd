import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, Je suis Florian Desitter</h1>
        <p className={styles.description}>
          Je suis étudiant en développement web full-stack à l'école Epitech Lille. N'hésitez pas à me contacter si vous souhaitez en savoir plus !
        </p>
        <a href="mailto:florian.desitter@epitech.eu" className={styles.contactBtn}>
          Contactez moi
        </a>
      </div>
      <img
        src={getImageUrl("hero/avatarfd.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
