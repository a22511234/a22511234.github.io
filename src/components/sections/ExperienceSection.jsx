import React from 'react';
import styles from './ExperienceSection.module.css';
import { experienceData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

const TimelineItem = ({ experience, index }) => {
  const isLeft = index % 2 === 0; // 偶數左、奇數右
  const sideClass = isLeft ? styles.left : styles.right;

  return (
    <motion.div 
      className={`${styles.timelineItem} ${sideClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineDate}>{experience.period}</div>
      <div className={styles.timelineContent}>
        <h3 className={styles.timelineTitle}>{experience.company}</h3>
        <h4 className={styles.timelinePosition}>{experience.position}</h4>
        <ul className={styles.timelineDescription}>
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <SectionTitle title="過往實習與工作經驗" />
        <div className={styles.timeline}>
          {experienceData.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;