import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const paginate = useCallback(
    (dir: number) => {
      setCurrent((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [isPaused, paginate, total]);

  if (!testimonials.length) return null;

  const activeItem = testimonials[current];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0A0B0D] py-24 md:py-32 border-b border-white/[0.06]"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] rounded-full bg-[#B9F36B]/[0.025] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: The Shawon Header & Rating Summary (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#141619] mb-4">
              <span className="text-[#B9F36B] text-[11px] font-mono uppercase tracking-[0.14em] font-bold">
                Reviews & Ratings
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-white mb-6 leading-[1.08]">
              What our <br />
              <em className="accent-serif text-[#B9F36B] font-normal not-italic">
                happy clients
              </em>{" "}
              <br />
              say about us
            </h2>

            {/* Apple Verified Rating Glass Module */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="w-full sm:w-auto p-5 rounded-2xl sm:rounded-3xl border border-white/[0.12] border-t-white/[0.25] bg-[#141619]/90 backdrop-blur-2xl mb-8 shadow-xl relative overflow-hidden group text-left"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFB800] text-[#FFB800] drop-shadow-[0_2px_8px_rgba(255,184,0,0.35)]"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B9F36B]/15 text-[#B9F36B] text-[10px] font-mono font-bold tracking-wider">
                  VERIFIED REVIEWS
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans text-white tracking-tight">
                  4.9
                </span>
                <span className="text-sm font-mono text-[#A6A8AC]">/ 5.0 Rating</span>
              </div>

              <p className="text-xs text-[#A6A8AC] leading-relaxed max-w-xs">
                Across 50+ enterprise and startup launches with 100% on-time milestone delivery.
              </p>
            </motion.div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-sm hover:bg-[#cbf988] transition-all shadow-[0_8px_20px_rgba(185,243,107,0.25)] group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0B0D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* ── Right Column: Interactive Review Card Deck (7 cols) ── */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative min-h-[340px] sm:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.article
                  key={current}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-white/[0.12] border-t-white/[0.24] bg-[#141619]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Top bar with quotation & rating */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#F5C22B] text-[#F5C22B]"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#B9F36B]/15 text-[#B9F36B] font-semibold">
                        {activeItem.projectType}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed mb-8 italic">
                      "{activeItem.review}"
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#B9F36B] to-[#42e695] p-0.5 shadow-md">
                        <div className="w-full h-full rounded-full bg-[#101113] flex items-center justify-center font-bold text-sm text-[#B9F36B]">
                          {activeItem.initials || activeItem.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {activeItem.name}
                        </h4>
                        <p className="text-xs text-[#A6A8AC] font-mono">
                          {activeItem.company}
                        </p>
                      </div>
                    </div>

                    {/* Carousel controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => paginate(-1)}
                        className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => paginate(1)}
                        className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next review"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current ? "w-8 bg-[#B9F36B]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
