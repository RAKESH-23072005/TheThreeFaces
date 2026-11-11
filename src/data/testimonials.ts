export interface Testimonial {
  id: string;
  name: string;
  company: string;
  projectType: string;
  review: string;
  avatar?: string;
  initials: string;
}

// NOTE: These are sample placeholders for demonstration purposes only.
// Replace with genuine client testimonials before publishing.
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sample Client',
    company: 'Sample Company',
    projectType: 'Business Website',
    review:
      'This is a placeholder testimonial. Replace this with a genuine client review. The team delivered an outstanding website that perfectly captured our brand identity.',
    initials: 'SC',
  },
  {
    id: 'testimonial-2',
    name: 'Sample Client',
    company: 'Sample Startup',
    projectType: 'Web Application',
    review:
      'This is a placeholder testimonial. Replace this with a genuine client review. The web application exceeded our expectations with its intuitive design and robust functionality.',
    initials: 'SS',
  },
  {
    id: 'testimonial-3',
    name: 'Sample Client',
    company: 'Sample Store',
    projectType: 'E-commerce',
    review:
      'This is a placeholder testimonial. Replace this with a genuine client review. Our online sales increased significantly after the new e-commerce platform was launched.',
    initials: 'SS',
  },
  {
    id: 'testimonial-4',
    name: 'Sample Client',
    company: 'Sample Enterprise',
    projectType: 'Automation',
    review:
      'This is a placeholder testimonial. Replace this with a genuine client review. The WhatsApp automation solution transformed our customer support operations.',
    initials: 'SE',
  },
];

