import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  num: string;
  question: string;
  answer: string[];
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    num: '1',
    question: 'What services do you offer?',
    answer: [
      'We work across full-stack web and mobile development, UI/UX design, brand systems, and intelligent business automation.',
      'Most clients come to us for high-converting custom platforms, enterprise design systems, or bespoke operational workflows tailored to their business model.',
    ],
  },
  {
    id: 'faq-2',
    num: '2',
    question: 'How long does a project take?',
    answer: [
      'Timelines depend on project scope, but typical brand identities and custom landing pages are delivered in 2–3 weeks.',
      'Larger web applications, custom platforms, and full-stack software usually take 4–6 weeks from discovery to deployment.',
    ],
  },
  {
    id: 'faq-3',
    num: '3',
    question: 'How do project milestones and payments work?',
    answer: [
      'We operate on transparent milestone-based deliverables. We typically structure engagements with an initial kickoff deposit, milestone review sign-offs, and final balance upon deployment.',
      'You receive 100% intellectual property ownership of all code, assets, and design tokens upon completion.',
    ],
  },
  {
    id: 'faq-4',
    num: '4',
    question: 'Do you provide ongoing support after launch?',
    answer: [
      'Yes. Every project includes a 30-day post-launch warranty with zero-downtime monitoring.',
      'We also provide continuous maintenance retainers for brands requiring regular feature additions, performance tuning, and 24/7 security updates.',
    ],
  },
  {
    id: 'faq-5',
    num: '5',
    question: 'How do we get started?',
    answer: [
      'Simply click "Start a Project" or use the contact form to tell us about your goals.',
      'We schedule a complimentary 30-minute discovery call to map your requirements and provide an itemized proposal within 24 hours.',
    ],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-2');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative bg-[#0A0B0D] text-white py-24 md:py-36 overflow-hidden border-b border-white/[0.06]"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mx-auto mb-16 sm:mb-20 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#141619] mb-4 shadow-sm">
            <span className="text-[#B9F36B] text-[11px] font-mono uppercase tracking-[0.14em] font-bold">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white text-center w-full">
            Common{' '}
            <span className="accent-serif text-[#B9F36B] font-normal not-italic">
              questions
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <ul className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <li
                key={item.id}
                className="rounded-2xl border border-white/[0.08] border-t-white/[0.16] bg-[#141619] transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-7 text-left cursor-pointer transition-colors hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="text-sm sm:text-base font-mono font-bold text-[#B9F36B] shrink-0">
                      {item.num}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>

                  <span className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center shrink-0 text-[#B9F36B]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-white/[0.08] bg-[#101113]/80 px-5 sm:px-7 py-5 sm:py-6"
                    >
                      <div className="space-y-3 text-sm sm:text-base text-[#A6A8AC] leading-relaxed">
                        {item.answer.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

