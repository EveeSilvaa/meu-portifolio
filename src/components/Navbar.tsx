// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-center p-4 bg-black bg-opacity-80 backdrop-blur-lg z-50">
      <nav className="flex gap-6">
        <a href="#about" className="text-lg text-white hover:text-purple-500 transition-colors">About</a>
        <a href="#projects" className="text-lg text-white hover:text-purple-500 transition-colors">Projects</a>
        <a href="#contact" className="text-lg text-white hover:text-purple-500 transition-colors">Contact</a>
      </nav>
    </header>
  );
}