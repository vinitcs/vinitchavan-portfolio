import { useState } from 'react';
import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import { motion, useScroll } from "framer-motion";

function App() {
  // const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className='progressScrollBar' />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
