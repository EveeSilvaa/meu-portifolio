import Crachá from '../components/Crachá'; // Importe o componente Crachá

export default function Home() {
  const skills: string[] = [
    "React", 
    "Node.js", 
    "TypeScript",
    "CSS", 
    "HTML", 
    "Figma", 
    "Python", 
    "Java", 
    "JavaScript", 
    "Tailwind CSS",
    "MySQL",
    "Bootstrap",
  ];

  return (
    <>
      {/* Sobre Mim */}
      <div id="about" className="py-20 bg-black relative"> {/* Adicione 'relative' aqui */}
        <Crachá /> {/* Adicione o Crachá dentro da seção About */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-right">About me</h2>
          <div className="mt-8 max-w-2xl ml-auto text-gray-300">
            <p className="text-right text-lg">
              I am a web developer passionate about creating innovative and functional solutions.
              I have experience with React, Node.js and interface design.
              In addition to other skills acquired through projects, work and studies!
            </p>
          </div>
        </div>
      </div>

      {/* Habilidades Técnicas */}
      <div id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center">Technical Skills</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {skills.map((skill: string, index: number) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg">
                <p className="text-neon">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formação */}
      <div id="education" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center">Training</h2>
          <div className="mt-8 max-w-2xl mx-auto text-gray-300 text-center">
            <p>2023 - Currently...</p>
            <p className="text-xl font-semibold">Faculty of Technology</p>
            <p>Bachelor's Degree in Systems Analysis and Development</p>
          </div>
        </div>
      </div>
    </>
  );
}