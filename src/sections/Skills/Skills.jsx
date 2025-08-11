import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../components/SkillList/SkillList';
// import InfiniteMarquee from '../../components/Marquee/InfiniteMarquee';
import { skillsData } from '../../data/SkillData';

// import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.png";
// import img3 from "../../assets/3.png";
// import img4 from "../../assets/4.png";
// import img5 from "../../assets/5.png";
// import img6 from "../../assets/6.png";
// import img7 from "../../assets/7.png";
// import img8 from "../../assets/8.png";


function Skills() {

    // const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <section id='skills' className={styles.container}>
            <h2 className='sectionTitle'>Skills</h2>

            <div className={styles.skillList}>
                {skillsData.map(({ icon, label }) => (
                    <SkillList key={label} iconName={icon} skill={label} />
                ))}

                {/* <InfiniteMarquee
                    className='im-1'
                    dataType='image'
                    // dataArray={imgs}
                    speed={50000}
                    direction='left'
                /> */}
            </div>
        </section>
    );
}

export default Skills;
