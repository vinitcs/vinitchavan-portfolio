import React from 'react';
import styles from './ProjectsStyles.module.css';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';
// import { projectData } from '../../data/ProjectData.js';

import eviapp from '../../assets/eviapp.png';
import farm2tech from '../../assets/farm2tech.png';
import bms from '../../assets/bms.png';
import AppProjectCard from '../../components/ProjectCard/AppProjectCard';
import WebProjectCard from '../../components/ProjectCard/WebProjectCard';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <AppProjectCard
                    // firstBtnLogo={'▶️'}
                    firstBtnTxt={'Demo'}
                    src={eviapp}
                    title={"EVIApp (Internship)"}
                    description={"Developed a registration app for Exposys Virtual Internship (EVI), enabling students to apply for various domains and receive in-app notifications upon application submission."}
                    expLetterBtn={"block"}
                    outputLink={"https://drive.google.com/file/d/1dVOUa5LBrvtnMc3-YDRyTy75dgFoTJQM/view?usp=sharing"}
                    expLetterLink={"https://drive.google.com/file/d/1uZm91tsFrcIFjgyY6edJ_N1f-EjO6ma0/view?usp=sharing"}
                    githubLink={"https://github.com/vinitcs/EVI-app"}
                />

                <AppProjectCard
                    // firstBtnLogo={'📍'}
                    firstBtnTxt={'Demo'}
                    src={farm2tech}
                    title={"Farm2tech dairy app"}
                    description={"An app featuring a selection of dairy products available for both one-time purchase and monthly subscription options, with seamless cart functionality for added convenience."}
                    expLetterBtn={"none"}
                    outputLink={"https://drive.google.com/file/d/1W4hx2HYMGl63awSpWJfJN46m0PQKgwuB/view"}
                    githubLink={"https://github.com/vinitcs/farm2tech-monthly-subscription-app-ui"}
                />

                <WebProjectCard
                    // firstBtnLogo={'📍'}
                    firstBtnTxt={'Visit'}
                    src={bms}
                    title={"GIT Bus Card"}
                    description={"Launched a portal that enhances bus card access for college students, eliminating physical cards, reducing card loss, and providing fee payment history with timely due date alerts via email."}
                    demoBtn={"block"}
                    demoLink={"https://drive.google.com/file/d/1wf4NRhztwbK64sWksNkt-nreLjDMPGlO/view?usp=sharing"}
                    outputLink={"https://gitbuscard.netlify.app/"}
                    githubLink={"https://github.com/vinitcs/GIT-Bus-Card-Management"}
                />
            </div>
        </section>
    );
}

export default Projects;
