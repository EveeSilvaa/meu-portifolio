// src/components/Navbar.tsx
import { Link } from 'react-scroll';

export default function Navbar({ darkMode }: { darkMode: boolean }) {
  return (
    <header className={`fixed top-0 w-full z-40 backdrop-blur-lg ${darkMode ? 'bg-black/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-center">
        <div className="flex gap-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className={`text-lg cursor-pointer transition-colors ${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}