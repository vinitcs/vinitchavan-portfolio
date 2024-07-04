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
                <AppProjectCard src={eviapp} link={"https://github.com/vinitcs/EVI-app"} title={"EVIApp"} description={"Mobile app for Exposys Data Labs virtual internship registration and get notify on applying any internship"} />

                <AppProjectCard src={farm2tech} link={"https://github.com/vinitcs/farm2tech-monthly-subscription-app-ui"} title={"farm2tech monthly subscription app ui"} description={"Introducing Farm2Tech monthly subscriptions for fresh farm products—browse, select, and subscribe seamlessly with our user-friendly app"} />

                <WebProjectCard src={bms} link={"https://github.com/vinitcs/Bus-Management-System"} title={"Bus Management System"} description={"This is the College Bus Management Website where students can view their bus card and bus-related details through an online mode, to over physical card system"} />
            </div>
        </section>
    );
}

export default Projects;
