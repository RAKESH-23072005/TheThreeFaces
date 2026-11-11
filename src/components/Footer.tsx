import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { contactConfig } from '../data/contact';
import { InstagramIcon, LinkedinIcon, GithubIcon, WhatsAppIcon } from './BrandIcons';

const serviceLinks = [
  'Website Development',
  'Web Applications',
  'Mobile Applications',
  'E-commerce Solutions',
  'Workflow Automation',
];

const companyLinks = [
  { label: 'How We Work', href: '#process' },
  { label: 'Selected Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Common Questions', href: '#faq' },
  { label: 'Start a Project', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: contactConfig.social.instagram, icon: InstagramIcon },
  { label: 'LinkedIn', href: contactConfig.social.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: contactConfig.social.github, icon: GithubIcon },
  { label: 'WhatsApp', href: contactConfig.social.whatsapp, icon: WhatsAppIcon },
];

export default function Footer() {
  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    [],
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="relative bg-[#0A0B0D] border-t border-white/[0.08] text-white overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#B9F36B]/[0.02] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-14 pb-10 sm:pt-16 sm:pb-12">
        {/* Main Grid: Responsive layout optimized for mobile */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 mb-12 sm:mb-16">
          {/* ── Brand Column (4 cols on lg) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-emblem.png"
                alt="The ThreeFaces Emblem"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
              <div>
                <span className="text-base sm:text-lg font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-white block">
                  THE THREEFACES
                </span>
                <span className="text-[11px] font-mono text-[#B9F36B] tracking-wider block font-semibold">
                  Three Perspectives. One Digital Vision.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A6A8AC] leading-relaxed max-w-sm mb-5">
              A modern software design and web engineering studio helping ambitious founders, brands, and enterprises craft extraordinary digital experiences.
            </p>
          </motion.div>

          {/* ── Navigation: 2-Column Side-by-Side on Mobile (5 cols on lg) ── */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-5">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#B9F36B]">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <span className="text-xs sm:text-sm text-[#A6A8AC] hover:text-white transition-colors duration-200 block py-0.5">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#B9F36B]">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="text-xs sm:text-sm text-[#A6A8AC] hover:text-[#B9F36B] transition-colors duration-200 block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Connect Section (3 cols on lg) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col"
          >
            <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#B9F36B]">
              Connect
            </h4>

            {/* Mobile: Horizontal wrapped touch chips; Desktop: Vertical interactive list */}
            <div className="flex flex-wrap sm:flex-col gap-2 sm:gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#A6A8AC] hover:text-white hover:border-[#B9F36B]/40 hover:bg-[#141619] transition-all duration-200 active:scale-95 group min-h-[38px]"
                >
                  <Icon className="h-4 w-4 text-[#A6A8AC] group-hover:text-[#B9F36B] transition-colors shrink-0" />
                  <span className="font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Bar: Clean mobile row / stack ── */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#A6A8AC] text-center sm:text-left">
            © {new Date().getFullYear()} The ThreeFaces. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#A6A8AC] hidden sm:inline">
              Back to top
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#141619] border border-white/[0.12] text-[#A6A8AC] hover:text-[#0A0B0D] hover:bg-[#B9F36B] hover:border-[#B9F36B] transition-colors duration-200 cursor-pointer shadow-md"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
