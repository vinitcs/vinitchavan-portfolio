/* eslint-disable react/no-unescaped-entities */
import styles from './HeroStyles.module.css';
// import profileImg from '../../assets/profile-pic.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import Typewriter from "typewriter-effect";
// import MarqueeText from '../../components/Marquee/MarqueeText';
// import scrollDownSVG from '../../assets/Animation - 1726335293902.json';
import BackgroundLineWrapper from '../../components/effects/BackgroundLineWrapper';

function Hero() {
     const { theme } = useTheme();
     const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
     const githubIcon = theme === 'light' ? githubLight : githubDark;
     const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

     return (
          <section id='hero' className={styles.container}>
               <BackgroundLineWrapper>
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
                         <p className={styles.description}>Passionate about building high-quality React <strong>web</strong> and <strong> native applications</strong> tailored for commercial success.</p>
                         <a href={resume} target='_blank'>
                              <button className={styles.resumeBtn} >Resume</button>
                         </a>
                         {/* <MarqueeText title={"WELCOME"} /> */}
                         <span className={styles.scrollDownText}>SCROLL DOWN</span>
                    </div>
               </BackgroundLineWrapper>
          </section>
     )
}

export default Hero