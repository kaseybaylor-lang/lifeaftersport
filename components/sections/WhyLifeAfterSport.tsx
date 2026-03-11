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
    <section className="py-32 bg-[var(--dark-navy)]" id="why">
      <div className="content-container">
        <div className="text-center mb-20">
          <SectionHeading>Why Life After Sport?</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mt-6"
          >
            Based on our research with college student-athletes, the transition
            from sport to career is filled with uncertainty. Here's what we found:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--black)] border border-[var(--neon-yellow)]/20 rounded-2xl p-8 text-center hover:border-[var(--neon-yellow)]/40 transition-all duration-300"
            >
              <div className="text-6xl md:text-7xl font-heading font-bold text-[var(--neon-yellow)] mb-6">
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
          <p className="text-lg text-[var(--text-secondary)] mb-6">
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
