import styles from "./AboutStyles.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

const paragraph = "MERN Stack Developer with experience in building web and mobile apps using React.js, React Native, Node.js, MongoDB and Postgresql. Skilled in RESTful APIs, database design, and cloud services, with a focus on performance and clean code.";

function About() {
     return (
          <section id='about' className={styles.container}>
               <h2>About me</h2>
               <Paragraph value={paragraph} />
          </section>
     )
}

export default About