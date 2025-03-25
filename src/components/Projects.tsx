
// src/sections/Projects.tsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

export default function Projects() {
  const projects = [
    {
      title: "TaskMaster",
      description: "Descrição do projeto 1",
      image: "src/assets/TodoList.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/todo-list", 
      deployUrl: "https://todo-list-r7xi-eveesilvaas-projects.vercel.app/", 
    },
    {
      title: "Jogo da Memória",
      description: "Descrição do projeto 2",
      image: "src/assets/jogomemoria.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/memorygame-adv", 
      deployUrl: "https://memorygame-adv.vercel.app/",
    },
    {
      title: "TravelMaster",
      description: "Descrição do projeto 3",
      image: "src/assets/TravelMaster.jpeg",
      repoUrl: "https://github.com/EveeSilvaa/Formulario-Login", 
      deployUrl: "https://formulario-login-hazel.vercel.app/", 
    },
  ];

  return (
    <section id="projects" className="py-20 text-center bg-black">
      <h2 className="text-4xl font-bold text-white">Projetos Recentes</h2>
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