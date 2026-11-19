import { PortfolioData } from "../types/portfolio";

/**
 * ARQUIVO CENTRAL DE DADOS DO PORTFÓLIO
 * Tudo o que você editar aqui atualiza automaticamente o site e o Gerador de Currículo Formatado (PDF).
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Kauã Bernardes",
    monogram: "KB",
    role: "Desenvolvedor de soluções digitais",
    statusBadge: "Disponível para oportunidades e projetos",
    subheadline:
      "Desenvolvo sistemas escaláveis e automações inteligentes que eliminam gargalos operacionais e conectam dados à tomada de decisão.",
    aboutBio: [
      "Sou Kauã Bernardes, desenvolvedor Full-Stack com experiência no desenvolvimento de soluções digitais voltadas à otimização de processos. Minha atuação integra desenvolvimento web, utilizando tecnologias como Node.js e PostgreSQL, automação de processos, análise de dados e aplicação de Inteligência Artificial (LLMs).",
      "Atualmente, desenvolvo automações e painéis analíticos para o SAP PM na operação da Transpetro, por meio da Prest Engenharia. Nesse contexto, uno conhecimentos de manutenção industrial e engenharia de software para transformar necessidades operacionais em ferramentas práticas, eficientes e orientadas a dados.",
      "Também participo de projetos de pesquisa em parceria com uma instituição de segurança pública, contribuindo para a consultoria técnica, o levantamento de requisitos e o desenvolvimento de sistemas digitais destinados à modernização de processos e à gestão de informações.",
    ],
    location: "Barra do Riacho, Aracruz - ES",
    email: "kauabernardes001@gmail.com",
    linkedin: "https://linkedin.com/in/kauabernardes",
    github: "https://github.com/kauabernardes",
  },

  projects: [
    {
      id: "sap-rpa-transpetro",
      title: "Automação RPA para SAP PM",
      context: "Transpetro / Prest Engenharia",
      year: "2026",
      summary:
        "Automações em Python e interfaces analíticas em Streamlit para automatizar a leitura, avaliação e gestão de Ordens de Manutenção no SAP PM no Terminal Aquaviário de Barra do Riacho.",
      tags: ["Python", "SAP PM", "Pandas", "Streamlit"],
    },
    {
      id: "dppi-policia-civil",
      title: "Sistema de Gestão de Denúncias",
      context: "Polícia Civil ES / IFES",
      year: "2026",
      summary:
        "Aplicação full-stack desenvolvida para a Delegacia de Proteção à Pessoa Idosa, com banco de dados PostgreSQL, API REST segura em Node.js/NestJS, interface responsiva em React e integrada com LLM da Mistral AI.",
      tags: [
        "TypeScript",
        "NestJS",
        "Node.js",
        "React",
        "PostgreSQL",
        "Mistral AI",
      ],
    },
    {
      id: "lumen-ai",
      title: "Lumen — Gestão de Estudos com IA",
      context: "IFES Campus Serra (TCC)",
      year: "2026",
      summary:
        "Plataforma multiplataforma (Web e Android) integrando sessões Pomodoro, gamificação, comunidades estudantis e assistente de estudos com Google Gemini AI.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Gemini AI",
        "Android",
        "Kotlin",
      ],
      repoUrl: "https://github.com/kauabernardes/lumen-android",
    },
    {
      id: "tmtr-realtime",
      title: "Sistema de Placar em Tempo Real (TMTR)",
      context: "II Torneio e Mostra de Robótica do IFES Campus Serra",
      year: "2025",
      summary:
        "Plataforma de pontuação ao vivo para torneios de robótica utilizando Node.js, WebSockets (Socket.IO) e React, garantindo sincronização instantânea entre mesas e telão.",
      tags: ["Node.js", "Socket.IO", "React", "TypeScript"],
      repoUrl: "https://github.com/kauabernardes",
    },
  ],

  experiences: [
    {
      id: "exp-transpetro",
      role: "Assistente Administrativo (Automação RPA)",
      company: "Prest Engenharia / Transpetro",
      location: "Terminal Aquaviário de Barra do Riacho, Aracruz - ES",
      period: "Out 2026 – Atual",
      current: true,
      bullets: [
        "Desenvolvimento de robôs em Python (win32com, Pandas) para automatizar avaliação e gestão de Ordens de Manutenção no SAP PM.",
        "Criação de interfaces analíticas em Streamlit e suporte às rotinas administrativas na Central de Serviço de manutenção da Transpetro.",
      ],
    },
    {
      id: "exp-policia-civil",
      role: "Bolsista de Iniciação Científica (Desenvolvimento Full-Stack)",
      company: "IFES & Polícia Civil do Espírito Santo",
      location: "Serra / Vitória - ES",
      period: "Set 2025 – Ago 2026",
      current: false,
      bullets: [
        "Levantamento de requisitos ágeis e modelagem de banco de dados PostgreSQL para o sistema de gestão de denúncias da Delegacia de Proteção à Pessoa Idosa.",
        "Desenvolvimento de API REST segura em Node.js/NestJS com autenticação JWT, WebSockets e frontend responsivo em React.",
        "Homologação e documentação de endpoints via Postman, com validação de retornos JSON e análise de logs.",
      ],
    },
    {
      id: "exp-estel",
      role: "Jovem Aprendiz em Mecânica de Manutenção",
      company: "Estel Serviços Industriais",
      location: "Espírito Santo",
      period: "Fev 2025 – Jun 2025",
      current: false,
      bullets: [
        "Vivência prática em rotinas de manutenção preventiva, organização operacional e cumprimento rigoroso de normas de segurança industrial.",
        "Base operacional que potencializa hoje a regra de negócios no desenvolvimento de automações para o SAP PM.",
      ],
    },
    {
      id: "exp-robotica",
      role: "Bolsista de Iniciação Científica (Robótica e Automação)",
      company: "IFES — NERA / NEEF",
      location: "Campus Serra - ES",
      period: "Set 2024 – Ago 2025",
      current: false,
      bullets: [
        "Desenvolvimento da arquitetura de protótipos de sistemas embarcados, montagem de circuitos e programação de microcontroladores.",
        "Organização logística e estrutural de eventos e torneios tecnológicos envolvendo cultura maker.",
      ],
    },
  ],

  stackCategories: [
    {
      id: "backend",
      title: "Backend & APIs",
      items: ["Node.js", "NestJS", "TypeScript", "REST", "WebSockets", "JWT"],
    },
    {
      id: "frontend",
      title: "Frontend",
      items: ["React", "Vite", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      id: "automation",
      title: "Automação & Dados",
      items: [
        "Python",
        "Pandas",
        "SAP GUI Scripting",
        "Streamlit",
        "PostgreSQL",
        "Excel",
      ],
    },
    {
      id: "devops",
      title: "Ferramentas & Infra",
      items: [
        "Docker",
        "Git & GitHub",
        "Postman",
        "Linux",
        "Microcontroladores",
      ],
    },
  ],

  // ============================================================================
  // FORMAÇÃO ACADÊMICA (Adicione quantas formações desejar)
  // ============================================================================
  academics: [
    {
      id: "ifes-tecnico",
      degree: "Técnico em Informática para Internet Integrado ao Ensino Médio",
      institution: "IFES — Instituto Federal do Espírito Santo (Campus Serra)",
      period: "Ago 2023 – Jul 2026",
      description:
        "Formação técnica com foco em engenharia de software, desenvolvimento web full-stack, banco de dados relacionais, arquitetura de sistemas e projetos de pesquisa aplicada.",
    },
  ],

  // ============================================================================
  // CURSOS & CERTIFICAÇÕES (Adicione N cursos/certificações independentes aqui)
  // ============================================================================
  certifications: [
    {
      id: "cert-nodejs-ifes",
      title: "Node.js para Iniciantes",
      issuer: "IFES",
      workload: "60h",
    },
    {
      id: "cert-react-udemy",
      title: "React do Zero a Maestria",
      issuer: "Udemy",
      workload: "32h",
    },
    {
      id: "cert-audiovisual-alura",
      title: "Produção Audiovisual e Edição de Vídeo",
      issuer: "Alura",
      workload: "22h",
    },
    {
      id: "cert-cinema-ibca",
      title: "Laboratório de Formação em Cinema",
      issuer: "IBCA",
      workload: "20h",
    },
    {
      id: "cert-robotica-crj",
      title: "Iniciação à Robótica",
      issuer: "CRJ Aracruz",
      workload: "12h",
    },
    {
      id: "cert-excel-alura",
      title: "Excel: Domine o Editor de Planilhas",
      issuer: "Alura",
      workload: "10h",
    },
  ],

  creativeHighlight: {
    badge: "Formação Multidisciplinar",
    title: "Pesquisador, extensionista e bolsista",
    description:
      "Durante minha formação no Instituto Federal, integrei dois grupos de pesquisa, participando de projetos de pesquisa aplicada. Em ambos, fui selecionado para receber bolsas de iniciação científica, contribuindo para o desenvolvimento de soluções e atividades de pesquisa nos respectivos programas e núcleos.",
  },
};
