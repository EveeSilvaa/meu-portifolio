import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects({ darkMode }: { darkMode: boolean }) {
  const projects = [
    {
      title: "TaskMaster",
      description: "Web application for organizing daily tasks efficiently using modern front-end technologies.",
      image: "public/projects/TodoList.PNG", // Changed to webp for better performance
      repoUrl: "https://github.com/EveeSilvaa/todo-list", 
      deployUrl: "https://todo-list-r7xi-eveesilvaas-projects.vercel.app/",
      tags: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      title: "Memory Game",
      description: "Memory card game with Adventure Time characters and accessibility features. The game has two versions, one in JS and one in Python.",
      image: "public/projects/memorygame.png",
      repoUrl: "https://github.com/EveeSilvaa/memorygame-adv", 
      deployUrl: "https://memorygame-adv.vercel.app/",
      tags: ["JavaScript", "HTML5", "CSS3", "Python"]
    },
    {
      title: "Travel Master",
      description: "TravelMaster is a travel app developed as an extension of a challenge proposed by DevEx Soluções. Initially, the challenge consisted of creating a login page, but I decided to expand the idea to build a complete travel app interface, with features such as destination search, weather forecast, and much more.",
      image: "public/projects/TravelMaster.png",
      repoUrl: "https://github.com/EveeSilvaa/Formulario-Login", 
      deployUrl: "https://formulario-login-hazel.vercel.app/",
      tags: ["React", "Axios", "CSS3", "Next.js", "Context API"]
    },
  ];

  return (
    <section 
      id="projects" 
      className={`py-16 md:py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
        >
          Recent Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-100'}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-600'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
                    aria-label="View code on GitHub"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            More projects in development...
          </p>
          <a
            href="https://github.com/EveeSilvaa"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}`}
          >
            <FaGithub className="mr-2" />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}