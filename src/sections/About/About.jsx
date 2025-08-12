import styles from "./AboutStyles.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

const paragraph = "MERN developer skilled in building web and mobile applications using React.js, React Native, Node.js, and MongoDB. Adept at creating dynamic, scalable solutions that enhance performance and interactivity, while following industry standards for developing optimized APIs. Passionate about contributing to impactful projects while advancing my expertise.";

function About() {
     return (
          <section id='about' className={styles.container}>
               <h2>About me</h2>
               <Paragraph value={paragraph} />
          </section>
     )
}

export default About