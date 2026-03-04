"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen grid-texture py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>EXPERIENCE PROVIDED</SectionHeading>
        </motion.div>

        <div className="space-y-12 mt-16 max-w-5xl mx-auto">
          {/* First Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--background-card)] border-l-4 border-[var(--primary-yellow)] p-10 md:p-12 rounded-r-2xl shadow-lg"
          >
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The platform is designed to provide a{" "}
              <span className="font-[700] text-[var(--primary-yellow)]">
                supportive, personalized, and career-focused
              </span>{" "}
              experience tailored specifically to{" "}
              <span className="font-[700] text-[var(--primary-yellow)]">
                student-athletes transitioning out of competitive sports
              </span>
              .
            </p>
          </motion.div>

          {/* Second Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[var(--background-card)] border-l-4 border-[var(--primary-yellow)] p-10 md:p-12 rounded-r-2xl shadow-lg"
          >
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Users would encounter an intuitive and motivating environment that
              helps them{" "}
              <span className="font-[700] text-[var(--primary-yellow)]">
                translate their athletic background into professional
                opportunities
              </span>
              , discover relevant jobs and internships through AI-driven
              recommendations, and connect with a community of current and former
              athletes for mentorship and networking.
            </p>
          </motion.div>
        </div>

        {/* Visual Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-20"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-[var(--primary-yellow)] to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
