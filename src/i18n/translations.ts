export type Lang = 'en' | 'pt' | 'es';

export const LANGUAGES: { code: Lang; label: string; short: string; flag: string; htmlLang: string }[] = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸', htmlLang: 'en' },
  { code: 'pt', label: 'Português', short: 'PT', flag: '🇧🇷', htmlLang: 'pt-BR' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸', htmlLang: 'es' },
];

const en = {
  nav: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
  theme: { toggle: 'Toggle theme' },
  language: { label: 'Change language' },
  hero: {
    role1: 'FULLSTACK',
    role2: 'Developer',
    bio: "Hello!! My name is Maria Evellyn, I'm a Full-Stack developer currently working at Movtec, building websites and web systems with React, Next.js, TypeScript and Java.",
    scroll: 'Scroll',
  },
  about: {
    title: 'About Me',
    intro:
      'I am a passionate full-stack developer focused on creating innovative and user-centric digital solutions. Currently I work at Movtec, building corporate websites, landing pages and web systems for clients, with modern technologies such as React, Next.js, Node.js, Java and TypeScript.',
    seeWhere: 'Want to see where I work?',
    bullets: [
      '🛠️ Developing performant web applications with clean code',
      '🎨 Crafting intuitive UI/UX designs with Figma',
      '🌐 Implementing responsive cross-device designs',
      '🤝 Collaborating with design, marketing and business teams to ship real client projects',
    ],
    quote: '"Bringing problem-solving creativity and continuous learning to every project."',
    skillsTitle: 'Technical Skills',
    experienceTitle: 'Experience',
    expRole: 'Full-Stack Developer',
    expCompany: 'Movtec · Rio de Janeiro, Brazil',
    expPeriod: '2026 – Present',
    expBullets: [
      'Redesigned and maintain the company website (Next.js, TypeScript, Tailwind CSS, Framer Motion), including bilingual content, dark/light theme and the case study pages.',
      'Build corporate websites, landing pages and web systems for clients such as Brava Supply, Portal Eco Escola, Expan Imóveis, Riodisa and ZCS Supply.',
      'Set up the static export and automated deploy to Hostinger, with PHP endpoints for the contact and lead forms.',
    ],
    educationTitle: 'Training',
    eduPeriod: 'Graduated in 2026',
    eduSchool: 'Faculty of Technology',
    eduDegree: 'Degree in Systems Analysis and Development',
  },
  contact: {
    title: "Let's Connect",
    intro:
      "I'm always excited to explore new opportunities and collaborations. Whether you want to discuss technology, have a project in mind, or just want to say hello - I'd love to hear from you!",
    success: "Message sent successfully! I'll get back to you soon.",
    formTitle: 'Send a Message',
    name: 'Name*',
    email: 'E-mail*',
    subject: 'Subject*',
    message: 'Message*',
    send: 'Send Message',
    sending: 'Sending...',
    errors: {
      name: 'Name is required',
      email: 'E-mail is required',
      emailInvalid: 'Invalid e-mail',
      subject: 'Subject is required',
      message: 'Message is required',
    },
  },
  projects: {
    professionalTitle: 'Professional Work',
    professionalSubtitle: 'Websites and systems I build as a Full-Stack Developer at',
    personalTitle: 'Personal Projects',
    keepScrolling: 'Keep scrolling',
    inProgress: 'In progress',
    code: 'Code',
    caseStudy: 'Case',
    live: 'Live',
    demo: 'Demo',
    more: 'More projects in development...',
    viewAll: 'View all on GitHub',
    aria: { code: 'View code on GitHub', caseStudy: 'Read the case study', live: 'View live site' },
    items: {
      movtec: {
        title: 'Movtec — Institutional Website',
        description:
          "Redesign and ongoing development of Movtec's corporate website: a Google-inspired visual identity, animated hero with particle effects, case study pages, bilingual content (pt-BR / EN), theme switching and a static export pipeline for Hostinger with PHP form endpoints.",
      },
      brava: {
        title: 'Brava Supply',
        description:
          'Animated corporate website for an offshore operations supply company, with scroll storytelling, a catalog of the sectors served, language selector and direct quotation CTAs.',
      },
      eco: {
        title: 'Portal Eco Escola',
        description:
          'Complete school management platform for EcoEscola Monteiro Lobato: attendance tracking, student incidents, inventory control, classes and optical exam grading (OMR).',
      },
      expan: {
        title: 'Expan Imóveis',
        description:
          'Billing and reconciliation dashboard that brings Superlógica and the company CRM together in a single panel, with invite-only access for the real estate team.',
      },
      gen: {
        title: 'Gen In Rio ’27',
        description:
          'Landing page for the Generative AI executive meetup with Google Cloud, focused on lead capture and interest sign-up for the event.',
      },
      riodisa: {
        title: 'Riodisa',
        description: 'New portal for global solutions in trade, logistics and industrial supplies, built as an industrial catalog.',
      },
      zcs: {
        title: 'ZCS Supply',
        description: 'Infrastructure, electrical and PPE catalog for offshore operations, presented as a supply portal.',
      },
      hanami: {
        title: 'Hanami Caféteria',
        description:
          'Online menu for a coffee shop, built with React, TypeScript and Motion for a friendly and intuitive interface. Customers add products to the bag, inform the table and the payment method, and place the order without going to the counter.',
      },
      taskmaster: {
        title: 'TaskMaster',
        description:
          'A sleek, interactive web app for effortless task and note management. With a colorful UI, smooth navigation and intuitive controls, it lets you add, view and organize tasks and notes with ease.',
      },
      memory: {
        title: 'Memory Game',
        description:
          'A fun card game featuring Adventure Time characters, designed to challenge your memory. With accessibility features, it comes in two versions: one in Python and another in JavaScript.',
      },
      travel: {
        title: 'Travel Master',
        description:
          'A travel app that started as a login challenge proposed by DevEx Soluções and evolved into a complete travel interface, with destination search, weather forecasts and more.',
      },
      finance: {
        title: 'FinanceFlow Pro - Controle de Contas',
        description:
          'Personal finance manager with user accounts and cloud-synced data: a complete dashboard with charts and real-time insights, bank connection via Open Finance, budget goals per category and due-date reminders so you never miss a payment.',
      },
    },
  },
  footer: {
    title: 'Connect With Me',
    rights: 'All rights reserved.',
    developedWith: 'Developed with:',
    github: 'GitHub Profile',
    linkedin: 'LinkedIn Profile',
    email: 'Send Email',
    phone: 'Phone Call',
    resume: 'Download Resume',
    resumeFile: '/Curriculo-Eng.pdf',
  },
};

