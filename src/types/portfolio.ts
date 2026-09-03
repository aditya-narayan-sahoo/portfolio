export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Industry {
  name: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  company: string;
  assignment: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  metrics: Metric[];
  languages: Language[];
  industries: Industry[];
}

export interface PipelineNode {
  id: string;
  name: string;
  tech: string;
  role: string;
  status: 'healthy' | 'warning' | 'critical';
  latency: string;
  throughput: string;
  description: string;
  icon: string;
}

export interface IncidentScenario {
  id: string;
  title: string;
  component: string;
  severity: string;
  symptom: string;
  logs: string[];
  rca: string;
  resolution: string[];
  affectedNode: string;
}

export interface ExperienceMetric {
  label: string;
  val: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge: string;
  summary: string;
  bullets: string[];
  skills?: string[];
  metrics?: ExperienceMetric[];
  techStack?: string[];
  assignment?: string;
}

export interface Skill {
  name: string;
  level: string;
  highlight: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface Credential {
  title: string;
  issuer: string;
  year: string;
  category: string;
  featured: boolean;
  code: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string;
}
