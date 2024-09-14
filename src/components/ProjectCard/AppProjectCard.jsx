import React from 'react';
import styles from './AppProjectCardStyles.module.css';
import { FaGithub } from "react-icons/fa";
import MarqueeText from '../Marquee/MarqueeText';

function AppProjectCard({ firstBtnLogo, firstBtnTxt, src, title, description, expLetterBtn, outputLink, expLetterLink, githubLink }) {
  return (
    <div className={styles.appProjectCard} >
      <img className={styles.appImg} src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.navigatingBtn}>
        <a href={outputLink} style={{ textDecoration: 'none' }} target="_blank">
          <button className={styles.actionBtn}>{firstBtnLogo}{firstBtnTxt}</button>
        </a>
        <a href={expLetterLink} style={{ textDecoration: 'none' }} target="_blank">
          <button className={styles.actionBtn} style={{ display: `${expLetterBtn}` }}>📄Exp_Letter</button>
        </a>
        <a href={githubLink} style={{ textDecoration: 'none' }} target="_blank">
          <button className={styles.actionBtn}><FaGithub style={{ position: 'relative', top: 2, right: 4 }} />Github</button>
        </a>
      </div>
      <MarqueeText title={"MOBILE-APP"}/>
    </div>
  );
}

export default AppProjectCard;
