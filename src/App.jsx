import { useState } from 'react';
import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (
    <>
      <motion.div style={{ scaleX }} className='progressScrollBar' />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
