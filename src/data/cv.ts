import type { ExperienceItem, EducationItem, CourseItem, ProjectItem, SkillGroup } from '@/types'

const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Rodrigo Reynoso',
  role: 'Analista de Sistemas · Front-end Developer · Sysadmin',
  location: 'Granadero Baigorria, Santa Fe, Argentina',
  email: 'rodrigo.gabriel.reynoso@gmail.com',
  phone: '341-6851253',
  github: 'https://github.com/rodrigo402',
  linkedin: 'https://www.linkedin.com/in/rodrigo-gabriel-reynoso-00194a1b1/',
  photo: `${BASE}img/fotoperfil.jpg`,
  bio: 'Desarrollador apasionado por construir productos digitales con foco en la experiencia de usuario. Combino sólido conocimiento en infraestructura IT con desarrollo front-end moderno.',
  available: true,
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '⚡',
    items: ['Angular 10+', 'TypeScript', 'HTML5 · CSS3', 'Bootstrap', 'Flutter · Dart'],
  },
  {
    category: 'Infraestructura',
    icon: '🖥',
    items: ['Windows Server', 'Linux', 'Hyper-V · VMware', 'Active Directory', 'Redes · Firewalls'],
  },
  {
    category: 'Herramientas',
    icon: '🛠',
    items: ['Git · GitHub', 'Jira', 'BACKUPS (Veeam · Acronis)', 'MS Office 365', 'PHP · MySQL'],
  },
]

export const experience: ExperienceItem[] = [
  {
    period: '2021 — Actualidad',
    role: 'Desarrollador Front-end · Flutter · Angular',
    description:
      'Desarrollo de aplicaciones móviles para Android e iOS con Flutter y Dart. Implementación de arquitectura BLoC, Streams, Firebase y consumo de APIs REST. Mantenimiento y creación de interfaces web con Angular.',
    tags: ['Flutter', 'Dart', 'Angular', 'Firebase', 'BLoC'],
  },
  {
    period: '2020 — 2021',
    role: 'Desarrollador Front-end · Angular',
    description:
      'Desarrollo con Angular 10: componentes, formularios reactivos, tablas con filtros, routing con guardas, consumo de servicios REST y CRUD completo. Uso de Bootstrap, Angular Material y CSS customizado.',
    tags: ['Angular 10', 'TypeScript', 'Bootstrap', 'REST', 'CRUD'],
  },
  {
    period: '2021',
    role: 'Analista de Infraestructuras TI',
    description:
      'Gestión de virtualización con Hyper-V y VMware. Administración de Windows Server 2008–2019 y Linux. Migración de DC y File Server. ABM en Active Directory. Backups con Cobian y Veeam. Administración de Exchange y Redes LAN con Mikrotik y Sophos Firewall.',
    tags: ['Hyper-V', 'VMware', 'Windows Server', 'Active Directory', 'Exchange'],
  },
  {
    period: '2020 — 2021',
    role: 'Consultor IT · Infraestructura',
    description:
      'Resolución de tickets de infraestructura y asistencia remota. Documentación de procedimientos. Roles AD, DHCP, DNS, IIS, WSUS, WDS. Backups con Acronis y Cobian. Administración de SQL Server y MySQL. MS Office 365 y G‑Suite.',
    tags: ['AD', 'DHCP', 'DNS', 'SQL Server', 'Office 365'],
  },
  {
    period: '2019 — 2020',
    role: 'Service Desk Analyst',
    description:
      'Resolución nivel 1 de incidentes y requerimientos. Sistema de tickets, soporte remoto y VDI. Migraciones de puestos de trabajo. Desarrollo de herramienta interna para helpdesk en C# y SQL. Participación en laboratorios de WDS, WSUS y Windows Server 2016.',
    tags: ['Help Desk', 'C#', 'SQL', 'VDI', 'Windows'],
  },
  {
    period: '2018 — 2019',
    role: 'Technical Support · Help Desk',
    description:
      'Reparación y mantenimiento de equipos. Instalación de hardware y software. Migraciones de Windows. Backups, dominio, correo electrónico y asistencia remota. Soporte completo a 50 usuarios.',
    tags: ['Soporte', 'Hardware', 'Redes', 'Windows', 'Backups'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Esc. Sup. N° 49 Cap. Justo José de Urquiza',
    degree: 'Analista de Sistemas',
    period: '2015 — 2018',
    location: 'Rosario, Santa Fe',
    items: [
      'Desarrollo web: HTML, CSS, JavaScript, PHP, MySQL, Bootstrap',
      'Linux · Arquitectura de computadoras',
      'Análisis y relevamiento de empresas',
      'Redes y seguridad (básico)',
      'Inglés técnico',
    ],
  },
  {
    institution: 'Escuela de Educación Técnica N° 550',
    degree: 'Técnico Informático',
    period: '2010 — 2015',
    location: 'Granadero Baigorria, Santa Fe',
    items: [
      'Computación · Paquete Office',
      'Reparación y mantenimiento PC (hardware y software)',
      'Redes (básico)',
      'Electrónica (básico)',
      'Inglés básico',
    ],
  },
]

export const courses: CourseItem[] = [
  {
    title: 'Flutter: Tu guía completa de desarrollo para iOS y Android',
    provider: 'Udemy',
    items: ['Dart · Widgets · Streams', 'Firebase REST API & Auth', 'CRUD · Providers · BLoC', 'Cámara · Notificaciones Push', 'Deploy PlayStore & AppStore'],
  },
  {
    title: 'Angular: De cero a experto — Edición 2021',
    provider: 'Udemy',
    items: ['Componentes · Directivas · Servicios', 'Mapas · Gráficas · JWT', 'Autenticación · Guards', 'MongoDB · Despliegues', 'Git · GitHub'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'App de Selectores',
    image: `${BASE}img/app.jpg`,
    url: 'https://rodrigo402.github.io/angular-selectoresApp/selector/selector',
    tags: ['Angular 10+'],
  },
  {
    title: 'Formularios Reactivos',
    image: `${BASE}img/formularios.jpg`,
    url: 'https://rodrigo402.github.io/angular-formulariosApp/',
    tags: ['Angular 10+'],
  },
  {
    title: 'Custom Pipes',
    image: `${BASE}img/pipes.jpg`,
    url: 'https://rodrigo402.github.io/angular-pipesApp/',
    tags: ['Angular 10+'],
  },
  {
    title: 'Países del Mundo',
    image: `${BASE}img/paises.JPG`,
    url: 'https://rodrigo402.github.io/angular-paisesApp/',
    tags: ['Angular 10+', 'REST API'],
  },
  {
    title: 'Buscador de GIFs',
    image: `${BASE}img/giffs.JPG`,
    url: 'https://rodrigo402.github.io/angular-gifsApp/',
    tags: ['Angular 10+', 'Giphy API'],
  },
  {
    title: 'Sitio Web Empresa',
    image: `${BASE}img/paginaweb.JPG`,
    url: 'https://www.zingueriadusso.com.ar/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
  },
]
