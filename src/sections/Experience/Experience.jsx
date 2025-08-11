import React from 'react'
import styles from "./ExperienceStyles.module.css";
import { experienceData } from '../../data/ExperienceData';
import { iconMapping } from '../../utils/icons/icons';

function Experience() {

     return (
          <section id='experience' className={styles.container}>
               <h2 className='sectionTitle'>Experience</h2>

               {experienceData.map((data, index) => (
                    <div key={index} className={styles.cardContainer}>
                         <h4>{data.yearRange[0]} - {data.yearRange[1]}</h4>
                         <h3>{data.companyName}</h3>

                         <span>{data.roles.join(", ")}</span>
                         <p>{data.description}</p>
                         {/* <ul>
                              {data.responsibilities.map((item, i) => (
                                   <li key={i}>{item}</li>
                                   ))}
                                   </ul> */}

                         <div className={styles.stackSection}>
                              {data.stackUsed.map((item, i) => {
                                   const IconComponent = iconMapping[item.icon.toLowerCase()];
                                   return (
                                        <span key={i} className={styles.stackCapsule}>
                                             {IconComponent && <IconComponent size={18} />}
                                             {item.label}
                                        </span>
                                   )
                              })}
                         </div>
                    </div>
               ))}
          </section>
     )
}

export default Experience