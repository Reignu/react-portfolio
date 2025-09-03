import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const categories = [
    { key: 'languages', title: 'Programming Languages' },
    { key: 'frameworks', title: 'Frameworks & Libraries' },
    { key: 'databases', title: 'Databases' },
    { key: 'tools', title: 'Tools & Technologies' }
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Technologies</h2>
      {categories.map((category) => (
        <div key={category.key} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>
          <div className={styles.skills}>
            {skillsData[category.key].map((skill, id) => (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img className={styles.skillImage} src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
