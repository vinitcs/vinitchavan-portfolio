import { useState } from 'react';
import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
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
