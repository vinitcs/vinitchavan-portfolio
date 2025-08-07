import styles from './ProjectsStyles.module.css';
import DisplayCard from '../../components/ProjectCard/DisplayCard';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h2 className='sectionTitle'>Projects</h2>
            <DisplayCard />
        </section>
    );
}

export default Projects;
