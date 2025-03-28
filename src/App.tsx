// src/App.tsx
import Navbar from './components/Navbar';
import YugiohCard from './components/Crachá';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';


export default function App() {
  return (
    <div className="center bg-black text-white min-h-screen overflow-hidden">
      <Navbar />
      <YugiohCard />
      <Home />
      <About /> 
      {/* <Skills /> */}
      {/* <Education /> */}
      <Projects />
      <Contact />
    </div>
  );
}