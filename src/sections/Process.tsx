import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import clientInquiryImg from '../assets/process/client-inquiry.jpg';
import researchStrategyImg from '../assets/process/research-strategy.jpeg';
import projectPlanningImg from '../assets/process/project-planning.jpeg';
import finalDeliveryImg from '../assets/process/final-delivery.jpeg';

interface ProcessStep {
  number: string;
  title: string;
  titleAccent: string;
  description: string;
  tags: string[];
  promise: string;
  image: string;
  cardMeshClass: string;
  accentColor: string;
}

const steps: ProcessStep[] = [
  {
    number: '1',
    title: 'Client Inquiry',
    titleAccent: '& Discovery',
    description:
      'It starts with a private conversation about your vision, your audience, and what success looks like for your business, so every decision that follows is built around you.',
    tags: ['Private Consultation', 'Goal Setting', 'Audience Insight'],
    promise: 'Complimentary 30-minute strategy call with leadership',
    image: clientInquiryImg,
    cardMeshClass: 'card-mesh-lime',
    accentColor: '#B9F36B',
  },
  {
    number: '2',
    title: 'Research',
    titleAccent: '& Strategy',
    description:
      'We research your industry, dissect competitors, and map user journeys to define an airtight technical and design roadmap with zero fluff and maximum impact.',
    tags: ['Competitive Audit', 'Technical Architecture', 'Wireframing'],
    promise: 'Fixed project scope, transparent milestones, zero hidden costs',
    image: researchStrategyImg,
    cardMeshClass: 'card-mesh-emerald',
    accentColor: '#42E695',
  },
  {
    number: '3',
    title: 'Project Planning',
    titleAccent: '& Design',
    description:
      'We craft high-fidelity Figma design systems and clickable, fluid 60fps prototypes. You see and test how the interface feels before a single line of production code is written.',
    tags: ['Figma Tokens', 'UI/UX Design', '60fps Micro-motion'],
    promise: 'Unlimited design revisions until you are completely satisfied',
    image: projectPlanningImg,
    cardMeshClass: 'card-mesh-cyan',
    accentColor: '#6BB9F3',
  },
  {
    number: '4',
    title: 'Final Delivery',
    titleAccent: '& Scale',
    description:
      'Clean modern engineering deployed to global edge infrastructure. We perform end-to-end testing, security audits, and deliver full code ownership with ongoing maintenance.',
    tags: ['React 19 & TypeScript', 'Edge Deployment', '24/7 Monitoring'],
    promise: '100% intellectual property ownership & 30-day post-launch warranty',
    image: finalDeliveryImg,
    cardMeshClass: 'card-mesh-violet',
    accentColor: '#818CF8',
  },
];

export default function Process() {
  const stackRef = useRef<HTMLDivElement>(null);

  /* ── Exact The Shawon Card Depth Scaling Animation on Scroll ── */
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cards = stackRef.current
      ? Array.from(stackRef.current.querySelectorAll<HTMLElement>('.hww-stack-card'))
      : [];
    if (!cards.length) return;

    cards.forEach((c, i) => c.style.setProperty('--i', String(i)));

    let ticking = false;
    const update = () => {
      ticking = false;
      const progresses = cards.map((c, i) => {
        const next = cards[i + 1];
        if (!next) return 0;
        const stuckTop = parseFloat(getComputedStyle(next).top) || 0;
        const dist = next.getBoundingClientRect().top - stuckTop;
        const prog = 1 - dist / c.offsetHeight;
        return Math.min(1, Math.max(0, prog));
      });

      cards.forEach((c, i) => {
        let depth = 0;
        for (let j = i; j < progresses.length; j++) {
          depth += progresses[j];
        }
        c.style.setProperty('--depth', depth.toFixed(3));
      });
    };

    const req = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    update();

    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
    };
  }, []);

  return (
    <section
      id="process"
      className="relative bg-[#0A0B0D] py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 text-white overflow-visible border-b border-white/[0.06]"
    >
      {/* ── Section Header (The Shawon .hww__head) ── */}
      <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
          How We{' '}
          <em className="accent-serif text-[#B9F36B] font-normal not-italic">
            Work
          </em>
        </h2>

        <p className="text-base sm:text-lg text-[#A6A8AC] leading-relaxed max-w-xl mx-auto">
          A transparent process that transforms ideas into successful digital experiences.
        </p>
      </div>

      {/* ── Stacking Cards Container (The Shawon .hww__stack) ── */}
      <div ref={stackRef} className="mx-auto max-w-[1160px] space-y-12 sm:space-y-16 lg:space-y-24">
        {steps.map((step, idx) => (
          <article
            key={step.number}
            style={{
              top: `calc(96px + ${idx} * 24px)`,
              transform: `scale(calc(1 - var(--depth, 0) * 0.035))`,
              willChange: 'transform',
            }}
            className={`hww-stack-card sticky isolation-auto rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl transition-transform duration-200 overflow-hidden ${step.cardMeshClass}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Content Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Giant Step Number */}
                  <span
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-mono opacity-90 block mb-3"
                    style={{ color: step.accentColor }}
                  >
                    {step.number}
                  </span>

                  {/* Step Title with Playfair Accent */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                    {step.title}{' '}
                    <em
                      className="accent-serif font-normal not-italic"
                      style={{ color: step.accentColor }}
                    >
                      {step.titleAccent}
                    </em>
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
                    {step.description}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Promise Tick Footer */}
                <div className="pt-5 border-t border-white/20 flex items-center gap-3 text-xs sm:text-sm font-medium text-white">
                  <span className="w-6 h-6 rounded-full bg-[#B9F36B] text-[#0A0B0D] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{step.promise}</span>
                </div>
              </div>

              {/* Media Column (5 cols) - 100% Crisp Image, NO OVERLAY */}
              <div className="lg:col-span-5 w-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-black">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
