export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  accent: string;
  dotColor: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Yazaki',
    role: 'Sistema de inspeccion visual | Desarrollador ML/Fullstack',
    period: '2025 - 2026',
    description: [
      'Desarrolle e implemente un sistema de inspeccion visual en produccion en 2 plantas de manufactura, reduciendo la inspeccion manual y mejorando la deteccion de defectos en tiempo real.',
      'Disene una aplicacion multi-camara en Python y OpenCV para procesamiento de imagenes en tiempo real y una plataforma web en Django para trazabilidad y analisis historico.',
      'Implemente un pipeline de entrenamiento y versionado de modelos YOLO con soporte para Oriented Bounding Boxes (OBB), integrando Label Studio para pre-etiquetado automatico.',
      'Despliegue de infraestructura en AWS (S3, EC2) para almacenamiento de datasets y entorno colaborativo de anotacion.',
    ],
    tags: ['Python', 'OpenCV', 'YOLO', 'Django', 'AWS', 'Docker'],
    accent: 'cyan',
    dotColor: 'bg-cyan-400 shadow-cyan-400/50',
  },
  {
    company: 'Universidad Politecnica de Chiapas',
    role: 'ConectaUP | Desarrollador FullStack',
    period: '2025 - 2026',
    description: [
      'Lidere el desarrollo end-to-end de una plataforma para la gestion de practicas profesionales, desde levantamiento de requerimientos y diseno en Figma hasta despliegue en produccion.',
      'Disene un backend escalable con Node.js, Express, TypeScript y MySQL aplicando Arquitectura Hexagonal con separacion de dominio e infraestructura, incluyendo autenticacion JWT y sistema RBAC.',
      'Implemente servicios automatizados para generacion de PDFs con Puppeteer y tareas programadas para control de periodos academicos.',
      'Desarrolle el frontend con React, TypeScript y Vite bajo enfoque Clean Architecture con separacion de capas.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Figma'],
    accent: 'violet',
    dotColor: 'bg-violet-400 shadow-violet-400/50',
  },
  {
    company: 'ATI Asesores',
    role: 'WEBAPI-Odoo | Desarrollador Backend',
    period: '2024',
    description: [
      'Desarrolle una API REST en Python y Flask para integrar Odoo ERP con Microsoft SQL Server, sincronizando en tiempo real clientes, facturas y asientos contables.',
      'Implemente un pipeline ETL con logica de upsert para garantizar consistencia y evitar duplicados en procesos de sincronizacion.',
      'Integre la API XML-RPC de Odoo y gestione datos de facturacion electronica mexicana (CFDI) para cumplimiento fiscal.',
      'Despliegue de la base de datos en AWS RDS (SQL Server) y desarrollo de un panel web en Flask para monitoreo.',
    ],
    tags: ['Python', 'Flask', 'SQL Server', 'AWS RDS', 'Odoo'],
    accent: 'amber',
    dotColor: 'bg-amber-400 shadow-amber-400/50',
  },
];
