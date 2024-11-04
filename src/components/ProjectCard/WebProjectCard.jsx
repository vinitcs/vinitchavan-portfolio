import React from 'react';
import styles from './WebProjectCardStyles.module.css';
import { FaGithub, FaLink } from "react-icons/fa";
// import MarqueeText from '../Marquee/MarqueeText';

function WebProjectCard({ firstBtnLogo, firstBtnTxt, src, title, description, demoBtn, demoLink, outputLink, githubLink }) {
     return (
          <div className={styles.webProjectCard}>
               <img className={styles.webImg} src={src} alt={`${title} logo`} />
               <h3>{title}</h3>
               <p>{description}</p>

               <div className={styles.navigatingBtn}>
                    <a href={demoLink} style={{ textDecoration: 'none' }} target="_blank">
                         <button className={styles.actionBtn} style={{ display: `${demoBtn}` }}><FaLink size={16} style={{ position: 'relative', top: 2, right: 4 }} />Demo</button>
                    </a>
                    <a href={outputLink} style={{ textDecoration: 'none' }} target="_blank">
                         <button className={styles.actionBtn}><FaLink size={16} style={{ position: 'relative', top: 2, right: 4 }} />{firstBtnTxt}</button>
                    </a>
                    <a href={githubLink} style={{ textDecoration: 'none' }} target="_blank">
                         <button className={styles.actionBtn}><FaGithub style={{ position: 'relative', top: 2, right: 4 }} />Github</button>
                    </a>
               </div>
               {/* <MarqueeText title={"WEB APP"}/> */}
          </div>
     );
}

export default WebProjectCard;
