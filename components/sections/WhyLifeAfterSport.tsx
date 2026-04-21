"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";

const stats = [
  {
    percentage: "54.5%",
    description: "Feel anxiety about transitioning out of competitive sport",
  },
  {
    percentage: "63.6%",
    description: "Don't know who to ask for career guidance",
  },
  {
    percentage: "68.2%",
    description: "Want a clear career roadmap after athletics",
  },
];

export default function WhyLifeAfterSport() {
  const { user } = useAuth();

  return (
    <section className="py-40 md:py-56 bg-[var(--dark-navy)] w-full" id="why">
      <div className="content-container">
        <div className="text-center mb-20 md:mb-28">
          <SectionHeading>Why Life After Sport?</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mt-10"
          >
            Based on our research with college student-athletes, the transition
            from sport to career is filled with uncertainty. Here&apos;s what we found:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-36">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--black)] border border-[var(--neon-yellow)]/20 rounded-2xl p-10 md:p-14 text-center hover:border-[var(--neon-yellow)]/40 transition-all duration-300 flex flex-col justify-center gap-8"
            >
              <div className="text-6xl md:text-8xl font-heading font-bold text-[var(--neon-yellow)]">
                {stat.percentage}
              </div>
              <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-[var(--text-secondary)] mb-10">
            Ready to discover your career path?
          </p>
          <Button variant="primary" href={user ? "/quiz" : "/register"}>
            {user ? "Take the Career Quiz" : "Get Started"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
