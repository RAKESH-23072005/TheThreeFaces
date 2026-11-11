import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Loader2,
  Info,
} from 'lucide-react';
import { contactConfig } from '../data/contact';
import { InstagramIcon, LinkedinIcon, GithubIcon } from '../components/BrandIcons';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  description?: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  description: '',
};

const serviceOptions = [
  'Website Development',
  'Web Application',
  'Mobile Application',
  'E-commerce',
  'UI/UX Design',
  'Business Automation',
  'Other',
];

const budgetOptions = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not Sure',
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  'w-full rounded-xl border border-white/[0.08] border-t-white/[0.14] bg-[#15171A]/90 backdrop-blur-md px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 transition-all duration-150 outline-none focus:border-[#B9F36B] focus:ring-2 focus:ring-[#B9F36B]/30';

const selectClasses =
  'w-full appearance-none rounded-xl border border-white/[0.08] border-t-white/[0.14] bg-[#15171A]/90 backdrop-blur-md px-4 py-3 text-base sm:text-sm text-white transition-all duration-150 outline-none focus:border-[#B9F36B] focus:ring-2 focus:ring-[#B9F36B]/30';

const labelClasses = 'mb-1.5 block text-xs font-mono uppercase tracking-wider text-[#A6A8AC]';

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="mt-1.5 text-sm text-red-400">{message}</p> : null;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [noEndpoint, setNoEndpoint] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.description.trim())
      newErrors.description = 'Project description is required.';
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name as keyof FormErrors];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setNoEndpoint(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!contactConfig.formEndpoint) {
      setNoEndpoint(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="contact" className="relative bg-[#101113] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="text-[#B9F36B] text-xs font-mono uppercase tracking-[0.08em]">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s build something{' '}
            <span className="accent-serif text-[#B9F36B] font-normal not-italic">
              extraordinary.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
            noValidate
          >
            {/* Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-[#B9F36B]/30 bg-[#B9F36B]/10 p-6 text-center"
              >
                <p className="text-lg font-semibold text-[#B9F36B]">
                  Thank you! Your enquiry has been sent.
                </p>
                <p className="mt-1 text-sm text-[#A6A8AC]">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-[#B9F36B] underline underline-offset-4 transition-colors hover:text-white"
                >
                  Send another enquiry
                </button>
              </motion.div>
            )}

            {!submitted && (
              <>
                {/* No endpoint info */}
                {noEndpoint && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4"
                  >
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <p className="text-sm leading-relaxed text-blue-300">
                      Form submission endpoint not configured. Please set up a
                      backend integration.
                    </p>
                  </motion.div>
                )}

                {/* Submit error */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-500/30 bg-red-500/10 p-4"
                  >
                    <p className="text-sm text-red-400">{submitError}</p>
                  </motion.div>
                )}

                {/* Row: Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="fullName" className={labelClasses}>
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <FieldError message={errors.fullName} />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. vikram@studio.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <FieldError message={errors.email} />
                  </motion.div>
                </div>

                {/* Row: Phone + Company */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="company" className={labelClasses}>
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g. Square Medical / Indie Filmworks"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                {/* Row: Service + Budget */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="service" className={labelClasses}>
                      Service Required <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${selectClasses} ${!formData.service ? 'text-[#A6A8AC]' : ''
                          }`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-white bg-[#191B1E]">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-4 w-4 text-[#A6A8AC]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <FieldError message={errors.service} />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="budget" className={labelClasses}>
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`${selectClasses} ${!formData.budget ? 'text-[#A6A8AC]' : ''
                          }`}
                      >
                        <option value="" disabled>
                          Select your budget
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-white bg-[#191B1E]">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-4 w-4 text-[#A6A8AC]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="description" className={labelClasses}>
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your project vision, target timeline, key deliverables, and requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                  <FieldError message={errors.description} />
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    style={{
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 30px -10px rgba(185,243,107,0.35)',
                    }}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B9F36B] px-8 py-4 text-base font-bold text-[#101113] transition-colors duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer min-h-[52px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Project Enquiry</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </>
            )}
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Contact Information
              </h3>

              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-[#2A2D32] bg-[#1E2024] p-4 transition-all duration-300 hover:border-[#B9F36B]/30 hover:bg-[#1E2024]/80"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B9F36B]/10">
                  <Mail className="h-5 w-5 text-[#B9F36B]" />
                </div>
                <div>
                  <p className="text-xs text-[#A6A8AC]">Email</p>
                  <p className="text-sm font-medium text-white">
                    {contactConfig.email}
                  </p>
                </div>
              </a>
              <a
                href={contactConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#2A2D32] bg-[#1E2024] p-4 transition-all duration-300 hover:border-[#B9F36B]/30 hover:bg-[#1E2024]/80"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B9F36B]/10">
                  <MessageCircle className="h-5 w-5 text-[#B9F36B]" />
                </div>
                <div>
                  <p className="text-xs text-[#A6A8AC]">WhatsApp</p>
                  <p className="text-sm font-medium text-white">
                    Chat on WhatsApp
                  </p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: InstagramIcon,
                    href: contactConfig.social.instagram,
                    label: 'Instagram',
                  },
                  {
                    icon: LinkedinIcon,
                    href: contactConfig.social.linkedin,
                    label: 'LinkedIn',
                  },
                  {
                    icon: GithubIcon,
                    href: contactConfig.social.github,
                    label: 'GitHub',
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#2A2D32] bg-[#1E2024] text-[#A6A8AC] transition-all duration-300 hover:border-[#B9F36B]/40 hover:bg-[#B9F36B]/10 hover:text-[#B9F36B]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA blurb */}
            <div className="rounded-xl border border-[#2A2D32] bg-gradient-to-br from-[#1E2024] to-[#191B1E] p-6">
              <p className="text-sm leading-relaxed text-[#A6A8AC]">
                Prefer a quick conversation? Reach out on WhatsApp or email us
                directly. We typically respond within a few hours during business
                days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
