"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const valueProps = [
  "Reducing career transition friction for athletes",
  "Translating athletic experience into employer-relevant skills",
  "Connecting companies with high-performance individuals",
  "Building a scalable ecosystem across universities and industries",
];

export default function Opportunity() {
  return (
    <section id="solution" className="min-h-screen py-32 relative overflow-hidden">
      {/* Different visual treatment - diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-dark)] via-[var(--background-card)] to-[var(--background-dark)]" />

      {/* Denser grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(232, 224, 0, 0.04),
              rgba(232, 224, 0, 0.04) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(232, 224, 0, 0.04),
              rgba(232, 224, 0, 0.04) 1px,
              transparent 1px,
              transparent 30px
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
          <SectionHeading>OPPORTUNITY</SectionHeading>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center mt-24">
          {/* Left Side - Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--background-card)] to-[var(--background-dark)] rounded-2xl border-2 border-[var(--primary-yellow)]/30 shadow-2xl shadow-[var(--primary-yellow)]/20 overflow-hidden">
              {/* Mockup Frame */}
              <div className="absolute inset-0 p-8 flex flex-col">
                {/* Fake browser/app header */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)]/40" />
                  <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)]/40" />
                  <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)]/40" />
                </div>

                {/* Mockup Content */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <h3
                      className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] text-3xl md:text-4xl uppercase text-center leading-tight"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Plan For Your
                      <br />
                      Next Season
                    </h3>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 right-8 h-2 bg-[var(--primary-yellow)]/20 rounded-full" />
                <div className="absolute bottom-12 left-8 right-24 h-2 bg-[var(--primary-yellow)]/10 rounded-full" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-yellow)]/5 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-12"
          >
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Student-athletes represent a uniquely valuable yet under-leveraged
              talent market.
            </p>

            <div>
              <h3
                className="font-[family-name:var(--font-oswald)] font-[600] text-[var(--primary-yellow)] text-2xl uppercase mb-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Life After Sport creates value by:
              </h3>

              <div className="space-y-8">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Yellow accent number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary-yellow)]/20 border border-[var(--primary-yellow)] flex items-center justify-center group-hover:bg-[var(--primary-yellow)] transition-all duration-300">
                      <span
                        className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] group-hover:text-[var(--background-dark)] text-sm"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <p
                      className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-lg leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {prop}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
