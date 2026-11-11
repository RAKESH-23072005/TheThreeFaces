import {
  Globe,
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  Zap,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Website Development',
    description:
      'Modern, responsive, high-performance websites designed to turn visitors into customers.',
    features: ['Custom Design', 'Responsive', 'SEO Optimized', 'Fast Loading'],
  },
  {
    id: 'web-app',
    icon: Monitor,
    title: 'Web Applications',
    description:
      'Scalable web applications built around your business requirements.',
    features: ['Custom Dashboards', 'Real-time Data', 'API Integration', 'Scalable'],
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Intuitive mobile experiences for Android and iOS.',
    features: ['Cross-platform', 'Native Feel', 'Push Notifications', 'Offline Support'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description:
      'Online stores designed to simplify shopping and increase conversions.',
    features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Commerce'],
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Thoughtful interfaces and user experiences that make products easier to use.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Business Automation',
    description:
      'Smart workflows and WhatsApp automation that reduce repetitive business tasks.',
    features: ['Workflow Automation', 'WhatsApp Integration', 'CRM Setup', 'Custom Bots'],
  },
];

