import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl  } from "../../utils";

export const Hero = () => {
  return ( 
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Adam</h1>
      <p className={styles.description}>I am a full stack developer with one year of experience using React and NodeJS. Reach out if you would like to know more!</p>
      <a href="mailto:ungier.adam@gmail.com" className={styles.contactBtn}>Get in touch</a>
    </div>
    <img 
      src={getImageUrl("hero/heroImage.png")} 
      alt="hero-img-of-me" 
      className={styles.heroImg} 
    />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
  </section>
  );
};