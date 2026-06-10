import { ExperienceItem, Profile, Project, Certification } from '../types';

import { beecker, amelie, portafolio, profile as fb } from '@/assets/images';

export const profile: Profile = {
  name: "Luis Fernando Burgos Perea",
  role: "Full-Stack Developer + IA Generativa ",
  bio: "Desarrollador Full‑Stack. Creo apps con IA generativa y RPA, lidero proyectos en Django + React y despliego en Azure. Certificado en UiPath, Blue Prism y Automation Anywhere.",
  skills: [
    "Python",
    "JavaScript", "TypeScript",
    "Django",
    "Node.js", "Express", "NestJS",
    "React.js / React Native",
    "Angular (v17+)",
    "HTML5", "CSS3", "Tailwind",
    "PostgreSQL", "MySQL",
    "MongoDB", "SQLite",
    "Claude API",
    "MCP", " Batch API", " Prompting",
    "Azure", "Git", "GitHub",
    "BPMN", "Scrum"
  ],
  creator: Number(fb),
  general: "Full-Stack Developer con experiencia comprobada liderando equipos de desarrollo, integrando IA generativa en productos reales y automatizando procesos empresariales con RPA. Entregué una plataforma web productiva con Django + React + Claude Anthropic API como líder técnico en New York Beecker Consulting, bajo metodología Scrum y despliegue en Azure. Cuento con certificaciones activas en UiPath, Blue Prism y Automation Anywhere, y dominio de arquitecturas modernas: microservicios con NestJS, sistemas event-driven con RabbitMQ y aplicaciones de escritorio con Electron. Orientado a resultados medibles, comunicación efectiva con equipos multidisciplinarios y adaptación rápida a nuevas tecnologías."
};


