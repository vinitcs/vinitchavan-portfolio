import React, { useState } from 'react';
import styles from "./HeaderStyles.module.css";
import { Link } from "react-scroll";
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


function Header() {
     const [isNavbarOpen, setIsNavbarOpen] = useState(false);
     const duration = 800;
     const { theme, toggleTheme } = useTheme();
     const themeIcon = theme === 'light' ? sun : moon;

     const toggleNavbar = () => {
          setIsNavbarOpen(!isNavbarOpen);
     };


     return (
          <header className={`${styles.headerContainer} ${isNavbarOpen ? styles.openNavbarBackground : ""}`}>
               {isNavbarOpen ? (
                    <IoClose
                         color='grey'
                         size={28}
                         className={styles.closeMenu}
                         onClick={toggleNavbar}
                    />
               ) : (
                    <RxHamburgerMenu
                         color='grey'
                         size={30}
                         className={styles.hamburgerMenu}
                         onClick={toggleNavbar}
                    />
               )}
               <nav className={isNavbarOpen ? styles.showNav : ""}>
                    <ul>
                         <li>
                              <Link to="hero"
                                   spy={true}
                                   smooth={true}
                                   duration={duration}
                              >
                                   Home
                              </Link>
                         </li>
                         <li>
                              <Link to="projects"
                                   spy={true}
                                   smooth={true}
                                   duration={duration}
                              >
                                   Projects
                              </Link>
                         </li>
                         <li>
                              <Link to="skills"
                                   spy={true}
                                   smooth={true}
                                   duration={duration}
                              >
                                   Skills
                              </Link>
                         </li>
                         <li>
                              <Link to="contact"
                                   spy={true}
                                   smooth={true}
                                   duration={duration}
                              >
                                   Contact
                              </Link>
                         </li>
                         <img className={styles.colorMode} src={themeIcon} alt='sun' onClick={toggleTheme} />
                    </ul>
               </nav>
          </header>
     )
}

export default Header