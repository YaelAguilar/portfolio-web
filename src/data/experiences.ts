export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  accent: string;
  dotColor: string;
  demoUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Sistema de visión por computadora para inspección visual de calidad',
    role: 'Desarrollador ML/Fullstack',
    period: '2025 - 2026',
    description: [
      'Sistema de inspeccion visual desplegado en produccion en 2 plantas de manufactura, que reduce la inspeccion manual y mejora la deteccion de defectos en tiempo real.',
      'Integra una aplicacion multi-camara en Python y OpenCV para procesamiento de imagenes en tiempo real, junto con una plataforma web en Django para trazabilidad y analisis historico.',
      'Incluye un pipeline de entrenamiento y versionado de modelos YOLO con soporte para Oriented Bounding Boxes (OBB), e integra Label Studio para pre-etiquetado automatico.',
      'La infraestructura esta desplegada en AWS (S3, EC2) para almacenamiento de datasets y entorno colaborativo de anotacion.',
    ],
    tags: ['Python', 'Numpy', 'Pandas', 'OpenCV', 'YOLO', 'Django', 'AWS EC2', 'AWS S3', 'SQLite'],
    accent: 'cyan',
    dotColor: 'bg-cyan-400 shadow-cyan-400/50',
  },
  {
    company: 'Sistema para gestión de pasantías',
    role: 'Desarrollador FullStack',
    period: '2025 - 2026',
    description: [
      'Plataforma web para la gestion integral de practicas profesionales, abarcando desde el registro de estudiantes y empresas hasta el seguimiento y evaluacion de pasantias.',
      'El backend esta construido con Node.js, Express, TypeScript y MySQL bajo Arquitectura Hexagonal con separacion de dominio e infraestructura, e incluye autenticacion JWT y control de acceso basado en roles (RBAC).',
      'Cuenta con generacion automatizada de documentos PDF mediante Puppeteer y tareas programadas para el control de periodos academicos.',
      'El frontend esta desarrollado con React, TypeScript y Vite, siguiendo un enfoque Clean Architecture con separacion de capas.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Figma'],
    accent: 'violet',
    dotColor: 'bg-violet-400 shadow-violet-400/50',
    demoUrl: 'https://yaelaguilar.github.io/internship-system-integration-portfolio/',
  },
  {
    company: 'WEBAPI-Odoo',
    role: 'Desarrollador Backend',
    period: '2024',
    description: [
      'API REST desarrollada en Python y Flask que integra Odoo ERP con Microsoft SQL Server mediante la API XML-RPC, sincronizando en tiempo real clientes, facturas y asientos contables.',
      'Incorpora un pipeline ETL con logica de upsert que garantiza la consistencia de datos y previene duplicados en cada ciclo de sincronizacion.',
      'Gestiona datos de facturacion electronica mexicana (CFDI) para cumplimiento fiscal automatizado.',
      'La infraestructura cuenta con base de datos en AWS RDS (SQL Server) y un panel web en Flask para monitoreo en tiempo real.',
    ],
    tags: ['Python', 'Flask', 'SQL Server', 'AWS RDS', 'Odoo'],
    accent: 'amber',
    dotColor: 'bg-amber-400 shadow-amber-400/50',
    demoUrl: 'https://yaelaguilar.github.io/odoo-integration-portfolio/',
  },
];
