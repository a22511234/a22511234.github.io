import React from 'react';
import styles from './CertificationsSection.module.css';
import { certificationsData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { FaMicrosoft, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CertificationCard = ({ certification, index }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'microsoft':
        return <FaMicrosoft />;
      case 'shield':
        return <FaShieldAlt />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={styles.certificationCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.certificationIcon}>
        {getIcon(certification.icon)}
      </div>
      <div className={styles.certificationContent}>
        <h3 className={styles.certificationTitle}>{certification.title}</h3>
        <p className={styles.certificationName}>{certification.name}</p>
        <p className={styles.certificationDate}>{certification.date}</p>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className={`${styles.certifications} section`}>
      <div className="container">
        <SectionTitle title="證照認證" />
        <div className={styles.certificationsGrid}>
          {certificationsData.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