export type Translations = typeof en;

const pt: Translations = {
  nav: { home: 'Início', about: 'Sobre', experience: 'Experiência', projects: 'Projetos', contact: 'Contato' },
  theme: { toggle: 'Alternar tema' },
  language: { label: 'Mudar idioma' },
  hero: {
    role1: 'FULLSTACK',
    role2: 'Developer',
    bio: 'Olá!! Meu nome é Maria Evellyn, sou desenvolvedora Full-Stack e atualmente trabalho na Movtec, criando sites e sistemas web com React, Next.js, TypeScript e Java.',
    scroll: 'Role',
  },
  about: {
    title: 'Sobre Mim',
    intro:
      'Sou uma desenvolvedora full-stack apaixonada por criar soluções digitais inovadoras e centradas no usuário. Atualmente trabalho na Movtec, construindo sites institucionais, landing pages e sistemas web para clientes, com tecnologias modernas como React, Next.js, Node.js, Java e TypeScript.',
    seeWhere: 'Quer ver onde eu trabalho?',
    bullets: [
      '🛠️ Desenvolvo aplicações web performáticas com código limpo',
      '🎨 Crio interfaces intuitivas (UI/UX) com Figma',
      '🌐 Implemento layouts responsivos para todos os dispositivos',
      '🤝 Colaboro com times de design, marketing e negócio para entregar projetos reais',
    ],
    quote: '"Levando criatividade na resolução de problemas e aprendizado contínuo para cada projeto."',
    skillsTitle: 'Habilidades Técnicas',
    experienceTitle: 'Experiência',
    expRole: 'Desenvolvedora Full-Stack',
    expCompany: 'Movtec · Rio de Janeiro, Brasil',
    expPeriod: '2026 – Atual',
    expBullets: [
      'Redesign e manutenção do site da empresa (Next.js, TypeScript, Tailwind CSS, Framer Motion), com conteúdo bilíngue, tema claro/escuro e páginas de cases.',
      'Desenvolvimento de sites institucionais, landing pages e sistemas web para clientes como Brava Supply, Portal Eco Escola, Expan Imóveis, Riodisa e ZCS Supply.',
      'Configuração da exportação estática e do deploy automatizado na Hostinger, com endpoints PHP para os formulários de contato e leads.',
    ],
    educationTitle: 'Formação',
    eduPeriod: 'Graduada em 2026',
    eduSchool: 'Faculdade de Tecnologia',
    eduDegree: 'Análise e Desenvolvimento de Sistemas',
  },
  contact: {
    title: 'Vamos Conversar',
    intro:
      'Estou sempre animada para explorar novas oportunidades e colaborações. Se você quer falar sobre tecnologia, tem um projeto em mente ou só quer dar um oi, vou adorar ouvir você!',
    success: 'Mensagem enviada com sucesso! Em breve eu respondo.',
    formTitle: 'Envie uma Mensagem',
    name: 'Nome*',
    email: 'E-mail*',
    subject: 'Assunto*',
    message: 'Mensagem*',
    send: 'Enviar Mensagem',
    sending: 'Enviando...',
    errors: {
      name: 'Nome é obrigatório',
      email: 'E-mail é obrigatório',
      emailInvalid: 'E-mail inválido',
      subject: 'Assunto é obrigatório',
      message: 'Mensagem é obrigatória',
    },
  },
  projects: {
    professionalTitle: 'Trabalhos Profissionais',
    professionalSubtitle: 'Sites e sistemas que desenvolvo como Desenvolvedora Full-Stack na',
    personalTitle: 'Projetos Pessoais',
    keepScrolling: 'Continue rolando',
    inProgress: 'Em construção',
    code: 'Código',
    caseStudy: 'Case',
    live: 'Site',
    demo: 'Demo',
    more: 'Mais projetos em desenvolvimento...',
    viewAll: 'Ver tudo no GitHub',
    aria: { code: 'Ver código no GitHub', caseStudy: 'Ler o case', live: 'Ver site no ar' },
    items: {
      movtec: {
        title: 'Movtec — Site Institucional',
        description:
          'Redesign e evolução contínua do site institucional da Movtec: identidade visual inspirada no Google, hero animado com partículas, páginas de cases, conteúdo bilíngue (pt-BR / EN), troca de tema e pipeline de exportação estática para a Hostinger com endpoints PHP para formulários.',
      },
      brava: {
        title: 'Brava Supply',
        description:
          'Site institucional animado para uma empresa de suprimentos para operações offshore, com storytelling em scroll, catálogo dos setores atendidos, seletor de idiomas e CTAs diretos de cotação.',
      },
      eco: {
        title: 'Portal Eco Escola',
        description:
          'Plataforma completa de gestão escolar da EcoEscola Monteiro Lobato: controle de frequência, ocorrências, estoque, turmas e correção óptica de provas (OMR).',
      },
      expan: {
        title: 'Expan Imóveis',
        description:
          'Painel de cobranças e conciliação que reúne a Superlógica e o CRM da empresa em um só lugar, com acesso por convite para a equipe da imobiliária.',
      },
      gen: {
        title: 'Gen In Rio ’27',
        description:
          'Landing page do encontro executivo de IA Generativa com o Google Cloud, focada em captação de leads e inscrição de interessados no evento.',
      },
      riodisa: {
        title: 'Riodisa',
        description: 'Novo portal de soluções globais em comércio, logística e suprimentos industriais, construído como catálogo industrial.',
      },
      zcs: {
        title: 'ZCS Supply',
        description: 'Catálogo de infraestrutura, elétrica e EPI para operações offshore, apresentado como portal de suprimentos.',
      },
      hanami: {
        title: 'Hanami Caféteria',
        description:
          'Cardápio online para uma cafeteria, feito com React, TypeScript e Motion para uma interface amigável e intuitiva. O cliente adiciona produtos à sacola, informa a mesa e a forma de pagamento e faz o pedido sem ir ao balcão.',
      },
      taskmaster: {
        title: 'TaskMaster',
        description:
          'Um app web elegante e interativo para gerenciar tarefas e notas sem esforço. Com interface colorida, navegação fluida e controles intuitivos, permite adicionar, visualizar e organizar tudo com facilidade.',
      },
      memory: {
        title: 'Jogo da Memória',
        description:
          'Um jogo de cartas divertido com personagens de Hora de Aventura, feito para desafiar sua memória. Com recursos de acessibilidade, tem duas versões: uma em Python e outra em JavaScript.',
      },
      travel: {
        title: 'Travel Master',
        description:
          'Um app de viagens que começou como um desafio de login proposto pela DevEx Soluções e evoluiu para uma interface completa, com busca de destinos, previsão do tempo e mais.',
      },
      finance: {
        title: 'FinanceFlow Pro - Controle de Contas',
        description:
          'Gestor de finanças pessoais com contas de usuário e dados sincronizados na nuvem: dashboard completo com gráficos e insights em tempo real, conexão bancária via Open Finance, metas de orçamento por categoria e lembretes de vencimento para nunca perder um pagamento.',
      },
    },
  },
  footer: {
    title: 'Fale Comigo',
    rights: 'Todos os direitos reservados.',
    developedWith: 'Desenvolvido com:',
    github: 'Perfil no GitHub',
    linkedin: 'Perfil no LinkedIn',
    email: 'Enviar e-mail',
    phone: 'Ligar',
    resume: 'Baixar currículo',
    resumeFile: '/Curriculo.pdf',
  },
};

