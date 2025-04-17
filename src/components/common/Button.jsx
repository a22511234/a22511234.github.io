import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type = 'primary', onClick, href, className = '' }) => {
  const buttonClass = `${styles.button} ${styles[type]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
