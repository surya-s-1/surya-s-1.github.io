export interface AppProject {
  id: string;
  title: string;
  url: string;
  description: string;
  techStack: string[];
}

export const TECH_ICONS: Record<string, string> = {
  'Next.js': '/nextjs.svg',
  NestJS: '/nestjs.svg',
  Postgres: '/postgres.svg',
  Kafka: '/kafka.svg',
  NodeJS: '/nodejs.svg',
  S3: '/s3.svg',
  Cloudflare: '/cloudflare.svg',
  'OAuth2 Proxy': '/oauth2-proxy.svg',
  Keycloak: '/keycloak.svg',
  Redis: '/redis.svg',
};

export const APPS: AppProject[] = [
  {
    id: 'multi-tenant-blogging',
    title: 'Multi-Tenant Blogging',
    url: 'https://blog.suryasathi.com',
    description: 'A multi-tenant blogging platform supporting rich-text editing backed by Cloudflare for object caching, OAuth2 Proxy with Keycloak for authentication, and a transactional-outbox pattern for reliability.',
    techStack: [
      'Next.js',
      'NestJS',
      'Postgres',
      'Kafka',
      'NodeJS',
      'S3',
      'Cloudflare',
      'OAuth2 Proxy',
      'Keycloak',
      'Redis',
    ],
  },
  {
    id: 'todo-legacy',
    title: 'Todo (Legacy)',
    url: 'https://todolegacy.suryasathi.com',
    description: 'A minimal CRUD implementation of a todo app with basic authentication.',
    techStack: ['Next.js', 'NestJS', 'Postgres'],
  },
];
