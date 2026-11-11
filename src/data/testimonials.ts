export interface Testimonial {
  id: string;
  name: string;
  company: string;
  projectType: string;
  review: string;
  avatar?: string;
  initials: string;
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
  },
  {
    id: 'testimonial-2',
    name: 'V. Gautham',
    company: 'Feature Film Director & Screenwriter',
    projectType: 'Director Portfolio & Showreel',
    review:
      'Most web agencies build generic marketing sites, but The ThreeFaces understood cinematic language. They treated my portfolio like an interactive film reel — 60fps pacing, mood-lit dark aesthetics, and seamless 4K showreel previews.',
    initials: 'VG',
  },
  {
    id: 'testimonial-3',
    name: 'Rakesh Sharma R',
    company: 'Full-Stack Developer',
    projectType: 'Developer Portfolio & Web Engineering',
    review:
      'The ThreeFaces delivered a clean, ultra-responsive portfolio that perfectly presents my full-stack MERN projects and engineering expertise. The 60fps micro-interactions, mobile layout, and loading performance are top-tier.',
    initials: 'RS',
  },
];
