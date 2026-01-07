import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Sebastian Retana",
  title: "Full-Stack Software Developer",
  about: "Full-stack software developer with hands-on experience building web applications using React, Node.js, .NET, Python, and SQL. Strong problem-solving skills, solid software fundamentals, and real-world project experience. Fast learner, adaptable, and comfortable with new technologies.",
  email: "sebasretana27@gmail.com",
  linkedin: "https://www.linkedin.com/in/sebastian-retana-5060b42ba/",
  github: "https://github.com/Sebastian-Retana27",
  skills: [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 85 },
    { name: ".NET", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Java", level: 70 },
    { name: "C#", level: 75 }
  ],
  experience: [
    {
      company: "Freelance",
      role: "Full-Stack Software Developer",
      period: "Jul 2024 - Present",
      description: [
        "Developed full-stack web applications using React, Node.js, .NET, Python, and SQL.",
        "Built and consumed REST APIs with CRUD functionality.",
        "Debugged, optimized, and maintained codebases for various clients."
      ]
    },
    {
      company: "Freelance",
      role: "Software & IT Technician",
      period: "Jan 2023 - Present",
      description: [
        "Provided software troubleshooting and technical support.",
        "Analyzed and resolved system and configuration issues.",
        "Communicated technical concepts to non-technical users effectively."
      ]
    }
  ],
  projects: [
    {
      title: "Game UI Dashboard",
      description: "Panel de progreso inmersivo para juegos. Incluye seguimiento de misiones, sistema de experiencia (EXP), logros desbloqueables y personalizacion de temas (HUD) con una estetica oscura de alto contraste.",
      tags: ["React", "Tailwind CSS", "Game Design", "Dashboard"],
      link: "https://github.com/Sebastian-Retana27/Game-UI-Dashboard",
      image: "/projects/GameUIDashboard.png"
    },
    {
      title: "Multitool SPA",
      description: "Una navaja suiza digital con herramientas practicas: Password Center, Calculadora, Kanban, Editor de Markdown y mas. Optimizada para flujos de trabajo offline con una interfaz moderna y minimalista.",
      tags: ["React", "Productivity", "Offline-first", "SPA"],
      link: "https://github.com/Sebastian-Retana27/multitool-web",
      image: "/projects/Multitool.png"
    }
  ]
};

export const EDUCATION = {
  degree: "High School Diploma (Bachillerato en Educacion Media)",
  institution: "2024 - Costa Rica"
};

export const HIGHLIGHTS = [
  "Built and maintained multiple software projects",
  "Strong problem-solving and communication skills",
  "Fast learner with strong adaptability"
];

export const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced" }
];
