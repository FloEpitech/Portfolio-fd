import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About ME</h2>
      <div className={styles.content}>
        <img
          src="https://media.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.gif"
          alt="Gif animé"
          style={{width: "100%", height: "auto"}}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developpeur</h3>
              <p>
              J'apprécie particulièrement le développement front-end, notamment la création de belles interfaces
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developpeur</h3>
              <p>
              J'ai de l'expérience dans la gestion de données ainsi que dans la configuration d'applications web
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Securité</h3>
              <p>
              Je me forme à la cybersécurité en dehors de mon cursus scolaire, car je trouve cela très important et passionnant. (TryHackMe)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
