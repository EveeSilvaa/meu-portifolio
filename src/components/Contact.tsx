import { FaGithub, FaLinkedin, FaFileCsv } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" className="py-6 text-center bg-gray-800">
      <h2 className="text-4xl font-bold text-white">Contact</h2>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/EveeSilvaa" className="text-3xl text-purple-500 hover:text-purple-400 transition-colors"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/maeve-silva/" className="text-3xl text-purple-500 hover:text-purple-400 transition-colors"><FaLinkedin /></a>
        <a href="src/assets/curriculo.pdf" className="text-3xl text-purple-500 hover:text-purple-400 transition-colors"><FaFileCsv /></a>
      </div>
    </div>
  );
}