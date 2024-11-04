import React from 'react';
import styles from "./SkillListStyles.module.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoGithub } from "react-icons/io";
import { FaReact, FaFigma } from "react-icons/fa";
import { MdGeneratingTokens } from "react-icons/md";
import { SiReact, SiExpress, SiMongodb, SiMysql, SiPostman, SiCanva, SiGit, SiRedux } from "react-icons/si";


function SkillList({ iconName, skill }) {
    // Create a mapping between iconName and actual icons
    const iconMapping = {
        html5: IoLogoHtml5,
        css3: IoLogoCss3,
        javascript: IoLogoJavascript,
        reactjs: FaReact,
        reactnative: SiReact,
        nodejs: IoLogoNodejs,
        expressjs: SiExpress,
        restapi: SiExpress,
        mysql: SiMysql,
        mongodb: SiMongodb,
        jwt: MdGeneratingTokens,
        git: SiGit,
        github: IoLogoGithub,
        postman: SiPostman,
        "redux toolkit": SiRedux,
        canva: SiCanva,
        figma: FaFigma,

    };

    // Get the appropriate icon component based on the iconName prop
    const IconComponent = iconMapping[iconName.toLowerCase()];

    return (
        <span className={styles.skillCell}>
            {IconComponent && <IconComponent />}
            <p>{skill}</p>
        </span>
    );
}

export default SkillList;
