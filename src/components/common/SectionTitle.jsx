import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
  return (
    <h2 className={styles.sectionTitle}>{title}</h2>
  );
};

export default SectionTitle;
