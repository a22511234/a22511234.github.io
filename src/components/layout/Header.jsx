import React from 'react';
import { personalInfo } from '../../data/resumeData';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isAboutSubmenuOpen, setIsAboutSubmenuOpen] = React.useState(false);

  // 監聽滾動事件
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 切換選單
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 關閉選單
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 處理滑鼠懸停
  const handleMouseEnter = () => {
    setIsAboutSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsAboutSubmenuOpen(false);
  };

  // 處理點擊事件（對於移動裝置）
  const handleAboutClick = (e) => {
    // 只在移動裝置上使用點擊來切換子選單
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setIsAboutSubmenuOpen(!isAboutSubmenuOpen);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href="#hero">{personalInfo.englishName}</a>
          </div>
          <div 
            className={styles.menuToggle} 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <li 
              className={styles.hasSubmenu} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#about" 
                className={styles.navLink} 
                onClick={handleAboutClick}
              >
                關於我 <FaChevronDown className={styles.submenuIcon} />
              </a>
              <ul className={`${styles.submenu} ${isAboutSubmenuOpen ? styles.show : ''}`}>
                <li><a href="#about" className={styles.submenuLink} onClick={closeMenu}>關於我</a></li>
                <li><a href="#education" className={styles.submenuLink} onClick={closeMenu}>教育背景</a></li>
                <li><a href="#experience" className={styles.submenuLink} onClick={closeMenu}>專業經驗</a></li>
                <li><a href="#projects" className={styles.submenuLink} onClick={closeMenu}>專案作品</a></li>
                <li><a href="#skills" className={styles.submenuLink} onClick={closeMenu}>技能專長</a></li>
                <li><a href="#certifications" className={styles.submenuLink} onClick={closeMenu}>證照認證</a></li>
              </ul>
            </li>
            <li><a href="http://howard0720.cc/blog" className={styles.navLink} onClick={closeMenu}>部落格</a></li>
            <li><a href="#contact" className={styles.navLink} onClick={closeMenu}>聯絡我</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;