import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowUpRight,
  PenLine,
  X,
  CheckCircle2,
  Send,
} from "lucide-react";
import { testimonials as defaultTestimonials, type Testimonial } from "../data/testimonials";

const STORAGE_KEY = "threefaces_client_reviews";

const projectTypes = [
  "Website Development",
  "Web Application",
  "E-commerce Platform",
  "Workflow Automation",
  "Brand & Design System",
  "Custom Digital Solution",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "CL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length) {
            return [...parsed, ...defaultTestimonials];
          }
        }
      } catch (err) {
        console.warn("Could not load stored reviews:", err);
      }
    }
    return defaultTestimonials;
  });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: projectTypes[0],
    review: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const total = items.length;

  const paginate = useCallback(
    (dir: number) => {
      setCurrent((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (isPaused || isModalOpen || total <= 1) return;
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [isPaused, isModalOpen, paginate, total]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleRatingSelect = (val: number) => {
    setRating(val);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.company.trim()) errors.company = "Please enter your company or role.";
    if (!formData.review.trim()) errors.review = "Please share a few words about your experience.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newReview: Testimonial = {
      id: `client-review-${Date.now()}`,
      name: formData.name.trim(),
      company: formData.company.trim(),
      projectType: formData.projectType,
      review: formData.review.trim(),
      initials: getInitials(formData.name),
      rating,
    };

    const updated = [newReview, ...items];
    setItems(updated);
    setCurrent(0);

    // Persist user reviews in localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newReview, ...existing]));
    } catch (err) {
      console.warn("Could not save review locally:", err);
    }

    setSubmitted(true);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        projectType: projectTypes[0],
        review: "",
      });
      setRating(5);
      setFormErrors({});
    }, 300);
  };

  if (!items.length) return null;

  const activeItem = items[current];

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
          {/* ── Left Column: Header & Review Actions (5 cols) ── */}
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
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
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

            {/* CTA & Leave Review Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-sm hover:bg-[#cbf988] transition-all shadow-[0_8px_20px_rgba(185,243,107,0.25)] group active:scale-95"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0B0D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.14] border-t-white/[0.22] bg-[#141619] hover:bg-[#1a1d22] text-white hover:text-[#B9F36B] hover:border-[#B9F36B]/40 font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <PenLine className="w-4 h-4 text-[#B9F36B]" />
                <span>Leave a Review</span>
              </button>
            </div>
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
                  key={activeItem.id || current}
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
                            className={`w-4 h-4 ${
                              i < (activeItem.rating ?? 5)
                                ? "fill-[#FFB800] text-[#FFB800] drop-shadow-[0_2px_8px_rgba(255,184,0,0.35)]"
                                : "fill-transparent text-white/20"
                            }`}
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
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#B9F36B] to-[#42e695] p-0.5 shadow-md shrink-0">
                        <div className="w-full h-full rounded-full bg-[#101113] flex items-center justify-center font-bold text-sm text-[#B9F36B]">
                          {activeItem.initials || activeItem.name.charAt(0)}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-white truncate">
                          {activeItem.name}
                        </h4>
                        <p className="text-xs text-[#A6A8AC] font-mono truncate">
                          {activeItem.company}
                        </p>
                      </div>
                    </div>

                    {/* Carousel controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => paginate(-1)}
                        className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => paginate(1)}
                        className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95"
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
              {items.map((_, idx) => (
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

      {/* ── Client Direct Review Submission Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={resetModal}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-white/[0.14] border-t-white/[0.25] bg-[#141619] p-6 sm:p-8 shadow-2xl shadow-black/90 my-auto text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={resetModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#A6A8AC] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#B9F36B]/15 border border-[#B9F36B]/30 flex items-center justify-center mb-4 text-[#B9F36B]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Review Submitted!
                  </h3>
                  <p className="text-sm text-[#A6A8AC] max-w-sm mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your verified review is now live in our client showcase.
                  </p>
                  <button
                    type="button"
                    onClick={resetModal}
                    className="px-6 py-3 rounded-xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-sm hover:bg-[#cbf988] transition-all cursor-pointer shadow-md shadow-[#B9F36B]/20"
                  >
                    View on Website
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-[#B9F36B] uppercase tracking-[0.14em] font-bold block mb-1">
                      Client Feedback
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Share Your Experience
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A8AC] mt-1 leading-relaxed">
                      Partnered with The ThreeFaces? We value your direct thoughts, milestone feedback, and honest rating.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    {/* Star Rating Selector */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A8AC] mb-2">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] w-fit">
                          {[1, 2, 3, 4, 5].map((starVal) => {
                            const isFilled =
                              hoverRating !== null
                                ? starVal <= hoverRating
                                : starVal <= rating;

                            return (
                              <button
                                key={starVal}
                                type="button"
                                onClick={() => handleRatingSelect(starVal)}
                                onMouseEnter={() => setHoverRating(starVal)}
                                onMouseLeave={() => setHoverRating(null)}
                                className="p-1 hover:scale-110 transition-transform cursor-pointer"
                                aria-label={`Rate ${starVal} stars`}
                              >
                                <Star
                                  className={`w-6 h-6 transition-colors ${
                                    isFilled
                                      ? "fill-[#FFB800] text-[#FFB800] drop-shadow-[0_2px_8px_rgba(255,184,0,0.4)]"
                                      : "fill-transparent text-white/20 hover:text-white/40"
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>
                        <span className="text-xs font-mono text-[#B9F36B] font-semibold pl-2">
                          {rating === 5 && "5.0 ★ Exceptional"}
                          {rating === 4 && "4.0 ★ Very Good"}
                          {rating === 3 && "3.0 ★ Good"}
                          {rating === 2 && "2.0 ★ Fair"}
                          {rating === 1 && "1.0 ★ Needs Work"}
                        </span>
                      </div>
                    </div>

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A8AC] mb-1.5">
                          Full Name <span className="text-[#B9F36B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anand Rajan"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#B9F36B] focus:ring-1 focus:ring-[#B9F36B]/30 transition-all"
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A8AC] mb-1.5">
                          Company / Role <span className="text-[#B9F36B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Founder, Pulse Health"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#B9F36B] focus:ring-1 focus:ring-[#B9F36B]/30 transition-all"
                        />
                        {formErrors.company && (
                          <p className="text-[11px] text-red-400 mt-1">{formErrors.company}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A8AC] mb-1.5">
                        Project Type / Service
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/[0.08] bg-[#141619] px-3.5 py-2.5 text-sm text-white outline-none focus:border-[#B9F36B] focus:ring-1 focus:ring-[#B9F36B]/30 transition-all cursor-pointer"
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt} className="bg-[#141619] text-white">
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A6A8AC] mb-1.5">
                        Your Review <span className="text-[#B9F36B]">*</span>
                      </label>
                      <textarea
                        name="review"
                        rows={3}
                        value={formData.review}
                        onChange={handleInputChange}
                        placeholder="Tell us about the project outcome, communication, engineering quality, or impact on your business..."
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#B9F36B] focus:ring-1 focus:ring-[#B9F36B]/30 transition-all resize-none"
                      />
                      {formErrors.review && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.review}</p>
                      )}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={resetModal}
                        className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-[#A6A8AC] hover:text-white transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-xs font-mono hover:bg-[#cbf988] transition-all shadow-md shadow-[#B9F36B]/20 active:scale-95 cursor-pointer"
                      >
                        <span>Publish Review</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
