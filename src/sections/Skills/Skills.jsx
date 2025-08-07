import React from 'react';
import styles from './SkillsStyles.module.css';
// import SkillList from '../../components/SkillList/SkillList';
import InfiniteMarquee from '../../components/Marquee/InfiniteMarquee';

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";


function Skills() {

    // const skillsData = [
    //     { icon: 'html5', label: 'HTML5' },
    //     { icon: 'css3', label: 'CSS' },
    //     { icon: 'javascript', label: 'JavaScript' },
    //     { icon: 'reactjs', label: 'React.js' },
    //     { icon: 'reactnative', label: 'React Native' },
    //     { icon: 'redux toolkit', label: 'Redux Toolkit' },
    //     { icon: 'nodejs', label: 'Node.js' },
    //     { icon: 'expressjs', label: 'Express.js' },
    //     { icon: 'mongodb', label: 'MongoDB' },
    //     { icon: 'mysql', label: 'MySQL' },
    //     { icon: 'restapi', label: 'Rest-Api' },
    //     { icon: 'jwt', label: 'JWT' },
    //     { icon: 'git', label: 'GIT' },
    //     { icon: 'github', label: 'GitHub' },
    //     { icon: 'postman', label: 'Postman' },
    //     { icon: 'canva', label: 'Canva' },
    //     { icon: 'figma', label: 'Figma' }
    // ];

    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];


    return (
        <section id='skills' className={styles.container}>
            <h2 className='sectionTitle'>Skills</h2>

            <div className={styles.skillList}>

                <InfiniteMarquee
                    className='im-1'
                    dataType='image'
                    // dataArray={skillsData.map(({ icon, label }) => (
                    //     <SkillList key={label} iconName={icon} skill={label} />
                    // ))}
                    dataArray={imgs}
                    speed={100000}
                    direction='left'
                />
            </div>
        </section>
    );
}

export default Skills;
