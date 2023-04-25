// import Particles from "react-tsparticles"; 
// import { loadFull } from "tsparticles"; 
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';


function App() {
  
  return (
    <>
     <Topbar />
     <Home />
     <Experience />
     <Skills />
     <Projects />
     <Resume />
     <Contact />
    </>
  );
}

export default App;
