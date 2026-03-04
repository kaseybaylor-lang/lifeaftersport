"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  {
    title: "NCAA & Athletic Departments",
    description:
      "Credibility, athlete access, and roster-based outreach to build a master user network",
    isNCAA: true,
  },
  {
    title: "University Career Centers",
    description:
      "Career resources, employer connections, and transition programming",
    isNCAA: false,
  },
  {
    title: "Professional Athletes & Alumni Networks",
    description:
      "Mentorship, storytelling, and trust-building channels",
    isNCAA: false,
  },
  {
    title: "Recruiting & Job Platforms",
    description:
      "Expanded opportunity pipelines and employer integration",
    isNCAA: false,
  },
  {
    title: "Corporate Employers & Sponsors",
    description:
      "Direct access to high-performance talent",
    isNCAA: false,
  },
];

export default function Partners() {
  return (
    <section id="partners" className="min-h-screen py-32 relative overflow-hidden">
      {/* Background treatment similar to Opportunity section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-card)] via-[var(--background-dark)] to-[var(--background-card)]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(232, 224, 0, 0.04),
              rgba(232, 224, 0, 0.04) 1px,
              transparent 1px,
              transparent 35px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(232, 224, 0, 0.04),
              rgba(232, 224, 0, 0.04) 1px,
              transparent 1px,
              transparent 35px
            )
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>STRATEGIC PARTNERS</SectionHeading>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-xl md:text-2xl max-w-4xl mt-8"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Life After Sport embeds within the current student-athlete and campus
          employment ecosystem through strategic partnerships:
        </motion.p>

        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-[var(--background-card)] border-2 rounded-xl p-8 h-full transition-all duration-300 ${
                  partner.isNCAA
                    ? "border-[var(--accent-blue)]/40 hover:border-[var(--accent-blue)] hover:shadow-lg hover:shadow-[var(--accent-blue)]/20"
                    : "border-[var(--text-secondary)]/20 hover:border-[var(--primary-yellow)]/40 hover:shadow-lg hover:shadow-[var(--primary-yellow)]/10"
                } hover:-translate-y-1`}
              >
                <h3
                  className={`font-[family-name:var(--font-oswald)] font-[700] text-2xl uppercase mb-4 ${
                    partner.isNCAA
                      ? "text-[var(--accent-blue)]"
                      : "text-[var(--primary-yellow)]"
                  }`}
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {partner.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {partner.description}
                </p>

                {/* Visual accent for NCAA card */}
                {partner.isNCAA && (
                  <div className="mt-4 pt-4 border-t border-[var(--accent-blue)]/30">
                    <span
                      className="font-[family-name:var(--font-jakarta)] text-[var(--accent-blue)] text-sm uppercase tracking-wide font-[600]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Strategic Priority
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
