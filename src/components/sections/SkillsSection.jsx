import React from 'react';
import styles from './SkillsSection.module.css';
import { skillsData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

const ProgressBar = ({ skill }) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.progressName}>{skill.name}</span>
        <span className={styles.progressPercent}>{skill.level}%</span>
      </div>
      <div className={styles.progressBg}>
        <motion.div 
          className={styles.progressBar}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div 
      className={styles.skillCategory}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className={styles.categoryTitle}>{category.category}</h3>
      <div className={styles.skillsList}>
        {category.skills.map((skill, i) => (
          <ProgressBar key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <SectionTitle title="技能專長" />
        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
