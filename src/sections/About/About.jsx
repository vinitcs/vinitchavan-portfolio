import styles from "./AboutStyles.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

const paragraph = "Versatile developer skilled in building user-centered web and mobile applications using React.js, React Native, and the MERN stack. Adept at creating dynamic, scalable solutions that enhance performance and interactivity. Seeking a full-time role to drive innovation and contribute to impactful projects while advancing my expertise.";

function About() {
     return (
          <section id='about' className={styles.container}>
               <h1>About me</h1>
               <Paragraph value={paragraph} />
          </section>
     )
}

export default About