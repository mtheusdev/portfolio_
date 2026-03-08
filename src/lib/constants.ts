export const PERSONAL_INFO = {
  name: "Matheus Henrique",
  role: {
    pt: "Senior Full Stack Engineer & Tech Lead",
    en: "Senior Full Stack Engineer & Tech Lead",
  },
  location: "Joinville, Santa Catarina, Brasil",
  email: "mtheussantosdev@gmail.com",
  linkedin: "https://www.linkedin.com/in/matheus-henrique-5072691b3",
  github: "https://github.com/mtheusdev",
  playstore: "https://play.google.com/store/apps/dev?id=7748561045371711792",
  yearsOfExperience: 5,
};

export const EXPERIENCES = [
  {
    period: { pt: "nov 2025 → atual", en: "Nov 2025 → Present" },
    company: "Penzo Tecnologia",
    role: "Senior Software Engineer & Tech Lead",
    stack: "React · React Native · Next.js · Redux",
    description: {
      pt: [
        "Tradução de layouts de alta fidelidade em interfaces responsivas (React/NextJS)",
        "Desenvolvimento do Agroplayer e automação Zap Suite",
        "Integração RESTful, boas práticas de performance e acessibilidade",
      ],
      en: [
        "Translating high-fidelity layouts into responsive interfaces (React/NextJS)",
        "Development of Agroplayer and Zap Suite automation",
        "RESTful integration, performance best practices and accessibility",
      ],
    },
    links: [
      { label: "Agroplayer", url: "https://agroplayer.com.br/" },
      { label: "Zap Suite", url: "https://chatbot.zapsuite.com.br/" },
    ],
  },
  {
    period: { pt: "mar 2025 → fev 2026", en: "Mar 2025 → Feb 2026" },
    company: "Merchion Tech",
    role: "Senior Full Stack Engineer",
    stack: "Next.js · Go · PostgreSQL · Laravel · Nuxt.js · NestJS · VPS",
    description: {
      pt: [
        "Sistemas para aviação, saúde, automotivo e marketing digital",
        "Integração com CAVOK, Omie ERP, Asaas",
        "Arquitetura escalável do zero",
      ],
      en: [
        "Systems for aviation, healthcare, automotive and digital marketing",
        "Integration with CAVOK, Omie ERP, Asaas",
        "Scalable architecture from scratch",
      ],
    },
  },
  {
    period: { pt: "nov 2023 → mar 2025", en: "Nov 2023 → Mar 2025" },
    company: "SB Group",
    role: "Tech Lead Full Stack Sênior",
    stack: "React · NestJS · AWS · CI/CD · Context API",
    description: {
      pt: [
        "Produto escalável Aceleres AI focando na experiência do usuário",
        "Liderança técnica, cerimônias ágeis e gestão no Jira",
        "CI/CD, AWS, caching e lazy loading",
      ],
      en: [
        "Scalable Aceleres AI product focusing on user experience",
        "Technical leadership, agile ceremonies, and Jira management",
        "CI/CD, AWS, caching, and lazy loading",
      ],
    },
  },
  {
    period: { pt: "jan 2023 → nov 2023", en: "Jan 2023 → Nov 2023" },
    company: "SB Group",
    role: "Desenvolvedor Full Stack Pleno (Autônomo)",
    stack: "React · NestJS · Node · MongoDB · AWS",
    description: {
      pt: [
        "SBI School, SBI CheckIn, SBI City, SBI Company",
        "CI/CD e automação de deploys",
      ],
      en: [
        "SBI School, SBI CheckIn, SBI City, SBI Company",
        "CI/CD and deployment automation",
      ],
    },
  },
  {
    period: { pt: "jan 2023 → fev 2024", en: "Jan 2023 → Feb 2024" },
    company: "Flux (Protoflows)",
    role: "Desenvolvedor Full Stack Pleno",
    stack: "React Native · Expo · Node.js · GCP",
    description: {
      pt: [
        "Desenvolvimento Mobile escalável focado em inovação",
        "Colaboração com design e PMs para definir experiências sólidas",
      ],
      en: [
        "Scalable Mobile development focused on innovation",
        "Collaboration with design and PMs to define solid experiences",
      ],
    },
  },
  {
    period: { pt: "mar 2022 → jul 2023", en: "Mar 2022 → Jul 2023" },
    company: "UDESC",
    role: "Bolsista Iniciação Científica (IA Aplicada à Medicina)",
    stack: "Python · One-Class SVM · Machine Learning",
    description: {
      pt: [
        "Detecção de ceratocone com mapas epiteliais",
        "Parceria com Hospital de Olhos Sadalla Amin Ghanem",
        "TCC aprovado",
      ],
      en: [
        "Keratoconus detection using epithelial thickness maps",
        "Partnership with Sadalla Amin Ghanem Eye Hospital",
        "Approved Bachelor's Thesis",
      ],
    },
  },
  {
    period: { pt: "mai 2021 → mar 2022", en: "May 2021 → Mar 2022" },
    company: "SoftExpert",
    role: "Desenvolvedor Frontend Junior",
    stack: "React · CI/CD · DevOps · SCRUM",
    description: {
      pt: ["ERP SE Suite — features, testes unitários, manutenção"],
      en: ["SE Suite ERP — features, unit testing, maintenance"],
    },
  },
  {
    period: { pt: "ago 2020 → mai 2021", en: "Aug 2020 → May 2021" },
    company: "Urbanii",
    role: "Desenvolvedor Backend Junior",
    stack: "PHP 7 · MySQL · Google Cloud Platform",
    description: {
      pt: ["API de integrações externas"],
      en: ["External integrations API"],
    },
  },
];

