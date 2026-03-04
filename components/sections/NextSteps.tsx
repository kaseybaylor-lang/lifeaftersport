"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const phases = [
  {
    number: 1,
    title: "Validate",
    items: [
      "Survey + interviews with student-athletes",
      "Confirm top pain points + willingness to pay",
    ],
  },
  {
    number: 2,
    title: "Pilot",
    items: [
      "Secure 2–3 university / athletic department pilots",
      "Recruit mentors + initial employer partners",
    ],
  },
  {
    number: 3,
    title: "Build & Launch",
    items: [
      "MVP with onboarding + matching + community",
      "Ambassador program + early adopter launch",
      "Measure engagement + outcomes + iterate",
    ],
  },
];

export default function NextSteps() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="next-steps" className="min-h-screen grid-texture py-32">
      <div className="container mx-auto px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>NEXT STEPS</SectionHeading>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-[var(--text-secondary)]/20">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-[var(--primary-yellow)] origin-left"
              />
            </div>

            {/* Phases */}
            <div className="grid md:grid-cols-3 gap-12 relative">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Phase Number Circle */}
                  <div className="w-32 h-32 rounded-full bg-[var(--primary-yellow)] flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[var(--primary-yellow)]/30">
                    <span
                      className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--background-dark)] text-5xl"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {phase.number}
                    </span>
                  </div>

                  {/* Phase Content */}
                  <div className="bg-[var(--background-card)] border border-[var(--text-secondary)]/20 rounded-xl p-8 w-full hover:border-[var(--primary-yellow)]/40 transition-all duration-300">
                    <h3
                      className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--primary-yellow)] text-2xl uppercase mb-4 text-center"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {phase.title}
                    </h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm leading-relaxed flex items-start gap-2"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          <span className="text-[var(--primary-yellow)] mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--background-card)] to-[var(--background-dark)] border-2 border-[var(--primary-yellow)] rounded-2xl p-12 shadow-2xl shadow-[var(--primary-yellow)]/20 text-center">
            <h3
              className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] text-4xl md:text-5xl uppercase mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Ready to make your next play?
            </h3>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-[var(--background-dark)] border-2 border-[var(--text-secondary)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--primary-yellow)] focus:outline-none transition-colors font-[family-name:var(--font-jakarta)]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              />
              <Button type="submit" variant="primary" className="sm:w-auto whitespace-nowrap">
                Join the Waitlist
              </Button>
            </form>

            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Be the first to know when we launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
