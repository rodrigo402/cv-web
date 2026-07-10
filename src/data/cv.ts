import type { ExperienceItem, ProjectCase, SkillCategory, EducationItem, CourseItem } from '@/types'

const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Rodrigo Reynoso',
  title: 'Flutter Developer',
  tagline: 'Mobile · Fintech · Full Stack',
  bio: 'Desarrollador Flutter especializado en aplicaciones mobile para el sector fintech. Trabajo en billeteras digitales white label con arquitecturas multi-entidad, integrando soluciones complejas que abarcan mobile, backend y web. Construyo productos funcionales, bien diseñados y escalables, con foco en la experiencia de usuario.',
  location: 'Santa Fe, Argentina',
  remote: true,
  email: 'rodrigo.gabriel.reynoso@gmail.com',
  phone: '341-6851253',
  github: 'https://github.com/rodrigo402',
  githubHandle: 'rodrigo402',
  linkedin: 'https://www.linkedin.com/in/rodrigo-gabriel-reynoso-00194a1b1/',
  photo: `${BASE}img/fotoperfil.jpg`,
  cvPdf: `${BASE}rodrigo-reynoso-cv.pdf`,
  available: true,
}

export const experience: ExperienceItem[] = [
  {
    company: 'Pepper Labs',
    role: 'Desarrollador Full Stack',
    period: 'Dic 2022 – Actualidad',
    location: 'Montevideo, Uruguay · Remoto',
    current: true,
    summary: 'Responsable del desarrollo y evolución del ecosistema tecnológico de una plataforma Fintech White Label, participando en el diseño, implementación y mantenimiento de las aplicaciones móviles, el backend y el Backoffice Web que soportan la operación completa del producto.',
    points: [
      'Desarrollo y evolución de las aplicaciones móviles en Flutter para Android e iOS, cubriendo desde arquitectura y nuevas funcionalidades hasta mantenimiento y resolución de incidentes en producción.',
      'Diseño e implementación de funcionalidades end-to-end integrando la app móvil, el backend en Laravel 8 y el Backoffice administrativo en Vue.js.',
      'Desarrollo de soluciones White Label configurables para múltiples entidades financieras, manteniendo un único core de negocio con branding y comportamiento adaptables por cliente.',
      'Diseño e integración de APIs REST y servicios SOAP con sistemas externos, incluyendo flujos de onboarding, autenticación biométrica, compliance y operaciones financieras.',
      'Evolución técnica continua del producto: migraciones de Flutter, actualización de dependencias, optimización de rendimiento y mantenimiento de ambientes Development, QA, UAT y Producción.',
      'Participación en procesos de CI/CD, despliegues del backend y publicación de aplicaciones en Google Play y App Store.',
    ],
    tags: ['Flutter', 'Dart', 'Vue.js', 'Laravel 8', 'PHP', 'MySQL', 'REST APIs', 'SOAP', 'Firebase', 'CI/CD', 'Git', 'GitHub', 'GitLab'],
  },
  {
    company: 'SG Financial Technology – Ágil Pagos',
    role: 'Desarrollador Front-end',
    period: 'Oct 2021 – Jul 2024',
    location: 'Argentina',
    current: false,
    points: [
      'Desarrollé aplicaciones Flutter para Android e iOS en contexto fintech, cubriendo el ciclo completo desde arquitectura hasta publicación.',
      'Implementé gestión de estado con arquitectura BLoC usando Streams y StreamBuilders.',
      'Integré Firebase (autenticación, analytics, notificaciones push) y consumo de APIs REST con manejo de tokens y storage local.',
      'Implementé login con biometría y persistencia de preferencias de usuario.',
      'Migré proyectos Flutter a versiones actualizadas, resolviendo breaking changes y actualizando dependencias críticas.',
      'Publiqué y mantuve aplicaciones en Google Play y App Store.',
      'Desarrollé componentes Angular para backoffice web complementario.',
    ],
    tags: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST API', 'Angular', 'Biometría'],
  },
  {
    company: 'Hardtec SRL',
    role: 'Analista de Infraestructuras TI',
    period: 'Mar 2021 – Oct 2021',
    location: 'Argentina',
    current: false,
    points: [
      'Administré entornos virtualizados con Hyper-V y VMware.',
      'Gestioné servidores Windows (2008–2019) y Linux, incluyendo migración de Domain Controllers y File Servers.',
      'Administré equipos y usuarios en Active Directory y Exchange Server.',
      'Implementé estrategias de backup con Cobian 11 y Veeam Backup.',
      'Configuré redes LAN con Mikrotik y Sophos Firewall, incluyendo creación de VPNs.',
    ],
    tags: ['Hyper-V', 'VMware', 'Windows Server', 'Active Directory', 'Veeam', 'Mikrotik'],
  },
  {
    company: 'MSTech',
    role: 'Consultor IT Infraestructura',
    period: 'Ago 2020 – Mar 2021',
    location: 'Rosario, Santa Fe',
    current: false,
    points: [
      'Resolví tickets de infraestructura y brindé asistencia remota a usuarios finales.',
      'Documenté el estado de la infraestructura, proponiendo mejoras y optimizaciones.',
      'Administré roles de Windows Server: AD, DHCP, DNS, IIS, WSUS, WDS y Print Server.',
      'Implementé backups con Acronis, Cobian 11 y Windows Server Backup.',
      'Administré bases de datos MySQL y SQL Server, y configuré alojamiento web.',
      'Gestioné redes LAN con FortiGate, Mikrotik y TPLink, incluyendo VPNs y redes Wi-Fi.',
    ],
    tags: ['Windows Server', 'Active Directory', 'SQL Server', 'MySQL', 'FortiGate', 'Office 365'],
  },
  {
    company: 'MSTech',
    role: 'Service Desk Analyst',
    period: 'Ago 2019 – Ago 2020',
    location: 'Rosario, Santa Fe',
    current: false,
    points: [
      'Resolví incidentes y requerimientos nivel 1 mediante sistema de tickets.',
      'Brindé asistencia remota y soporte a entorno virtual (VDI).',
      'Realicé migraciones completas de puestos de trabajo y mantenimiento de hardware.',
      'Desarrollé herramienta interna de help desk en C# y SQL para centralizar recursos de soporte.',
      'Participé en laboratorios de implementación de WDS, WSUS y AD en Windows Server 2016.',
    ],
    tags: ['Help Desk', 'C#', 'SQL', 'Windows', 'VDI', 'Office 365'],
  },
  {
    company: 'Autónomo',
    role: 'Desarrollador Front-end – Angular',
    period: 'Ago 2020 – Dic 2020',
    location: 'Argentina',
    current: false,
    points: [
      'Desarrollé componentes Angular 10 con TypeScript, Bootstrap y Angular Material.',
      'Implementé formularios reactivos (ABM), tablas con filtros dinámicos y consumo de servicios REST.',
      'Configuré routing con guardas de rutas y creé pipes personalizados.',
    ],
    tags: ['Angular 10', 'TypeScript', 'Bootstrap', 'Angular Material'],
  },
  {
    company: 'Gelvez SRL',
    role: 'Technical Support Help Desk',
    period: 'Oct 2018 – Abr 2019',
    location: 'San Lorenzo, Santa Fe',
    current: false,
    points: [
      'Brindé soporte técnico completo a 50 usuarios: hardware, software, impresoras y redes.',
      'Realicé migraciones de sistemas operativos y administré dominio y cuentas de correo.',
      'Ejecuté instalaciones desatendidas y copias de respaldo.',
    ],
    tags: ['Soporte Técnico', 'Hardware', 'Windows', 'Redes'],
  },
]

