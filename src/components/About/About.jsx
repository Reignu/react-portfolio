import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt="me-sitting-with-a-laptop" 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Experience in providing responsive and optimised sites with a focus on UI and UX</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-icon"/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Experience developing fast and robust backend systems and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon"/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Designed multiple pages and systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};