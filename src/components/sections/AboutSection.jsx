import React from "react";
import styles from "./AboutSection.module.css";
import { personalInfo } from "../../data/resumeData";
import SectionTitle from "../common/SectionTitle";
import { FaEnvelope, FaPhone, FaGlobe, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <SectionTitle title="關於我" />
        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imagePlaceholder}>
              <img
                src="/images/Me.PNG"
                alt="Photo"
                className={styles.profileImage}
              />
            </div>
          </motion.div>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>{personalInfo.bio}</p>
            <p>{personalInfo.bio2}</p>
            <p>{personalInfo.bio3}</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>{personalInfo.email}</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <span>{personalInfo.phone}</span>
              </div>
              <div className={styles.contactItem}>
                <FaGlobe />
                <span>
                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {personalInfo.website}
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
