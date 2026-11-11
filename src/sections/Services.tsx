import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0A0B0D] text-white py-24 md:py-36 overflow-hidden border-b border-white/[0.06]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section Header (The Shawon .wwd Style) */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#141619] mb-5 shadow-sm"
          >
            <span className="text-[#B9F36B] text-[11px] font-mono uppercase tracking-[0.14em] font-bold">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.04em] leading-[1.05] mb-6"
          >
            Three disciplines.{" "}
            <span className="text-[#A6A8AC] font-medium">No filler </span>
            <br />
            <span className="accent-serif text-[#B9F36B] font-normal not-italic">
              done properly.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-[#A6A8AC] max-w-xl mx-auto leading-relaxed"
          >
            Specialized execution across full-stack software, brand identity design, and business automation — with zero bloated agency overhead.
          </motion.p>
        </div>

        {/* Services Grid (The Shawon .wwd__grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl border border-white/[0.08] border-t-white/[0.18] bg-[#141619] hover:bg-[#181B1F] hover:border-[#B9F36B]/40 p-7 sm:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#B9F36B] group-hover:bg-[#B9F36B] group-hover:text-[#0A0B0D] transition-colors shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#A6A8AC] group-hover:text-white group-hover:border-[#B9F36B]/50 transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#B9F36B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A6A8AC] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features Pill List */}
                {service.features && (
                  <div className="pt-4 border-t border-white/[0.08]">
                    <ul className="flex flex-wrap gap-1.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#A6A8AC]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