export const PROJECTS = [
  {
    id: "agroplayer",
    category: { pt: "Agronegócio", en: "Agribusiness" },
    year: "2025",
    title: "Agroplayer",
    description: {
      pt: "Marketplace digital para o agronegócio brasileiro, construído do zero com foco em escalabilidade e alto volume de usuários.",
      en: "Digital marketplace for Brazilian agribusiness, built from scratch focusing on scalability and high user volume.",
    },
    stack: ["Next.js", "NestJS", "PostgreSQL", "DevOps"],
    image: "/images/projects/agroplayer.png",
    link: "https://agroplayer.com.br/",
  },
  {
    id: "zapsuite",
    category: { pt: "Automação / SaaS", en: "Automation / SaaS" },
    year: "2025",
    title: "Zap Suite",
    description: {
      pt: "Plataforma de automação para WhatsApp com foco em escalabilidade, utilizada por milhares de usuários e empresas.",
      en: "WhatsApp automation platform focusing on scalability, used by thousands of users and companies.",
    },
    stack: ["Node.js", "NestJS", "Next.js", "PostgreSQL"],
    image: "/images/projects/zapsuite.png",
    link: "https://chatbot.zapsuite.com.br/",
  },
  {
    id: "flux",
    category: { pt: "Startup / Inovação", en: "Startup / Innovation" },
    year: "2024",
    title: "Flux",
    description: {
      pt: "Desenvolvimento do produto inovador da startup Flux (Protoflows), atuando focado no ecossistema cloud.",
      en: "Development of the innovative product for Flux (Protoflows) startup, focusing on the cloud ecosystem.",
    },
    stack: ["React", "Node.js", "Firebase", "GCP"],
    image: "/images/projects/flux.png",
    link: "https://testwithflux.com/",
  },
  {
    id: "aceleresai",
    category: { pt: "IA / SaaS", en: "AI / SaaS" },
    year: "2024",
    title: "Aceleres AI",
    description: {
      pt: "Plataforma SaaS de aceleração de negócios focada no uso de Inteligência Artificial e automações integradas.",
      en: "Business acceleration SaaS platform focused on the use of Artificial Intelligence and integrated automations.",
    },
    stack: ["React", "NestJS", "Node.js", "AWS"],
    image: "/images/projects/aceleres.png",
    link: "https://aceleres.ai/",
  },
  {
    id: "sbisecurity",
    category: { pt: "Segurança / Enterprise", en: "Security / Enterprise" },
    year: "2023",
    title: "SBI Security Suite",
    description: {
      pt: "Ecossistema robusto de produtos de gestão e controle (School, CheckIn, City, Company) para a área de segurança patrimonial.",
      en: "Robust ecosystem of management and control products (School, CheckIn, City, Company) for the corporate security area.",
    },
    stack: ["React", "NestJS", "MongoDB", "AWS"],
    image: "/images/projects/sbisecurity.png",
    link: "https://www.sbisecurity.ai/",
  },
  {
    id: "keratoconus",
    category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
    year: "2023",
    title: "IA Detecção Ceratocone",
    description: {
      pt: "Modelo de Machine Learning para detecção de ceratocone usando One-Class SVM sobre dados visuais.",
      en: "Machine Learning model for keratoconus detection using One-Class SVM on visual data.",
    },
    stack: ["Python", "scikit-learn", "Machine Learning"],
    image: "/images/projects/ceratocone.jpg",
    link: "https://sistemabu.udesc.br/pergamumweb/vinculos/0000a8/0000a853.pdf",
  },
  {
    id: "urbanii",
    category: { pt: "Gestão / ERP", en: "Management / ERP" },
    year: "2021",
    title: "Urbanii",
    description: {
      pt: "Sistema de gestão completo com desenvolvimento da API no backend usando PHP e banco de dados relacional.",
      en: "Complete management system with backend API development using PHP and relational database.",
    },
    stack: ["PHP 7", "MySQL", "GCP"],
    image: "/images/projects/urbanii.png",
    link: "https://urbanii.com.br/",
  },
  {
    id: "sorteador-de-letras",
    category: { pt: "Mobile / Utilitário", en: "Mobile / Utility" },
    year: "2023",
    title: "Sorteador de Letras",
    description: {
      pt: "Aplicativo utilitário disponível na Google Play Store para realizar sorteios de letras de forma prática.",
      en: "Utility app available on the Google Play Store for practical letter drawing.",
    },
    stack: ["React Native", "Expo", "Google Play"],
    image: "/images/projects/sorteador.webp",
    link: "https://play.google.com/store/apps/dev?id=7748561045371711792",
  },
  {
    id: "quem-sou-eu-biblico",
    category: { pt: "Mobile / Hobby", en: "Mobile / Hobby" },
    year: "2024",
    title: "Quem sou eu Bíblico",
    description: {
      pt: "Um jogo de adivinhação focado em personagens bíblicos, criado com React Native e Expo.",
      en: "A guessing game focused on biblical characters, built with React Native and Expo.",
    },
    stack: ["React Native", "Expo", "Mobile"],
    image: "/images/projects/quemsoueu.jpg",
  },
  {
    id: "contador-treinos",
    category: { pt: "Mobile / Saúde", en: "Mobile / Health" },
    year: "2023",
    title: "Contador de Treinos",
    description: {
      pt: "Aplicativo pessoal para ajudar a controlar e contar a rotina de treinos na academia.",
      en: "Personal app to help track and count gym workout routines.",
    },
    stack: ["React Native", "Expo", "Mobile"],
    image: "/images/projects/contador.png",
  },
];