export const projects: Project[] = [
  {
    id: "1",
    title: "Chatbot con IA + Sitio Web",
    company: "New York Beecker Consulting S.A. DE C.V.",
    description: "Aplicación web que integra un asistente conversacional con IA generativa (Claude Anthropic API + Batch API) para optimizar consultas y reducir costos de procesamiento. La plataforma incluye autenticación, dashboard administrativo, gestión de usuarios y roles, vista de chatbot y manejo de errores. Se conecta a una base de datos PostgreSQL para almacenar información estructurada y se despliega en Azure con alta disponibilidad.",
    date: "ene 2026 - jun 2026",
    icon: Number(beecker),
    repoUrl: "",
    tech: ["Django", "React", "Claude API", "Azure"],
    status: "Completado",
  },
  {
    id: "2",
    title: "Weather Wrapper App",
    company: "Proyecto de Portafolio",
    description: "Aplicación web que permite consultar el clima de cualquier lugar utilizando la API de Visual Crossing. El servicio muestra información de temperatura, sensación térmica, ubicación, viento, humedad, condición y visibilidad.",
    date: "jun 2025",
    icon: Number(portafolio),
    repoUrl: "https://github.com/LFernando07/Weather_Wrapper_App",
    tech: ["React", "Redux-ToolKit", "Express", "Redis"],
    status: "Completado",
  },
  {
    id: "3",
    title: "Translate-Google-Clone-AI",
    company: "Proyecto de Portafolio",
    description: "Aplicación web que permite traducir texto entre varios idiomas utilizando la API de OpenAI. La aplicación ofrece una interfaz sencilla y fácil de usar, similar a la de Google Translate con las funciones de copiar texto y oir la traducción.",
    date: "sep 2025",
    icon: Number(portafolio),
    repoUrl: "https://github.com/LFernando07/translate-google-clone-ai",
    tech: ["React", "OpenAI", "Express", "Bootstrap"],
    status: "Completado",
  },
  {
    id: "4",
    title: "POS Heladería AmelieI",
    company: "Heladería Amalie",
    description: "Sistema Punto de Venta de escritorio para la gestión integral de una heladería, permitiendo administrar productos, categorías, sabores, ventas y usuarios de manera rápida y eficiente.",
    date: "ago 2025 - nov 2025",
    icon: Number(amelie),
    repoUrl: "https://github.com/LFernando07/pos-heladeria-amalie",
    tech: ["React", "Sqlite", "Electron", "Express"],
    status: "Completado",
  },
  {
    id: "5",
    title: "CheckoutCore Microservices",
    company: "Proyecto de Portafolio",
    description: "Sistema backend basado en arquitectura de microservicios orientada a eventos para gestionar el flujo completo de una compra: creación de órdenes, procesamiento de pagos y notificación al usuario, de forma desacoplada, escalable y resiliente.",
    date: "nov 2025 - ene 2026",
    icon: Number(portafolio),
    repoUrl: "https://github.com/LFernando07/checkoutcore-microservices",
    tech: ["NestJS", "RabbitMQ", "Stripe", "PostgreSQL", "Docker"],
    status: "En progreso",
  },
  {
    id: "6",
    title: "Automatización RPA",
    company: "New York Beecker Consulting S.A. DE C.V.",
    description: "Robot RPA que descarga automáticamente facturas de cursos Udemy y las almacena en Google Drive con estructura jerárquica por año y mes. Incluye autenticación 2FA vía Gmail, validación de duplicados y normalización de nombres, garantizando trazabilidad completa y cero intervención manual en el proceso.",
    date: "ene 2025 - jun 2026",
    icon: Number(beecker),
    repoUrl: "",
    tech: ["UiPath", "Gmail", "GDrive", "Udemy"],
    status: "Completado",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: '1',
    title: 'Líder de equipo de desarrollo',
    company: 'New York Beecker Consulting S.A. de C.V.',
    location: 'Cuernavaca, Morelos',
    date: 'ene 2026 – jun 2026',
    status: 'actual',
    bullets: [
      'Lideré equipo de 3 desarrolladores bajo Scrum con 100% de cumplimiento en entregas críticas.',
      'Diseñé arquitectura backend con Django + Claude Anthropic API reduciendo consumo de tokens ~40% con Batch API.',
      'Entregué 9 módulos funcionales en React.js con despliegue estable en Azure (UAT + producción).',
      'Desarrollé pipeline de transcripción documental que procesó +150 proyectos generando JSON estructurado automáticamente.',
    ],
    tech: ['Django', 'React.js', 'Claude API', 'PostgreSQL', 'Azure', 'Scrum', 'BPMN'],
  },
  {
    id: '2',
    title: 'Desarrollador RPA',
    company: 'New York Beecker Consulting S.A. de C.V.',
    location: 'Cuernavaca, Morelos',
    date: 'ene 2026 – jun 2026',
    status: 'actual',
    bullets: [
      'Implementé robot con doble REFramework que automatizó al 100% la descarga de facturas desde Udemy.',
      'Eliminé intervención manual en login con autenticación 2FA automática vía extracción de OTP desde Gmail.',
      'Arquitectura en 4 módulos independientes reduciendo tiempo de mantenimiento futuro en ~60%.',
    ],
    tech: ['UiPath', 'REFramework', 'Google Drive API', 'Gmail API'],
  },
  {
    id: '3',
    title: 'Desarrollador Full-Stack Freelance',
    company: 'Heladería Amalie',
    location: 'Mazatepec, Morelos',
    date: 'ago 2025 – nov 2025',
    status: 'completado',
    bullets: [
      'Desarrollé sistema POS de escritorio con 5 módulos: productos, categorías, sabores, empleados y ventas.',
      'Implementé autenticación JWT con roles administrador/empleado y sesión persistente.',
      'Integré generación de reportes PDF + Nodemailer reduciendo tiempo de reporte de 30 min a menos de 1 min.',
    ],
    tech: ['Electron', 'React/Vite', 'Express', 'SQLite', 'JWT', 'Nodemailer'],
  },
];

export const certifications: Certification[] = [
  {
    name: "UiPath Automation Developer Professional",
    certificateLink: "https://credentials.uipath.com/a8f5624e-f809-4598-9fdd-cc85df60c3b4",
  },
  {
    name: "Blue Prism: Foundations (SS&C)",
    certificateLink: "",
  },
  {
    name: "Automation Anywhere — Essentials Professional",
    certificateLink: "https://certificates.automationanywhere.com/5776c53a-a41a-4142-af5f-b7bd9b345676",
  },
  {
    name: "Scrum Fundamentals Certified",
    certificateLink: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisFernandoBurgosPerea-1103341.pdf",
  },
  {
    name: "Introduction to MCP",
    certificateLink: "https://verify.skilljar.com/c/a95635hei2gg",
  },
  {
    name: "MCP: Advanced Topics",
    certificateLink: "https://verify.skilljar.com/c/6c6eeqcywyzb",
  },
  {
    name: "Claude Code in Action",
    certificateLink: "https://verify.skilljar.com/c/9y7x9emrsrpf",
  },
  {
    name: "Educathon de IA",
    certificateLink: "",
  }
]