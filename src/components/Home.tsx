import Crachá from "./Crachá";

export default function Home() {
  const skills: string[] = ["React", "Node.js", "TypeScript", "CSS", "HTML", "Figma", "Python", "Java", "JavaScript"];

  return (
    <>
      {/* Seção About Me - Versão Aprimorada */}
      <div id="about" className="py-20 bg-black relative">
        <Crachá />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-right mb-8">About Me</h2>
          
          <div className="max-w-2xl ml-auto text-gray-300 space-y-4 text-right">
            <p className="text-lg leading-relaxed">
            I am a passionate full-stack developer focused on creating innovative and user-centric digital solutions. 
            With experience in modern web technologies such as React, Node.js, Java and TypeScript.
            </p>

            <ul className="space-y-2 text-purple-100">
              <li className="flex items-start justify-end gap-2">
                <span>🛠️</span>
                <span>Developing performant web applications with clean code</span>
              </li>
              <li className="flex items-start justify-end gap-2">
                <span>🎨</span>
                <span>Crafting intuitive UI/UX designs with Figma</span>
              </li>
              <li className="flex items-start justify-end gap-2">
                <span>🌐</span>
                <span>Implementing responsive cross-device designs</span>
              </li>
              <li className="flex items-start justify-end gap-2">
                <span>🔄</span>
                <span>Would like an opportunity to collaborate in agile teams for impactful projects</span>
              </li>
            </ul>

            <p className="text-lg mt-6 italic text-purple-400">
              "Bringing problem-solving creativity and continuous learning to every project."
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