export const SKILLS = {
  frontend: [
    { name: "React / React Native", level: "Expert", progress: 95 },
    { name: "Next.js", level: "Expert", progress: 95 },
    { name: "Expo / App Stores", level: "Advanced", progress: 85 },
    { name: "Redux / Context API", level: "Advanced", progress: 90 },
    { name: "TypeScript / JS", level: "Expert", progress: 95 },
    { name: "HTML5 / CSS3", level: "Expert", progress: 95 },
    { name: "Tailwind", level: "Expert", progress: 90 },
    { name: "Acessibilidade / UX", level: "Intermediate", progress: 80 },
    { name: "Performance (Lazy/Cache)", level: "Advanced", progress: 85 },
  ],
  backend: [
    "Node.js",
    "Integração RESTful",
    "NestJS",
    "Go",
    "PHP/Laravel",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "CI/CD",
    "DevOps",
    "VPS",
    "Firebase",
    "GCP",
  ],
  tools: [
    "Git",
    "CI / CD",
    "Ambiente Ágil (Scrum/Kanban)",
    "Clean Architecture",
    "Integração de APIs Front-end",
    "Figma à Interface Real",
    "Code Review & Boas Práticas",
  ],
};

export const RECOMMENDATIONS = [
  {
    name: "Carlos Eduardo Vieira",
    role: "IT Project Manager",
    relationship: { pt: "Trabalhou com Matheus", en: "Worked with Matheus" },
    text: {
      pt: "Excelente profissional. Técnico, organizado e com grande capacidade de resolução de problemas complexos na engenharia de software.",
      en: "Excellent professional. Technical, organized, and with a great capacity for solving complex problems in software engineering.",
    },
  },
  {
    name: "Esaú Bandeira",
    role: "Backend Software Engineer",
    relationship: { pt: "Trabalhou com Matheus", en: "Worked with Matheus" },
    text: {
      pt: "O Matheus é um dos melhores desenvolvedores com quem já trabalhei. A visão de arquitetura dele mudou o rumo dos nossos principais projetos.",
      en: "Matheus is one of the best developers I've ever worked with. His architectural vision changed the course of our main projects.",
    },
  },
  {
    name: "Matheus Wilgen Gonçalves",
    role: "Software Engineer",
    relationship: { pt: "Trabalhou com Matheus", en: "Worked with Matheus" },
    text: {
      pt: "Sempre disposto a ajudar, e seu código é incrivelmente limpo. Como tech lead, guiou a equipe para entregas com velocidade e muita qualidade.",
      en: "Always willing to help, and his code is incredibly clean. As a tech lead, he guided the team to fast, high-quality deliveries.",
    },
  },
  {
    name: "Márllon César",
    role: "Full Stack Developer",
    relationship: { pt: "Trabalhou com Matheus", en: "Worked with Matheus" },
    text: {
      pt: "Trabalhar em equipe com o Matheus foi uma grande escola. Ele domina o ecossistema React/Next.js como poucos no mercado.",
      en: "Working as a team with Matheus was a great school. He masters the React/Next.js ecosystem like few others in the market.",
    },
  },
  {
    name: "José Silveira",
    role: "Backend Engineer @ Hubii",
    relationship: { pt: "Trabalhou com Matheus", en: "Worked with Matheus" },
    text: {
      pt: "Uma união rara de foco em UI/UX somado a um rigor técnico em backend e cloud. Entrega soluções end-to-end com facilidade.",
      en: "A rare combination of UI/UX focus with technical rigor in backend systems and cloud operations. Delivers end-to-end solutions efficiently.",
    },
  },
];