export const projects: ProjectCase[] = [
  {
    title: 'Ecosistema de billeteras digitales white label',
    context: 'Plataforma mobile para múltiples entidades financieras que requieren branding y configuraciones propias sobre una base unificada.',
    solution: 'Arquitectura Flutter que parametriza por cliente el branding, endpoints habilitados y features activos, sin duplicar ni fragmentar el código base.',
    role: 'Desarrollo Flutter (mobile), integración de microservicios Laravel, configuración de variantes y publicación en ambas tiendas.',
    stack: ['Flutter', 'Dart', 'Laravel', 'PHP 8', 'MySQL', 'APIs REST'],
    impact: 'Onboarding de nuevas entidades sin cambios estructurales en la aplicación, con mantenimiento centralizado para todas las variantes.',
  },
  {
    title: 'Migración y evolución de Flutter en producción',
    context: 'Apps en producción con versiones desactualizadas de Flutter y acumulación de breaking changes en paquetes críticos.',
    solution: 'Migración planificada con análisis de impacto por versión, actualización de dependencias críticas y validación funcional de flujos clave coordinada con QA.',
    role: 'Responsable técnico de la migración, resolución de conflictos de versiones, debugging y coordinación con el equipo de QA.',
    stack: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Android', 'iOS'],
    impact: 'Aplicaciones actualizadas en producción con acceso a las últimas APIs del sistema operativo y sin regresiones funcionales.',
  },
  {
    title: 'CI/CD y publicación automatizada en tiendas',
    context: 'Múltiples variantes de una aplicación Flutter requieren builds frecuentes y publicaciones coordinadas en Google Play y App Store.',
    solution: 'Pipelines CI/CD con GitHub Actions, GitLab CI y Codemagic para automatizar builds, firma y distribución a ambas plataformas.',
    role: 'Configuración y mantenimiento de los pipelines de CI/CD para todas las variantes del producto.',
    stack: ['Codemagic', 'GitHub Actions', 'GitLab CI', 'Flutter', 'Android', 'iOS'],
    impact: 'Proceso de publicación confiable y reproducible, desacoplado de intervención manual.',
  },
  {
    title: 'Autenticación biométrica y seguridad de sesión',
    context: 'Apps fintech con acceso a datos financieros sensibles que requieren autenticación robusta y control de dispositivos activos.',
    solution: 'Login biométrico (huella / Face ID), tokens seguros con storage cifrado y lógica de gestión de sesión por dispositivo.',
    role: 'Desarrollo Flutter de los flujos de autenticación e integración de paquetes de biometría y secure storage.',
    stack: ['Flutter', 'Dart', 'Biometría', 'Secure Storage', 'Tokens', 'BLoC'],
    impact: 'Experiencia de autenticación fluida y segura en producción, con control de dispositivos activos.',
  },
  {
    title: 'Microservicios REST + SOAP con Laravel',
    context: 'Billeteras digitales que consumen servicios financieros externos con tecnologías heterogéneas: APIs REST modernas y servicios legacy SOAP.',
    solution: 'Microservicios en Laravel 8 que exponen endpoints REST al cliente mobile y se comunican con servicios externos vía SOAP y REST.',
    role: 'Desarrollo de APIs en Laravel, diseño de endpoints, documentación y pruebas con Postman.',
    stack: ['Laravel 8', 'PHP 8', 'MySQL', 'SOAP', 'REST API', 'Postman'],
    impact: 'Capa de integración desacoplada que simplifica el consumo desde mobile y centraliza la comunicación con proveedores externos.',
  },
  {
    title: 'Onboarding y validación de identidad',
    context: 'Apps fintech con procesos de alta de usuarios que requieren validación de datos e integración con servicios externos.',
    solution: 'Flujos de registro multi-paso en Flutter con validaciones en tiempo real, integración con APIs externas y feedback visual claro en ambas plataformas.',
    role: 'Diseño e implementación de los flujos de onboarding, integración con backend y coordinación con QA.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'BLoC', 'Firebase'],
    impact: 'Flujos de alta funcionales en Android e iOS, con validación robusta y experiencia de usuario consistente.',
  },
]

