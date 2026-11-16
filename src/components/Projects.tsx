import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaBookOpen } from 'react-icons/fa';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Reveal from './scroll/Reveal';
import { useLanguage } from '../i18n/useLanguage';
import type { Translations } from '../i18n/translations';

import TodoListImg from "@/assets/TodoList.png";
import MemoryGameImg from '@/assets/memorygame.png';
import TravelMasterImg from '@/assets/TravelMaster.png';
import hanamiCardapioImg from '@/assets/hanamiCardapio.png';
import financeFlowImg from '@/assets/financeFlow.webp';

import movtecSiteImg from '@/assets/movtec/movtec-site.webp';
import bravaSupplyImg from '@/assets/movtec/brava-supply.webp';
import genInRioImg from '@/assets/movtec/gen-in-rio.webp';
import expanImoveisImg from '@/assets/movtec/expan-imoveis.webp';
import portalEcoEscolaImg from '@/assets/movtec/portal-eco-escola.webp';
import riodisaImg from '@/assets/movtec/riodisa.webp';
import zcsSupplyImg from '@/assets/movtec/zcs-supply.webp';

type ProjectKey = keyof Translations['projects']['items'];

type ProjectData = {
  key: ProjectKey;
  image: string;
  tags: string[];
  repoUrl?: string;
  deployUrl?: string;
  caseUrl?: string;
  status?: 'delivered' | 'building';
};

type Project = ProjectData & { title: string; description: string };

const MOVTEC_CASES = 'https://movtec.com.br/en/cases';

const professionalData: ProjectData[] = [
  {
    key: 'movtec',
    image: movtecSiteImg,
    deployUrl: 'https://movtec.com.br/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
    status: 'delivered',
  },
  {
    key: 'brava',
    image: bravaSupplyImg,
    deployUrl: 'https://bravasupply.com.br/',
    caseUrl: `${MOVTEC_CASES}/brava-supply`,
    tags: ['Next.js', 'Animations', 'Corporate site', 'Offshore'],
    status: 'delivered',
  },
  {
    key: 'eco',
    image: portalEcoEscolaImg,
    caseUrl: `${MOVTEC_CASES}/portal-eco-escola`,
    tags: ['Web system', 'School ERP', 'Inventory', 'OMR'],
    status: 'delivered',
  },
  {
    key: 'expan',
    image: expanImoveisImg,
    caseUrl: `${MOVTEC_CASES}/expan-imoveis`,
    tags: ['Web system', 'Integrations', 'Superlógica', 'CRM'],
    status: 'delivered',
  },
  {
    key: 'gen',
    image: genInRioImg,
    deployUrl: 'https://eventos.movtec.com.br/',
    caseUrl: `${MOVTEC_CASES}/gen-in-rio`,
    tags: ['Landing page', 'Google Cloud', 'Generative AI', 'Lead capture'],
    status: 'delivered',
  },
  {
    key: 'riodisa',
    image: riodisaImg,
    deployUrl: 'https://riodisa.com.br/',
    caseUrl: `${MOVTEC_CASES}/riodisa`,
    tags: ['Portal', 'Catalog', 'Logistics'],
    status: 'building',
  },
  {
    key: 'zcs',
    image: zcsSupplyImg,
    deployUrl: 'https://zcssupply.com.br/',
    caseUrl: `${MOVTEC_CASES}/zcs-supply`,
    tags: ['Portal', 'Catalog', 'PPE', 'Offshore'],
    status: 'building',
  },
];

const personalData: ProjectData[] = [
  {
    key: 'hanami',
    image: hanamiCardapioImg,
    deployUrl: 'https://hanami-in.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
  },
  {
    key: 'taskmaster',
    image: TodoListImg,
    repoUrl: 'https://github.com/EveeSilvaa/todo-list',
    deployUrl: 'https://todo-list-r7xi-eveesilvaas-projects.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    key: 'memory',
    image: MemoryGameImg,
    repoUrl: 'https://github.com/EveeSilvaa/memorygame-adv',
    deployUrl: 'https://memorygame-adv-gvx8.vercel.app/',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    key: 'travel',
    image: TravelMasterImg,
    repoUrl: 'https://github.com/EveeSilvaa/Travel-Guide',
    deployUrl: 'https://travel-guide-alpha-ebon.vercel.app/',
    tags: ['React', 'CSS3', 'Next.js', 'Context API'],
  },
  {
    key: 'finance',
    image: financeFlowImg,
    repoUrl: 'https://github.com/EveeSilvaa/controles-contas',
    deployUrl: 'https://controles-contas.vercel.app/',
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Open Finance'],
  },
];

function localize(data: ProjectData[], t: Translations): Project[] {
  return data.map((d) => ({ ...d, ...t.projects.items[d.key] }));
}

