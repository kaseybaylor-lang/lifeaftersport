"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const painPoints = [
  {
    icon: "📋",
    title: "Limited internship or job experience",
  },
  {
    icon: "🤔",
    title: "Uncertainty about career pathways",
  },
  {
    icon: "🎯",
    title: "Lack of tailored guidance",
  },
  {
    icon: "⚠️",
    title: "A perceived disadvantage and lack of confidence in the job market",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="min-h-screen grid-texture py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>PROBLEM</SectionHeading>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-xl md:text-2xl max-w-4xl mx-auto mt-8 leading-relaxed text-center"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Student-athletes spend years optimizing for performance rather than
          career preparation. By graduation, many begin to face:
        </motion.p>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[var(--background-card)] border border-[var(--text-secondary)]/20 rounded-lg p-8 h-full transition-all duration-300 hover:border-[var(--primary-yellow)]/40 hover:shadow-lg hover:shadow-[var(--primary-yellow)]/10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <p
                    className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-lg leading-relaxed"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {point.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[var(--primary-yellow)]/10 to-transparent border-l-4 border-[var(--primary-yellow)] p-8 rounded-r-lg">
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--primary-yellow)] text-2xl md:text-3xl italic font-[500] leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The transition out of sport is often abrupt, confusing, and
              unsupported.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
