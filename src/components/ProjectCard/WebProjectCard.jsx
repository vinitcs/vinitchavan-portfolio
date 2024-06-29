import React from 'react';
import styles from './WebProjectCardStyles.module.css'

function WebProjectCard({ src, link, title, description }) {
     return (
          <a href={link} target="_blank">
               <img className={styles.webImg} src={src} alt={`${title} logo`} />
               <h3>{title}</h3>
               <p>{description}</p>
          </a>
     );
}

export default WebProjectCard;
