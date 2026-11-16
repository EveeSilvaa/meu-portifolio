// src/App.tsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Links from './components/Links';
import ContactForm from './components/Contact';
import ScrollProgress from './components/scroll/ScrollProgress';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './i18n/useLanguage';
import ParallaxBackground from './components/scroll/ParallaxBackground';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function App() {
  const { t } = useLanguage();
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-black' : 'bg-white'}`}>
      <ScrollProgress />
      <ParallaxBackground darkMode={darkMode} />

      {/* Idioma + tema (fixos no canto superior direito) */}
      <div className="fixed right-3 top-2 z-50 flex items-center gap-2">
        <LanguageSwitcher darkMode={darkMode} />
        <button
          onClick={toggleTheme}
          className="h-9 w-9 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors"
          aria-label={t.theme.toggle}
          title={t.theme.toggle}
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>

      <Navbar darkMode={darkMode} />

      <div className="relative z-10">
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Links darkMode={darkMode} />
      </div>
    </div>
  );
}
