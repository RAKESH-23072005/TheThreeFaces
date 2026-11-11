import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

/* ── Apple Spring Physics Constants (WWDC Fluid Interfaces) ── */
const springTactile = { type: 'spring', stiffness: 400, damping: 28 } as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center py-28 sm:py-36 bg-[#0A0B0D] text-white"
    >
      {/* ── Subtle Geometric Dot Grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Soft chromatic background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] rounded-full bg-[#B9F36B]/[0.05] blur-[170px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-[#818CF8]/[0.04] blur-[160px]" />
      </div>

      {/* ── Main Hero Studio Composition ── */}
      <div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center my-auto"
      >
        {/* Display Headline with Tight Negative Tracking & Playfair Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-[44px] xs:text-[54px] sm:text-[68px] md:text-[84px] lg:text-[98px] font-extrabold tracking-[-0.045em] leading-[0.98] text-white max-w-4xl mb-6"
        >
          Make your brand<br />
          impossible to{' '}
          <span className="accent-serif text-[#B9F36B] inline-block font-normal not-italic">
            ignore.
          </span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#A6A8AC] leading-[1.65] max-w-2xl mb-10 sm:mb-12 tracking-[-0.01em]"
        >
          We architect custom digital platforms, expressive brand identities, and intelligent business automations for ambitious founders and companies moving the world forward.
        </motion.p>

        {/* Action Buttons (Apple Tactile Spring Responses) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={springTactile}
            className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-sm transition-all duration-200 hover:bg-[#cbf988] shadow-[0_13px_28px_rgba(185,243,107,0.35)] min-h-[52px]"
          >
            <span>Start a project</span>
            <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0B0D] stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={springTactile}
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl border border-white/[0.14] bg-[#141619]/90 hover:bg-white/[0.08] text-white font-medium text-sm backdrop-blur-xl transition-all duration-200 min-h-[52px]"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4 text-[#A6A8AC] transition-transform duration-200 group-hover:translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
