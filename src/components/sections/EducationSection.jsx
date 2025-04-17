import React from 'react';
import styles from './EducationSection.module.css';
import { educationData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div 
      className={styles.educationCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.educationIcon}>
        <FaGraduationCap />
      </div>
      <div className={styles.educationContent}>
        <h3 className={styles.educationTitle}>{education.school}</h3>
        <p className={styles.educationProgram}>{education.program}</p>
        <p className={styles.educationPeriod}>{education.period}</p>
        <ul className={styles.educationAchievements}>
          {education.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className={`${styles.education} section`}>
      <div className="container">
        <SectionTitle title="教育背景" />
        <div className={styles.educationCards}>
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
