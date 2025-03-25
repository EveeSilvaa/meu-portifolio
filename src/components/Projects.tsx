// src/sections/Projects.tsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

export default function Projects() {
  const projects = [
    {
      title: "TaskMaster",
      description: "TaskMaster project, a web application designed to help organize daily tasks efficiently. This project was created to improve front-end development skills using modern technologies and best coding practices.",
      image: "src/assets/TodoList.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/todo-list", 
      deployUrl: "https://todo-list-r7xi-eveesilvaas-projects.vercel.app/", 
    },
    {
      title: "Memory Game",
      description: "A memory card game featuring Adventure Time characters, designed with accessibility features for people with learning difficulties.",
      image: "src/assets/memorygame.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/memorygame-adv", 
      deployUrl: "https://memorygame-adv.vercel.app/",
    },
    {
      title: "TravelMaster",
      description: "TravelMaster is a travel app under construction",
      image: "src/assets/TravelMaster.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/Formulario-Login", 
      deployUrl: "https://formulario-login-hazel.vercel.app/", 
    },
    {
      title: "Login Page",
      description: "This project is an animated login page built using HTML and CSS. It features a simple and modern interface with smooth transitions and animations for a better user experience.",
      image: "src/assets/login page.png",
      repoUrl: "https://github.com/EveeSilvaa/Animation-login?tab=readme-ov-file",
      deployUrl: ""
    },
    {
      title: "Pokedex Python",
      description: "This project is a fun and interactive Pokémon viewer built using Python and Tkinter. It’s a great way to explore and learn more about your favorite Pokémon while practicing Python programming! 🌟",
      image: "src/assets/pokedex.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/pokedex-python",
      deployUrl: ""
    },
  ];

  return (
    <section id="projects" className="py-20 text-center bg-black">
      <h2 className="text-4xl font-bold text-white">Recent Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg">
            {/* Imagem do projeto */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />

            {/* Título e descrição */}
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>

            {/* Links para repositório e deploy */}
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaExternalLinkAlt className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}