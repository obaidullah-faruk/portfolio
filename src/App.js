// import Particles from "react-tsparticles"; 
// import { loadFull } from "tsparticles"; 
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
// import SocialMedia from './components/SocialMedia';
import SocialMedia from './components/SocialMedia'
function App() {
  
  return (
    <>
     <Topbar />
     <Home />
     <Experience />
     <Skills />
     <Projects />
     <Contact />
     <SocialMedia />
     <Footer />
     </>
  );
}

export default App;
