import styles from "./AboutStyles.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

const paragraph = "MERN stack developer experienced in building web and mobile applications using React.js, React Native, Node.js, and MongoDB. Strong in RESTful APIs, database design, and cloud services, with a focus on performance, data integrity, and clean code.";

function About() {
     return (
          <section id='about' className={styles.container}>
               <h2>About me</h2>
               <Paragraph value={paragraph} />
          </section>
     )
}

export default About