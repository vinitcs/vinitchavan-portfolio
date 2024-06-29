import React from 'react';
import styles from './AppProjectCardStyles.module.css'
function AppProjectCard({src, link, title, description }) {
  return (
    <a href={link} target="_blank">
      <img className={styles.appImg}  src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default AppProjectCard;