function ProjectCard({
  project,
  index,
  darkMode,
  className = '',
  animateIn = true,
  compact = false,
}: {
  project: Project;
  index: number;
  darkMode: boolean;
  className?: string;
  animateIn?: boolean;
  /** Versão mais baixa para a esteira horizontal caber em telas menores. */
  compact?: boolean;
}) {
  const { t } = useLanguage();
  const linkClass = `flex items-center gap-1 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`;

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 50, scale: 0.95 } : false}
      whileInView={animateIn ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`flex flex-col rounded-2xl overflow-hidden shadow-lg transition-colors border ${darkMode ? 'bg-gray-900/80 border-purple-900/40 hover:border-purple-500/60' : 'bg-white/90 border-gray-200 hover:border-purple-400'} backdrop-blur-sm ${className}`}
    >
      <div className={`relative overflow-hidden ${compact ? 'h-36 lg:h-44' : 'h-48'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {project.status === 'building' && (
          <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-amber-500/90 text-white shadow">
            {t.projects.inProgress}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {project.title}
        </h3>

        <p className={`mb-4 ${compact ? 'text-sm line-clamp-4' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>

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

        <div className="flex justify-center gap-6 mt-auto pt-2">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={t.projects.aria.code}>
              <FaGithub className="text-xl" />
              <span className="text-sm">{t.projects.code}</span>
            </a>
          )}

          {project.caseUrl && (
            <a href={project.caseUrl} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={t.projects.aria.caseStudy}>
              <FaBookOpen className="text-xl" />
              <span className="text-sm">{t.projects.caseStudy}</span>
            </a>
          )}

          {project.deployUrl && (
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={t.projects.aria.live}>
              <FaExternalLinkAlt className="text-xl" />
              <span className="text-sm">{project.caseUrl || project.status ? t.projects.live : t.projects.demo}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


/** Esteira horizontal: a seção é alta, o conteúdo fica preso e o scroll vertical move os cards para o lado. */
function HorizontalProjects({ projects, darkMode }: { projects: Project[]; darkMode: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    const measure = () => {
      const v = viewportRef.current;
      const t = trackRef.current;
      if (!v || !t) return;
      setMaxX(Math.max(0, t.scrollWidth - v.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [projects.length]);

  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -maxX]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <div ref={sectionRef} className="relative" style={{ height: `${Math.max(220, projects.length * 42)}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-14">
        <ProfessionalHeading darkMode={darkMode} />

        <div ref={viewportRef} className="w-full">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 md:px-12 w-max will-change-transform">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                darkMode={darkMode}
                animateIn={false}
                compact
                className="w-[20rem] lg:w-[24rem] shrink-0"
              />
            ))}
            {/* respiro no final da esteira */}
            <div className="w-6 shrink-0" />
          </motion.div>
        </div>

        {/* indicador de progresso da esteira */}
        <div className="mx-auto mt-5 w-48 h-1 rounded-full overflow-hidden bg-purple-500/20">
          <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>
        <p className={`mt-2 text-center text-xs tracking-[0.3em] uppercase ${darkMode ? 'text-purple-300/70' : 'text-purple-600/70'}`}>
          {t.projects.keepScrolling}
        </p>
      </div>
    </div>
  );
}

function ProfessionalHeading({ darkMode }: { darkMode: boolean }) {
  const { t } = useLanguage();
  return (
    <Reveal className="mb-6 md:mb-8 text-center px-4">
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]`}>
        {t.projects.professionalTitle}
      </h2>
      <p className={`mt-4 max-w-2xl mx-auto flex items-center justify-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <FaBriefcase />
        <span>
          {t.projects.professionalSubtitle}{' '}
          <a
            href="https://movtec.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold underline-offset-4 hover:underline ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
          >
            Movtec
          </a>
        </span>
      </p>
    </Reveal>
  );
}

export default function Projects({ darkMode }: { darkMode: boolean }) {
  const headingClass = `text-3xl md:text-5xl font-bold text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'} drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]`;
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const reduce = useReducedMotion();
  const horizontal = isDesktop && !reduce;
  const { t } = useLanguage();
  const professionalProjects = localize(professionalData, t);
  const personalProjects = localize(personalData, t);

  return (
    <section id="projects" className="py-16 md:py-0">
      {horizontal ? (
        <HorizontalProjects projects={professionalProjects} darkMode={darkMode} />
      ) : (
        <div className="container mx-auto px-4">
          <ProfessionalHeading darkMode={darkMode} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} />
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-4">
        {/* Personal projects */}
        <Reveal className="mb-12">
          <h2 className={headingClass}>{t.projects.personalTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} />
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
            {t.projects.more}
          </p>
          <a
            href="https://github.com/EveeSilvaa"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}`}
          >
            <FaGithub className="mr-2" />
            {t.projects.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
