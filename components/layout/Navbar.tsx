"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Partners", href: "#partners" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-[var(--background-dark)]/80 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group"
            >
              <span className="text-[var(--primary-yellow)] text-2xl group-hover:scale-110 transition-transform">
                ⟡
              </span>
              <span
                className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] uppercase text-xl tracking-tight"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Life After Sport
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-[family-name:var(--font-jakarta)] transition-colors duration-200 relative ${
                    activeSection === link.href
                      ? "text-[var(--primary-yellow)]"
                      : "text-[var(--text-primary)] hover:text-[var(--primary-yellow)]"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-yellow)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <Button variant="primary" className="ml-4">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[var(--primary-yellow)] text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[var(--background-card)] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="flex flex-col h-full p-8 pt-20">
                {/* Close button positioned */}
                <button
                  className="absolute top-6 right-6 text-[var(--primary-yellow)] text-3xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`font-[family-name:var(--font-oswald)] font-[600] uppercase text-2xl text-left transition-colors duration-200 ${
                        activeSection === link.href
                          ? "text-[var(--primary-yellow)]"
                          : "text-[var(--text-primary)] hover:text-[var(--primary-yellow)]"
                      }`}
                      style={{ fontFamily: "var(--font-oswald)" }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                      {activeSection === link.href && (
                        <span className="ml-2">→</span>
                      )}
                    </motion.button>
                  ))}
                </div>

                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
