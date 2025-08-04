import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../components/SkillList/SkillList';

function Skills() {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList iconName={'html5'} skill={"HTML5"} />
                <SkillList iconName={'css3'} skill={"CSS"} />
                <SkillList iconName={'javascript'} skill={"JavaScript"} />
                <SkillList iconName={'reactjs'} skill={"React.js"} />
                <SkillList iconName={'reactnative'} skill={"React Native"} />
                <SkillList iconName={'redux toolkit'} skill={"Redux Toolkit"} />
                <SkillList iconName={'nodejs'} skill={"Node.js"} />
                <SkillList iconName={'expressjs'} skill={"Express.js"} />
                <SkillList iconName={'mongodb'} skill={"MongoDB"} />
                <SkillList iconName={'mysql'} skill={"MySQL"} />
                <SkillList iconName={'restapi'} skill={"Rest-Api"} />
                <SkillList iconName={'jwt'} skill={"JWT"} />
                <SkillList iconName={'git'} skill={"GIT"} />
                <SkillList iconName={'github'} skill={"GitHub"} />
                <SkillList iconName={'postman'} skill={"Postman"} />
                {/* <SkillList iconName={'canva'} skill={"Canva"} />
                <SkillList iconName={'figma'} skill={"Figma"} /> */}
            </div>
        </section>
    );
}

export default Skills;
