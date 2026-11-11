import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Target,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ── Apple Spring Physics Constants (Critically Damped) ── */
const springCard = { type: "spring", stiffness: 350, damping: 26 } as const;

/* ── Feature Data with Verified Stock Photography & Glass Metrics ── */
interface FeatureItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  topBadge: {
    icon: typeof Sparkles;
    text: string;
    accent: string;
  };
}

const features: FeatureItem[] = [
  {
    number: "01",
    title: "Design That Matters",
    description:
      "We focus on clean, human-centered interfaces that make an unforgettable first impression. Every design is built with scalable design systems, custom component libraries, and fluid 60fps micro-interactions.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern web designer workspace with colorful responsive screens",
    topBadge: {
      icon: Palette,
      text: "Figma Tokens · Fluid Motion",
      accent: "#B9F36B",
    },
  },
  {
    number: "02",
    title: "Technology That Scales",
    description:
      "We use modern tech stacks to build ultra-fast, maintainable digital products. Built with TypeScript, modern frameworks, and edge computing for sub-second page loads and enterprise durability.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    alt: "Vibrant software code and modern developer workstation",
    topBadge: {
      icon: Code2,
      text: "React 19 · Edge Latency 120ms",
      accent: "#B9F36B",
    },
  },
  {
    number: "03",
    title: "Built Around Your Business",
    description:
      "Every project begins with deep strategic discovery. We analyze your customer acquisition funnel, revenue model, and operational needs to architect digital tools that drive measurable commercial growth.",

    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    alt: "Collaborative team strategy session in sleek architectural office",
    topBadge: {
      icon: Target,
      text: "Discovery · KPI Mapping",
      accent: "#B9F36B",
    },
  },
  {
    number: "04",
    title: "Continuous Support",
    description:
      "We stand behind everything we build. From real-time monitoring and security patching to continuous feature iteration, we ensure your digital platform remains secure, resilient, and ahead of the curve.",
  
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    alt: "Dynamic multi-metric operations dashboard with glowing graphs",
    topBadge: {
      icon: ShieldCheck,
      text: "99.98% SLA · 24/7 Monitoring",
      accent: "#B9F36B",
    },
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative bg-[#0A0B0D] py-24 md:py-32 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full bg-[#B9F36B]/[0.025] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-[#818CF8]/[0.02] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header (The Shawon .abt Style) */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#141619] mb-4"
          >
            <span className="text-[#B9F36B] text-[11px] font-mono uppercase tracking-[0.14em] font-bold">
              About The ThreeFaces
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.04em] leading-[1.05] mb-6"
          >
            We build <span className="text-white">brands</span>
            <br />
            that stand{" "}
            <span className="accent-serif text-[#B9F36B] font-normal not-italic">
              out.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-[#A6A8AC] leading-relaxed max-w-2xl mx-auto"
          >
            The ThreeFaces is a design & development agency for ambitious people and businesses. We combine sharp strategy, expressive design, and thoughtful engineering to make work that stays memorable.
          </motion.p>
        </div>

        {/* Agency Statistics Banner (Unified Apple Telemetry Capsule) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-white/[0.1] border-t-white/[0.22] bg-[#141619]/85 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 mb-24 md:mb-32 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Backlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#B9F36B]/[0.03] via-transparent to-[#818CF8]/[0.03]" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {[
              {
                value: "50+",
                label: "Projects Shipped",
                caption: "Full-stack apps & digital brands",
                accent: "#B9F36B",
              },
              {
                value: "99.98%",
                label: "System SLA",
                caption: "Edge infrastructure durability",
                accent: "#42E695",
              },
              {
                value: "4.9/5",
                label: "Client Rating",
                caption: "Consistent 5-star satisfaction",
                accent: "#FFB800",
              },
              {
                value: "<15m",
                label: "Response Velocity",
                caption: "Dedicated Slack & WhatsApp",
                accent: "#6BB9F3",
              },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-between ${
                  idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] tabular-nums font-sans text-white mb-2">
                    {stat.value.replace(/[+%m/5]/g, "")}
                    <span style={{ color: stat.accent }}>
                      {stat.value.match(/[+%m/5]+/)?.[0]}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight mb-1">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[11px] text-[#A6A8AC] font-mono leading-relaxed">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.number}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-14 lg:gap-20`}
              >
                {/* Visual Image Showcase Card (Apple Glass Finish) */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-1/2 group"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={springCard}
                    className="relative w-full rounded-3xl border border-white/[0.12] border-t-white/[0.25] bg-[#15171A]/90 backdrop-blur-2xl p-2.5 sm:p-3.5 shadow-2xl shadow-black/80 overflow-hidden"
                  >
                    {/* Image Container with Specular Framing */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#101113]">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      </div>
                  </motion.div>
                </motion.div>

                {/* Text Narrative Side */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-1/2"
                >
                  {/* Number Badge */}
                  <span className="text-[#B9F36B] text-5xl lg:text-6xl font-extrabold opacity-35 mb-2 block font-mono tracking-tight">
                    {feature.number}
                  </span>

                  {/* Accent Line */}
                  <div className="w-12 h-0.5 bg-[#B9F36B]/50 mb-5 rounded-full" />

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-[-0.02em] leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A6A8AC] text-base sm:text-lg leading-[1.65] max-w-lg mb-6">
                    {feature.description}
                  </p>

                  {/* Decorative Dots */}
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B9F36B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B9F36B]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B9F36B]/15" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
