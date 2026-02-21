
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
}
