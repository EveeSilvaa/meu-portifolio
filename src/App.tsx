// src/App.tsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Links from './components/Links';
import ContactForm from './components/Contact';
import { FiSun, FiMoon } from 'react-icons/fi';



export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica a preferência salva ou do sistema
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Aplica o tema ao HTML root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Botão de alternância de tema */}
      <button
        onClick={toggleTheme}
        className="fixed right-3 top-1 z-50 p-2 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Alternar tema"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <Navbar darkMode={darkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Links darkMode={darkMode}/>
    </div>
  );
}