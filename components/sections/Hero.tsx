"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen grid-texture flex items-center relative overflow-hidden">
      <div className="content-container py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Headline - Staggered Animation */}
            <div className="space-y-2">
              {["LIFE", "AFTER", "SPORT."].map((word, index) => (
                <motion.h1
                  key={word}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] uppercase text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            {/* Tagline Container - Animated Floating Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block bg-[var(--background-card)] border border-[var(--primary-yellow)]/30 rounded-2xl px-8 py-4 shadow-lg shadow-[var(--primary-yellow)]/10"
              >
                <motion.span
                  animate={{
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-[family-name:var(--font-jakarta)] text-[var(--primary-yellow)] text-xl md:text-2xl italic"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Your Next Play Starts Here.
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-lg md:text-xl max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              The career platform built for student-athletes transitioning out of
              competitive sports.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" href="/register">
                Sign Up
              </Button>
              <Button variant="outline" href="/signin">
                Sign In
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Optional space for future graphics */}
          <div className="hidden lg:block relative">
            {/* Decorative element or image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              {/* Abstract visual placeholder */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary-yellow)]/10 to-[var(--accent-blue)]/10 blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-[var(--primary-yellow)]/20 text-[20rem]"
                >
                  ⟡
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Credit in bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <p
          className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Kasey, Ella, Kenny
        </p>
      </motion.div>
    </section>
  );
}
