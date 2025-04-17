import React from 'react';
import styles from './HeroSection.module.css';
import { personalInfo } from '../../data/resumeData';
import { FaEnvelope, FaPhone, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {<span className={styles.englishName}>{personalInfo.englishName}</span>}
          </motion.h1>
          
          <motion.h2 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.h3
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            #積極任事 #持續學習 #JavaDeveloper #CloudComputing
          </motion.h3>
          
          <motion.div 
            className={styles.heroSocial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href={`mailto:${personalInfo.email}`} className={styles.socialIcon}>
              <FaEnvelope />
            </a>
            <a href={`tel:${personalInfo.phone.replace(/-/g, '')}`} className={styles.socialIcon}>
              <FaPhone />
            </a>
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGlobe />
            </a>
          </motion.div>
          
          <motion.a 
            href="#about" 
            className={styles.scrollDown}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span>向下滾動</span>
            <FaChevronDown />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