export const techStack: SkillCategory[] = [
  {
    name: 'Mobile',
    icon: '📱',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'BLoC', 'Provider', 'Streams'],
  },
  {
    name: 'Frontend',
    icon: '🖥',
    skills: ['Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Laravel', 'PHP 8', 'MySQL', 'APIs REST', 'Microservicios', 'SOAP'],
  },
  {
    name: 'DevOps & CI/CD',
    icon: '🚀',
    skills: ['GitHub Actions', 'GitLab CI', 'Codemagic', 'Git', 'GitHub', 'GitLab', 'Firebase'],
  },
  {
    name: 'Herramientas',
    icon: '🛠',
    skills: ['Postman', 'Sentry', 'Jira', 'Google Play', 'App Store', 'Google Analytics'],
  },
  {
    name: 'QA & Testing',
    icon: '🔍',
    skills: ['Appium', 'Integration Testing', 'Debugging', 'Análisis de incidentes'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Esc. Sup. N° 49 Cap. Justo José de Urquiza',
    degree: 'Analista de Sistemas',
    period: '2015 – 2018',
    location: 'Rosario, Santa Fe',
  },
  {
    institution: 'Escuela de Educación Técnica N° 550',
    degree: 'Técnico Informático',
    period: '2010 – 2015',
    location: 'Granadero Baigorria, Santa Fe',
  },
]

export const courses: CourseItem[] = [
  {
    title: 'Flutter móvil: Recursos Nativos - Nivel intermedio',
    provider: 'Udemy · Fernando Herrera · Mayo 2025',
  },
  {
    title: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel',
    provider: 'Udemy · Fernando Herrera · Dic 2022',
  },
  {
    title: 'PHP 8, Laravel 9, MySQL, MongoDB, Webpay de Transbank',
    provider: 'Udemy · César Cancino Zapata · Dic 2023',
  },
  {
    title: 'Docker: Guía práctica de uso para desarrolladores',
    provider: 'Udemy · Fernando Herrera · DevTalles',
  },
  {
    title: 'Flutter: Tu guía completa de desarrollo para iOS y Android',
    provider: 'Udemy · Fernando Herrera',
  },
  {
    title: 'Angular: De cero a experto — Edición 2021',
    provider: 'Udemy · Fernando Herrera',
  },
]
