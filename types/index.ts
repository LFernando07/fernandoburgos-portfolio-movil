export interface Project {
  id: string;
  title: string;
  company: string,
  icon: number;
  description: string;
  date: string,
  repoUrl: string,
  tech: string[];
  status: 'Completado' | 'En progreso';
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  creator: number,
  general: string,
}

export interface DividerProps {
  backgroundColor?: string,
  height?: number
  elevation?: number
}

export type TimelineItemProps = {
  id?: string;           // 👈 agrega
  title: string;
  company: string;
  location?: string;     // 👈 agrega
  date: string;
  bullets: string[];
  tech: string[];
  status: 'actual' | 'completado';
  isLast?: boolean;
}

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  status: 'actual' | 'completado';
  bullets: string[];
  tech: string[];
};

export interface Certification {
  name: string,
  certificateLink: string,
}