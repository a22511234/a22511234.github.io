import React from 'react';
import styles from './Footer.module.css';
import { personalInfo } from '../../data/resumeData';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </div>
          <div className={styles.footerSocial}>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialIcon}>
              <FaEnvelope />
            </a>
            <a href={`tel:${personalInfo.phone.replace(/-/g, '')}`} className={styles.socialIcon}>
              <FaPhone />
            </a>
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGlobe />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
