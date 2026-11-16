export interface Testimonial {
  id: string;
  name: string;
  company: string;
  projectType: string;
  review: string;
  avatar?: string;
  initials: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'K. Rajesh',
    company: 'Square Medical Billing',
    projectType: 'Healthcare RCM Platform',
    review:
      'The ThreeFaces engineered an exceptional digital presence for Square Medical Billing. In US healthcare revenue cycle management, trust and security are paramount — their design and speed gave us instant credibility with provider practices across the country.',
    initials: 'KR',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Arjun Menon',
    company: 'Independent Film Director',
    projectType: 'Director Portfolio & Visual Showcase',
    review:
      'The ThreeFaces approached my portfolio with genuine cinematic sensitivity. The dark tone, smooth transitions, and archival treatments captured the exact tone of my film projects without any agency bloat.',
    initials: 'AM',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Rakesh Sharma R',
    company: 'Full-Stack Developer',
    projectType: 'Developer Portfolio & Web Engineering',
    review:
      'The ThreeFaces delivered a clean, ultra-responsive portfolio that perfectly presents my full-stack MERN projects and engineering expertise. The micro-interactions, mobile layout, and loading performance are top-tier.',
    initials: 'RS',
    rating: 5,
  },
];
