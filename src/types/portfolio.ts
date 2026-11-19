export interface ProjectItem {
  id: string;
  title: string;
  context: string;
  year: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface StackCategory {
  id: string;
  title: string;
  items: string[];
}

export interface AcademicItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  workload?: string;
  year?: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    monogram: string;
    role: string;
    statusBadge: string;
    subheadline: string;
    aboutBio: string[];
    location: string;
    email: string;
    linkedin: string;
    github: string;
    /**
     * Se você colocar um arquivo PDF estático na pasta `public/` (ex: "/curriculo-kaua-bernardes.pdf"),
     * pode informar o caminho aqui. Caso contrário, o botão gera automaticamente o currículo formatado
     * para impressão/PDF direto a partir dos dados deste arquivo.
     */
    customResumePdfUrl?: string;
  };
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  stackCategories: StackCategory[];
  academics: AcademicItem[];
  certifications: CertificationItem[];
  creativeHighlight: {
    badge: string;
    title: string;
    description: string;
  };
}
