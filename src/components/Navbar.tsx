import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollDirection } from '../hooks/useAnimations';

/* ── Apple Spring Physics Constants ── */
const springTactile = { type: 'spring', stiffness: 400, damping: 28 } as const;

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How We Work', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const scrolled = scrollY > 60;

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    [],
  );

  return (
    <>
      {/* ── Fixed Floating Nav Container (The Shawon .pill-nav) ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`mx-auto max-w-5xl transition-all duration-300 pointer-events-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border text-white ${
            scrolled
              ? 'bg-[#0A0B0D]/95 backdrop-blur-2xl border-white/[0.14] border-t-white/[0.28] shadow-2xl shadow-black/80'
              : 'bg-[#101113]/85 backdrop-blur-xl border-white/[0.1] border-t-white/[0.2] shadow-xl shadow-black/40'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="The ThreeFaces Home"
          >
            <img
              src="/logo-emblem.png"
              alt="The ThreeFaces"
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm sm:text-base font-bold tracking-tight">
              The ThreeFaces
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-[#A6A8AC] hover:text-white hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Hire Us Button (The Shawon Style adapted to Brand) */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={springTactile}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#B9F36B] text-[#0A0B0D] font-bold text-xs tracking-wide shadow-[0_6px_20px_rgba(185,243,107,0.3)] hover:brightness-105 transition-all cursor-pointer"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-white/[0.08] text-white hover:bg-white/[0.12]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Sheet Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#0A0B0D]/95 backdrop-blur-3xl pt-28 pb-8 px-6 flex flex-col justify-between sm:hidden"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#B9F36B] block mb-2 font-semibold">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-2xl font-bold text-white hover:text-[#B9F36B] transition-colors py-2 border-b border-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#B9F36B] text-[#0A0B0D] font-bold text-base shadow-xl"
              >
                <span>Hire Us · Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
