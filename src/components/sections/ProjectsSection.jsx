import React from 'react';
import styles from './ProjectsSection.module.css';
import { projectsData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <span className={styles.projectPeriod}>{project.period}</span>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <ul className={styles.projectDetails}>
        {project.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
      <div className={styles.projectTechnologies}>
        {project.technologies.map((tech, i) => (
          <span key={i} className={styles.techTag}>{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <SectionTitle title="專案作品" />
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
