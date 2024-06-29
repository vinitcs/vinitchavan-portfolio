import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import profileImg from '../../assets/profile-pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
     const { theme, toggleTheme } = useTheme();

     const themeIcon = theme === 'light' ? sun : moon;
     const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
     const githubIcon = theme === 'light' ? githubLight : githubDark;
     const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

     return (
          <section id='hero' className={styles.container}>
               <div className={styles.colorModeContainer}>
                    <div className={styles.profileBorder}>
                         <img className={styles.profileImg} src={profileImg} alt={heroImg} />
                    </div>
                    <img className={styles.colorMode} src={themeIcon} alt='sun' onClick={toggleTheme} />
               </div>
               <div className={styles.info}>
                    <h1>
                         Vinit
                         <br />
                         Chavan
                    </h1>
                    <h2>Frontend Developer</h2>
                    <span>
                         <a href="https://x.com/Vinit2k21" target='_blank'>
                              <img src={twitterIcon} alt="Twitter" />
                         </a>
                         <a href="https://github.com/vinitcs" target='_blank'>
                              <img src={githubIcon} alt="Github" />
                         </a>
                         <a href="https://www.linkedin.com/in/vinit-chavan-9858871b8/" target='_blank'>
                              <img src={linkedInIcon} alt="LinkedIn" />
                         </a>
                    </span>
                    <p className={styles.description}>With a passion for developing modern React web apps for commercial businessness.</p>
                    <a href={cv} download>
                         <button className="hover" >Resume</button>
                    </a>
               </div>
          </section>
     )
}

export default Hero