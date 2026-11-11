import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { contactConfig } from '../data/contact';
import { InstagramIcon, LinkedinIcon, GithubIcon, WhatsAppIcon } from './BrandIcons';

const serviceLinks = [
  'Website Development',
  'Web Applications',
  'Mobile Applications',
  'E-commerce',
  'Automation',
];

const companyLinks = [
  { label: 'How We Work', href: '#process' },
  { label: 'Selected Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Common Questions', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: contactConfig.social.instagram, icon: InstagramIcon },
  { label: 'LinkedIn', href: contactConfig.social.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: contactConfig.social.github, icon: GithubIcon },
  { label: 'WhatsApp', href: contactConfig.social.whatsapp, icon: WhatsAppIcon },
];

function Footer() {
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

  const headingStyle = 'mb-5 text-xs font-semibold uppercase tracking-[0.2em]';

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: '#101113',
        borderTop: '1px solid rgba(42, 45, 50, 0.6)',
      }}
    >
      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* ── Brand ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo-emblem.png"
              alt="The ThreeFaces Emblem"
              className="h-12 w-auto object-contain rounded-md"
            />
            <div>
              <span className="text-lg font-extrabold tracking-[0.22em] text-white block">
                THE THREEFACES
              </span>
              <span className="text-xs text-[#B9F36B] tracking-wider block font-medium">
                Three Perspectives. One Digital Vision.
              </span>
            </div>
          </div>
          <p
            className="mt-3 max-w-xs text-sm leading-relaxed"
            style={{ color: '#A6A8AC' }}
          >
            A digital solutions agency helping startups, entrepreneurs, and established businesses build their digital presence through modern websites, web applications, and automation.
          </p>
        </motion.div>

        {/* ── Services ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className={headingStyle} style={{ color: '#B9F36B' }}>
            Services
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <span
                  className="text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: '#A6A8AC' }}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Company ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className={headingStyle} style={{ color: '#B9F36B' }}>
            Company
          </h4>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#A6A8AC' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A6A8AC')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Connect ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className={headingStyle} style={{ color: '#B9F36B' }}>
            Connect
          </h4>
          <ul className="space-y-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors duration-200 py-1.5 min-h-[38px]"
                  style={{ color: '#A6A8AC' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A6A8AC')}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10"
        style={{
          borderTop: '1px solid rgba(42, 45, 50, 0.5)',
          paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
        }}
      >
        <p className="text-xs" style={{ color: '#A6A8AC' }}>
          © 2026 The ThreeFaces. All rights reserved.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 cursor-pointer"
          style={{
            backgroundColor: '#1E2024',
            border: '1px solid #2A2D32',
            color: '#A6A8AC',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B9F36B';
            e.currentTarget.style.color = '#101113';
            e.currentTarget.style.borderColor = '#B9F36B';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1E2024';
            e.currentTarget.style.color = '#A6A8AC';
            e.currentTarget.style.borderColor = '#2A2D32';
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
}

export default Footer;
