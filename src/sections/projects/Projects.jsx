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
                    firstBtnLogo={'▶️'}
                    firstBtnTxt={'Demo'}
                    src={eviapp}
                    title={"EVIApp (Internship)"}
                    description={"Developed an Exposys Virtual Internship (EVI) registration app where on applying any domain student can get notification within the app"}
                    expLetterBtn={"block"}
                    outputLink={"https://drive.google.com/file/d/1dVOUa5LBrvtnMc3-YDRyTy75dgFoTJQM/view?usp=sharing"}
                    expLetterLink={"https://drive.google.com/file/d/1uZm91tsFrcIFjgyY6edJ_N1f-EjO6ma0/view?usp=sharing"}
                    githubLink={"https://github.com/vinitcs/EVI-app"}
                />

                <AppProjectCard
                    firstBtnLogo={'📍'}
                    firstBtnTxt={'Link'}
                    src={farm2tech}
                    title={"Farm2tech dairy app ui"}
                    description={"An app listed with dairy products can be added to the cart, with one-time order and monthly subscription"}
                    expLetterBtn={"none"}
                    outputLink={"https://drive.google.com/file/d/1XkZ8S83jSsYsRZoFsBWzo7fiw9KpEUHG/view?usp=sharing"}
                    githubLink={"https://github.com/vinitcs/farm2tech-monthly-subscription-app-ui"}
                />

                <WebProjectCard
                    firstBtnLogo={'📍'}
                    firstBtnTxt={'Link'}
                    src={bms}
                    title={"GIT Bus Card"}
                    description={"A portal that streamlines bus card access for college students, minimize physical card carry, reducing card loss, history of previous paid fees dates, and timely next fee due date alert via email"}
                    expLetterBtn={"none"}
                    outputLink={"https://gitbuscard.netlify.app/"}
                    githubLink={"https://github.com/vinitcs/GIT-Bus-Card-Management"}
                />
            </div>
        </section>
    );
}

export default Projects;
