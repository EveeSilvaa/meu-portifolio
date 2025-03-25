// src/pages/Home.tsx
export default function Home() {
  const skills: string[] = ["React", "Node.js", "TypeScript", "CSS", "HTML", "Figma", "Python", "Java", "JavaScript"];

  return (
    <>
      {/* Sobre Mim */}
      <div id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-right">Sobre Mim</h2>
          <div className="mt-8 max-w-2xl ml-auto text-gray-300">
            <p className="text-right">
              Sou uma desenvolvedora web apaixonada por criar soluções inovadoras e funcionais. 
              Tenho experiência com React, Node.js e design de interfaces. 
              Além de outras habilidades adquiridas por meio de projetos, trabalhos e estudos!
            </p>
          </div>
        </div>
      </div>

      {/* Habilidades Técnicas */}
      <div id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center">Habilidades Técnicas</h2>
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
          <h2 className="text-4xl font-bold text-white text-center">Formação</h2>
          <div className="mt-8 max-w-2xl mx-auto text-gray-300 text-center">
            <p>2023 - Atualmente...</p>
            <p className="text-xl font-semibold">Faculdade de Tecnologia</p>
            <p>Bacharelado em Análise e Desenvolvimento de Sistemas</p>
          </div>
        </div>
      </div>
    </>
  );
}