import styles from "./AboutStyles.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

const paragraph = "MERN stack developer with hands-on experience in React.js, React Native, Node.js, and MongoDB, specializing in building scalable and performance-driven web and mobile solutions. Skilled in designing and deploying secure, RESTful, and modular backend APIs, managing database structures, and implementing cloud-based services for media and data management. Proficient in handling real-world challenges such as optimizing API response times, ensuring data integrity, and managing production environments. Passionate about writing clean, maintainable code and leveraging technology to solve meaningful, real-world problems.";

function About() {
     return (
          <section id='about' className={styles.container}>
               <h2>About me</h2>
               <Paragraph value={paragraph} />
          </section>
     )
}

export default About