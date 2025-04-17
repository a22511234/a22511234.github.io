import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import { personalInfo } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在實際應用中，這裡會發送表單數據到後端
    // 這裡僅模擬表單提交成功
    setFormStatus({
      submitted: true,
      success: true,
      message: '感謝您的訊息！我會盡快回覆您。'
    });
    
    // 重置表單
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <SectionTitle title="聯絡我" />
        <div className={styles.contactContent}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>讓我們保持聯繫</h3>
            <p>如果您有任何問題或合作機會，歡迎隨時與我聯繫。</p>
            <div className={styles.contactDetails}>
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
                  <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                    {personalInfo.website}
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {formStatus.submitted && formStatus.success ? (
              <div className={styles.formSuccess}>
                <h3>訊息已送出！</h3>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">電子郵件</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">主旨</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">訊息</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <Button type="primary">送出訊息</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
