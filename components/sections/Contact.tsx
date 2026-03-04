"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[var(--background-card)]">
      <div className="container mx-auto px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <SectionHeading>GET IN TOUCH</SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 space-y-8"
          >
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Have questions or want to learn more about Life After Sport?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hello@lifeaftersport.com"
                className="font-[family-name:var(--font-jakarta)] text-[var(--primary-yellow)] text-lg hover:underline transition-all"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                hello@lifeaftersport.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
