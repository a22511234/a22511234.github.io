import React from 'react';
import styles from './OtherExperienceSection.module.css';
import { otherExperienceData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }) => {
  // 根據組織名稱選擇適當的圖標
  const getIcon = () => {
    if (experience.organization.includes('社會資源處')) {
      return <FaUserGraduate />;
    } else {
      return <FaLaptopCode />;
    }
  };

  return (
    <motion.div 
      className={styles.experienceCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.experienceIcon}>
        {getIcon()}
      </div>
      <div className={styles.experienceContent}>
        <h3 className={styles.experienceTitle}>{experience.organization}</h3>
        <h4 className={styles.experiencePosition}>{experience.position}</h4>
        <p className={styles.experiencePeriod}>{experience.period}</p>
        <ul className={styles.experienceResponsibilities}>
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const OtherExperienceSection = () => {
  return (
    <section id="other-experience" className={`${styles.otherExperience} section`}>
      <div className="container">
        <SectionTitle title="其他經歷" />
        <div className={styles.experienceGrid}>
          {otherExperienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherExperienceSection;