const es: Translations = {
  nav: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
  theme: { toggle: 'Cambiar tema' },
  language: { label: 'Cambiar idioma' },
  hero: {
    role1: 'FULLSTACK',
    role2: 'Developer',
    bio: '¡Hola! Me llamo Maria Evellyn, soy desarrolladora Full-Stack y actualmente trabajo en Movtec, creando sitios web y sistemas con React, Next.js, TypeScript y Java.',
    scroll: 'Desliza',
  },
  about: {
    title: 'Sobre Mí',
    intro:
      'Soy una desarrolladora full-stack apasionada por crear soluciones digitales innovadoras y centradas en el usuario. Actualmente trabajo en Movtec, construyendo sitios corporativos, landing pages y sistemas web para clientes, con tecnologías modernas como React, Next.js, Node.js, Java y TypeScript.',
    seeWhere: '¿Quieres ver dónde trabajo?',
    bullets: [
      '🛠️ Desarrollo aplicaciones web de alto rendimiento con código limpio',
      '🎨 Diseño interfaces intuitivas (UI/UX) con Figma',
      '🌐 Implemento diseños responsivos para todos los dispositivos',
      '🤝 Colaboro con equipos de diseño, marketing y negocio para entregar proyectos reales',
    ],
    quote: '"Aportando creatividad para resolver problemas y aprendizaje continuo en cada proyecto."',
    skillsTitle: 'Habilidades Técnicas',
    experienceTitle: 'Experiencia',
    expRole: 'Desarrolladora Full-Stack',
    expCompany: 'Movtec · Río de Janeiro, Brasil',
    expPeriod: '2026 – Actualidad',
    expBullets: [
      'Rediseño y mantenimiento del sitio de la empresa (Next.js, TypeScript, Tailwind CSS, Framer Motion), con contenido bilingüe, tema claro/oscuro y páginas de casos de éxito.',
      'Desarrollo de sitios corporativos, landing pages y sistemas web para clientes como Brava Supply, Portal Eco Escola, Expan Imóveis, Riodisa y ZCS Supply.',
      'Configuración de la exportación estática y el despliegue automatizado en Hostinger, con endpoints PHP para los formularios de contacto y leads.',
    ],
    educationTitle: 'Formación',
    eduPeriod: 'Graduada en 2026',
    eduSchool: 'Facultad de Tecnología',
    eduDegree: 'Grado en Análisis y Desarrollo de Sistemas',
  },
  contact: {
    title: 'Hablemos',
    intro:
      'Siempre me entusiasma explorar nuevas oportunidades y colaboraciones. Si quieres hablar de tecnología, tienes un proyecto en mente o solo quieres saludar, ¡me encantará saber de ti!',
    success: '¡Mensaje enviado con éxito! Te responderé pronto.',
    formTitle: 'Envía un Mensaje',
    name: 'Nombre*',
    email: 'E-mail*',
    subject: 'Asunto*',
    message: 'Mensaje*',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    errors: {
      name: 'El nombre es obligatorio',
      email: 'El e-mail es obligatorio',
      emailInvalid: 'E-mail inválido',
      subject: 'El asunto es obligatorio',
      message: 'El mensaje es obligatorio',
    },
  },
  projects: {
    professionalTitle: 'Trabajo Profesional',
    professionalSubtitle: 'Sitios y sistemas que desarrollo como Desarrolladora Full-Stack en',
    personalTitle: 'Proyectos Personales',
    keepScrolling: 'Sigue deslizando',
    inProgress: 'En construcción',
    code: 'Código',
    caseStudy: 'Caso',
    live: 'Sitio',
    demo: 'Demo',
    more: 'Más proyectos en desarrollo...',
    viewAll: 'Ver todo en GitHub',
    aria: { code: 'Ver código en GitHub', caseStudy: 'Leer el caso de éxito', live: 'Ver sitio en vivo' },
    items: {
      movtec: {
        title: 'Movtec — Sitio Institucional',
        description:
          'Rediseño y evolución continua del sitio corporativo de Movtec: identidad visual inspirada en Google, hero animado con partículas, páginas de casos de éxito, contenido bilingüe (pt-BR / EN), cambio de tema y pipeline de exportación estática para Hostinger con endpoints PHP para formularios.',
      },
      brava: {
        title: 'Brava Supply',
        description:
          'Sitio corporativo animado para una empresa de suministros para operaciones offshore, con storytelling en scroll, catálogo de los sectores atendidos, selector de idioma y CTAs directos de cotización.',
      },
      eco: {
        title: 'Portal Eco Escola',
        description:
          'Plataforma completa de gestión escolar para EcoEscola Monteiro Lobato: control de asistencia, incidencias, inventario, clases y corrección óptica de exámenes (OMR).',
      },
      expan: {
        title: 'Expan Imóveis',
        description:
          'Panel de cobros y conciliación que reúne Superlógica y el CRM de la empresa en un solo lugar, con acceso por invitación para el equipo inmobiliario.',
      },
      gen: {
        title: 'Gen In Rio ’27',
        description:
          'Landing page del encuentro ejecutivo de IA Generativa con Google Cloud, enfocada en la captación de leads e inscripción de interesados en el evento.',
      },
      riodisa: {
        title: 'Riodisa',
        description: 'Nuevo portal de soluciones globales en comercio, logística y suministros industriales, construido como catálogo industrial.',
      },
      zcs: {
        title: 'ZCS Supply',
        description: 'Catálogo de infraestructura, electricidad y EPP para operaciones offshore, presentado como portal de suministros.',
      },
      hanami: {
        title: 'Hanami Caféteria',
        description:
          'Menú online para una cafetería, hecho con React, TypeScript y Motion para una interfaz amigable e intuitiva. El cliente agrega productos a la bolsa, indica la mesa y el método de pago, y hace el pedido sin ir al mostrador.',
      },
      taskmaster: {
        title: 'TaskMaster',
        description:
          'Una app web elegante e interactiva para gestionar tareas y notas sin esfuerzo. Con interfaz colorida, navegación fluida y controles intuitivos, permite agregar, ver y organizar todo con facilidad.',
      },
      memory: {
        title: 'Juego de Memoria',
        description:
          'Un divertido juego de cartas con personajes de Hora de Aventura, diseñado para desafiar tu memoria. Con funciones de accesibilidad, tiene dos versiones: una en Python y otra en JavaScript.',
      },
      travel: {
        title: 'Travel Master',
        description:
          'Una app de viajes que empezó como un reto de login propuesto por DevEx Soluções y evolucionó hasta una interfaz completa, con búsqueda de destinos, pronóstico del tiempo y más.',
      },
      finance: {
        title: 'FinanceFlow Pro - Control de Cuentas',
        description:
          'Gestor de finanzas personales con cuentas de usuario y datos sincronizados en la nube: dashboard completo con gráficos e insights en tiempo real, conexión bancaria vía Open Finance, metas de presupuesto por categoría y recordatorios de vencimiento para nunca perder un pago.',
      },
    },
  },
  footer: {
    title: 'Conecta Conmigo',
    rights: 'Todos los derechos reservados.',
    developedWith: 'Desarrollado con:',
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    email: 'Enviar e-mail',
    phone: 'Llamar',
    resume: 'Descargar currículum',
    resumeFile: '/Curriculo-Eng.pdf',
  },
};

export const translations: Record<Lang, Translations> = { en, pt, es };
