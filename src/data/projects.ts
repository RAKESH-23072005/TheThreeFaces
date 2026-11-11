export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Luxe Architecture & Interiors',
    category: 'Brand & Web Experience',
    categorySlug: 'websites',
    description:
      'A luxury spatial design studio website featuring interactive 3D portfolios, fluid room previews, and seamless consultation booking.',
    tags: ['React 19', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    color: '#B9F36B',
  },
  {
    id: 'project-2',
    title: 'FreshCart Global Market',
    category: 'E-commerce Platform',
    categorySlug: 'ecommerce',
    description:
      'High-conversion digital grocery ecosystem with real-time stock orchestration, sub-second checkout, and automated fulfillment.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80',
    color: '#6BB9F3',
  },
  {
    id: 'project-3',
    title: 'TaskFlow Pro Enterprise',
    category: 'Web Application',
    categorySlug: 'applications',
    description:
      'A real-time workspace collaboration suite with live multiplayer editing, team telemetry, and cross-platform mobile sync.',
    tags: ['TypeScript', 'Node.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    color: '#F3B96B',
  },
];
