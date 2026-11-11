export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  link?: string;
  statusBadge?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Square Medical Billing',
    category: 'Healthcare RCM Platform',
    categorySlug: 'websites',
    description:
      'A high-performance digital presence and Revenue Cycle Management platform for US healthcare practices, accelerating claims processing, denial resolutions, and billing workflows.',
    tags: ['Healthcare RCM', 'React & Web', 'HIPAA Ready'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    color: '#B9F36B',
    link: 'https://www.squaremedicalbilling.in/',
    statusBadge: 'Live Site',
  },
  {
    id: 'project-2',
    title: 'Cinema Director & Storyteller Portfolio',
    category: 'Film & Visual Direction',
    categorySlug: 'websites',
    description:
      'An immersive, cinematic showcase designed for an acclaimed feature film director, featuring ultra-smooth 60fps showreels, mood treatments, and festival production archives.',
    tags: ['Film & Cinema', '4K Showreel', 'Motion Design'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    color: '#6BB9F3',
    link: '#contact',
    statusBadge: 'Private Preview',
  },
];
