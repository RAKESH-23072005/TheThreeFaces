import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

/* ── Apple Spring Physics Constants ── */
const springTactile = { type: 'spring', stiffness: 400, damping: 28 } as const;

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0D] py-28 md:py-36 border-t border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full bg-[#B9F36B]/[0.04] blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#141619] mb-6 shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#B9F36B]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#B9F36B] font-bold">
            Next Project Sprint
          </span>
        </motion.div>

        {/* Display Headline (The Shawon .sh-cta Style) */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white leading-[1.05] mb-6"
        >
          Ready to build your brand with{' '}
          <em className="accent-serif text-[#B9F36B] font-normal not-italic block sm:inline">
            The ThreeFaces?
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-base sm:text-lg md:text-xl text-[#A6A8AC] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Tell us about your product vision, timeline, and goals. We'll assemble the right strategy, technical architecture, and milestones within 24 hours.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={springTactile}
            className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-sm shadow-[0_13px_28px_rgba(185,243,107,0.35)] hover:bg-[#cbf988] transition-all min-h-[52px]"
          >
            <span>Start a project</span>
            <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/15 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0B0D] stroke-[2.5]" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={springTactile}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-white/[0.14] bg-[#141619]/90 text-white font-medium text-sm backdrop-blur-xl hover:bg-white/[0.08] transition-all min-h-[52px]"
          >
            <MessageSquare className="w-4 h-4 text-[#A6A8AC]" />
            <span>Talk to us →</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
