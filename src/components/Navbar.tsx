// src/components/Navbar.tsx
import { Link } from 'react-scroll';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLanguage } from '../i18n/useLanguage';

export default function Navbar({ darkMode }: { darkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const items = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-40 backdrop-blur-lg ${darkMode ? 'bg-black/70' : 'bg-white/70'} border-b ${darkMode ? 'border-purple-900/40' : 'border-purple-100'} shadow-lg`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {isOpen ? (
              <HiX className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            ) : (
              <HiMenu className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex justify-center items-center flex-1 gap-8">
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-64}
                activeClass={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                className={`
                  text-base lg:text-lg font-medium
                  cursor-pointer
                  transition-all duration-300
                  hover:scale-105
                  relative
                  ${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}
                  after:content-['']
                  after:absolute
                  after:w-0
                  after:h-[2px]
                  after:bottom-0
                  after:left-0
                  after:bg-current
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* espaço reservado para o seletor de idioma + tema (fixos no App) */}
          <div className="w-28 md:w-32" aria-hidden />
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-64}
                onClick={() => setIsOpen(false)}
                activeClass={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                className={`
                  text-base font-medium
                  cursor-pointer
                  transition-all duration-300
                  px-4 py-2 rounded-md
                  ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
