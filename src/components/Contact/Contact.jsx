import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon"></img>
          <a href="mailto:ungier.adam@gmail.com">ungier.adam@gmail.com</a>
        </li>
        <li className={styles.link}> 
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon"></img>
          <a href="https://www.linkedin.com/in/adam-ungier/" target="_blank">linkedin.com/adam-ungier</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon"></img>
          <a href="https://github.com/Reignu" target="_blank">github.com/reignu</a>
        </li>
      </ul>
    </footer>
  );
};