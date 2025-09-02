import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl  } from "../../utils";

export const Hero = () => {
  return ( 
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hello I'm Adam</h1>
      <h2 className={styles.subtitle}>Full-Stack Developer | Java & Spring Enthusiast</h2>
      <p className={styles.description}>Passionate about building scalable systems, clean code, and solving real-world problems. Currently studying and expanding my knowledge while working on exciting projects.</p>
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