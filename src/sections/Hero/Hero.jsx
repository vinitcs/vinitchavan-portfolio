import styles from './HeroStyles.module.css';
// import profileImg from '../../assets/profile-pic.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import Typewriter from "typewriter-effect";
import MarqueeText from '../../components/Marquee/MarqueeText';

function Hero() {
     const { theme } = useTheme();
     const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
     const githubIcon = theme === 'light' ? githubLight : githubDark;
     const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

     return (
          <section id='hero' className={styles.container}>
               <div className={styles.info}>
                    <h1><span className={styles.greetings}>Hi<span className={styles.wave}>👋🏻</span>, I'm</span>
                        Vinit<br />Chavan
                    </h1>

                    <div className={styles.typeWriterSection}>
                         <span>
                              <Typewriter
                                   options={{
                                        strings: ["Mern Stack Developer", "React Native App Developer", "Frontend Developer"],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 70,
                                        wrapperClassName: styles.head_tags,
                                        cursorClassName: styles.cursor_tag
                                   }}
                              />
                         </span>
                    </div>
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
                    <p className={styles.description}>With a passion for developing <strong>React web apps</strong> and <strong>React native apps</strong> for commercial businessness.</p>
                    <a href={cv} target='_blank'>
                         <button className={styles.resumeBtn} >Resume</button>
                    </a>
                    <MarqueeText title={"WELCOME"}/>
               </div>
          </section>
     )
}

export default Hero