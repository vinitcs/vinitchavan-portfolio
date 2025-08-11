import React from 'react';
import styles from "./SkillListStyles.module.css";
import { iconMapping } from '../../utils/icons/icons';


function SkillList({ iconName, skill }) {
    // Get the appropriate icon component based on the iconName prop
    const IconComponent = iconMapping[iconName.toLowerCase()];

    return (
        <div className={styles.skillCell}>
            {IconComponent && <IconComponent size={20}/>}
            <span>{skill}</span>
        </div>
    );
}

export default SkillList;
