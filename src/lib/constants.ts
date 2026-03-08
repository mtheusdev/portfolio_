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
    role: {
      pt: "Engenheiro de Software Sênior & Tech Lead",
      en: "Senior Software Engineer & Tech Lead",
    },
    stack: "React · React Native · Next.js · Redux",
    description: {
      pt: [
        "Tradução de layouts de alta fidelidade em interfaces responsivas (React/NextJS)",
        "Desenvolvimento de e-commerce / marketplace (Agroplayer) e automação de WhatsApp (Zap Suite)",
        "Integração RESTful, boas práticas de performance e acessibilidade",
      ],
      en: [
        "Translating high-fidelity layouts into responsive interfaces (React/NextJS)",
        "Development of e-commerce / marketplace (Agroplayer) and WhatsApp automation (Zap Suite)",
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
    role: {
      pt: "Engenheiro Full Stack Sênior",
      en: "Senior Full Stack Engineer",
    },
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
    role: {
      pt: "Tech Lead Full Stack Sênior",
      en: "Senior Full Stack Tech Lead",
    },
    stack: "React · NestJS · AWS · CI/CD · Context API",
    description: {
      pt: [
        "Aceleres AI: Produto voltado para avaliação e gestão de vendedores e equipes de vendas com Inteligência Artificial",
        "Liderança técnica, cerimônias ágeis e gestão no Jira",
        "CI/CD, AWS, caching e lazy loading",
      ],
      en: [
        "Aceleres AI: Product focused on evaluation and management of salespeople and sales teams using Artificial Intelligence",
        "Technical leadership, agile ceremonies, and Jira management",
        "CI/CD, AWS, caching, and lazy loading",
      ],
    },
  },
  {
    period: { pt: "jan 2023 → nov 2023", en: "Jan 2023 → Nov 2023" },
    company: "SB Group",
    role: {
      pt: "Desenvolvedor Full Stack Pleno (Autônomo)",
      en: "Mid-level Full Stack Developer (Freelance)",
    },
    stack: "React · NestJS · Node · MongoDB · AWS",
    description: {
      pt: [
        "SBI School: Sistema de gestão de escolas com cercamento eletrônico via IA",
        "SBI CheckIn: Sistema de check-in/out de alunos com reconhecimento de IA",
        "SBI City & Company: Sistemas de gestão inteligente de cidades e empresas com IA",
      ],
      en: [
        "SBI School: School management system with AI-powered electronic geofencing",
        "SBI CheckIn: Student check-in/out system powered by AI recognition",
        "SBI City & Company: Smart management systems for cities and companies using AI",
      ],
    },
  },
  {
    period: { pt: "jan 2023 → fev 2024", en: "Jan 2023 → Feb 2024" },
    company: "Flux (Protoflows)",
    role: {
      pt: "Desenvolvedor Full Stack Pleno",
      en: "Mid-level Full Stack Developer",
    },
    stack: "React Native · Expo · Node.js · GCP",
    description: {
      pt: [
        "Plataforma de pesquisa e avaliação estatística de interfaces através de testes A/B",
      ],
      en: [
        "Platform for research and statistical evaluation of interfaces through A/B testing",
      ],
    },
  },
  {
    period: { pt: "mar 2022 → jul 2023", en: "Mar 2022 → Jul 2023" },
    company: "UDESC",
    role: {
      pt: "Pesquisador Iniciação Científica (IA Aplicada)",
      en: "Undergraduate Researcher (Applied AI)",
    },
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
    role: {
      pt: "Desenvolvedor Frontend Junior",
      en: "Junior Frontend Developer",
    },
    stack: "React · CI/CD · DevOps · SCRUM",
    description: {
      pt: ["ERP SE Suite — features, testes unitários, manutenção"],
      en: ["SE Suite ERP — features, unit testing, maintenance"],
    },
  },
  {
    period: { pt: "ago 2020 → mai 2021", en: "Aug 2020 → May 2021" },
    company: "Urbanii",
    role: {
      pt: "Desenvolvedor Backend Junior",
      en: "Junior Backend Developer",
    },
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
      pt: "Plataforma de pesquisa e avaliação estatística de interfaces através de testes A/B e fluxos de interação interativos.",
      en: "Platform for research and statistical evaluation of interfaces through A/B testing and interactive interaction flows.",
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
      pt: "Produto voltado para avaliação e gestão de vendedores e equipes de vendas com Inteligência Artificial.",
      en: "Product focused on evaluation and management of salespeople and sales teams using Artificial Intelligence.",
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
      pt: "Gestão inteligente com IA: Cercamento eletrônico de escolas (School), check-in/out facial (CheckIn) e gestão de cidades e empresas (City/Company).",
      en: "Smart management with AI: Electronic geofencing for schools (School), facial check-in/out (CheckIn), and city/company management (City/Company).",
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
