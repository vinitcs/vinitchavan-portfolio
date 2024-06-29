import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../components/SkillList/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
     const { theme } = useTheme();
     const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

     return (
          <section id='skills' className={styles.container}>
               <h1 className='sectionTitle'>Skills</h1>
               <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill={"HTML5"} />
                    <SkillList src={checkMarkIcon} skill={"CSS"} />
                    <SkillList src={checkMarkIcon} skill={"JavaScript"} />
                    <SkillList src={checkMarkIcon} skill={"Node"} />
                    <SkillList src={checkMarkIcon} skill={"React"} />
                    <SkillList src={checkMarkIcon} skill={"React Native"} />
                    <SkillList src={checkMarkIcon} skill={"MySQL"} />
                    <SkillList src={checkMarkIcon} skill={"Version Control"} />
                    <SkillList src={checkMarkIcon} skill={"Figma"} />
                    <SkillList src={checkMarkIcon} skill={"Canva"} />
               </div>
          </section>
     )
}

export default Skills