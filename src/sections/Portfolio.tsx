import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

/* ── Apple Spring Physics Constants (WWDC Fluid Interfaces) ── */
const springCard = { type: 'spring', stiffness: 350, damping: 26 } as const;

export default function Portfolio() {
  const isVertical = projects.length < 3;

  return (
    <section
      id="portfolio"
      className="relative bg-[#0A0B0D] py-24 md:py-32 overflow-hidden border-b border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-[#B9F36B] text-xs font-mono uppercase tracking-[0.14em] font-semibold block mb-2">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Built for impact, <span className="text-[#A6A8AC]">scaled for growth.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A6A8AC] max-w-md">
            A curated selection of modern digital platforms, brand systems, and automated software engineered by The ThreeFaces.
          </p>
        </div>

        {/* Projects Layout: dynamic vertical if < 3, 3-column grid if >= 3 */}
        <div
          className={
            isVertical
              ? 'flex flex-col gap-8 max-w-5xl mx-auto'
              : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
          }
        >
          {projects.map((project) => {
            const isExternal = Boolean(project.link && project.link.startsWith('http'));

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={springCard}
                className={
                  isVertical
                    ? 'group relative rounded-3xl border border-white/[0.12] border-t-white/[0.22] bg-[#141619]/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 hover:border-[#B9F36B]/35 transition-colors duration-200'
                    : 'group relative rounded-3xl border border-white/[0.12] border-t-white/[0.22] bg-[#141619]/90 backdrop-blur-xl p-3 sm:p-4 shadow-xl flex flex-col justify-between hover:border-[#B9F36B]/35 transition-colors duration-200'
                }
              >
                {/* Media Container with 100% Crisp Visual, NO OVERLAY */}
                <div
                  className={
                    isVertical
                      ? 'relative aspect-[16/10] w-full md:w-[46%] rounded-2xl overflow-hidden bg-[#101113] shrink-0'
                      : 'relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#101113] mb-4'
                  }
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#0A0B0D]/85 border border-white/15 text-white backdrop-blur-md font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {project.statusBadge && (
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border backdrop-blur-md font-bold tracking-wide ${
                          project.statusBadge === 'Live Site'
                            ? 'bg-[#B9F36B]/20 text-[#B9F36B] border-[#B9F36B]/40 shadow-sm shadow-[#B9F36B]/20'
                            : 'bg-[#141619]/80 text-[#A6A8AC] border-white/15'
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={
                    isVertical
                      ? 'flex flex-col flex-1 justify-between gap-4 py-1'
                      : 'px-1 flex flex-col flex-1 justify-between'
                  }
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#B9F36B] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A6A8AC] leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#A6A8AC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link || '#contact'}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white hover:bg-[#B9F36B] hover:text-[#0A0B0D] transition-all text-xs font-mono font-semibold shrink-0 group/btn active:scale-95 shadow-sm"
                      aria-label={`View ${project.title}`}
                    >
                      <span>{isExternal ? 'Visit Website' : 'Explore Project'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
