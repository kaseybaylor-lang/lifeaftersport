"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Why Life After Sport", href: "#why" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { user, signOut } = useAuth();
  const router = useRouter();

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
        <div className="content-container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group"
            >
              <span
                className="font-[family-name:var(--font-oswald)] font-bold text-[var(--neon-yellow)] uppercase text-xl tracking-tight"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                LIFE AFTER SPORT
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
                      ? "text-[var(--neon-yellow)]"
                      : "text-[var(--text-primary)] hover:text-[var(--neon-yellow)]"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--neon-yellow)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              {user ? (
                <div className="flex items-center gap-3 ml-4">
                  <Button variant="outline" href="/jobs">
                    Jobs
                  </Button>
                  <Button variant="outline" href="/mentors">
                    Mentors
                  </Button>
                  <Button variant="outline" href="/messages">
                    Messages
                  </Button>
                  <Button variant="outline" href="/quiz">
                    Quiz
                  </Button>
                  <span className="text-[var(--text-primary)] text-sm">
                    <span className="text-[var(--neon-yellow)] font-bold">{user.name.split(' ')[0]}</span>
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => {
                      signOut();
                      router.push('/');
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3 ml-4">
                  <Button variant="outline" href="/signin">
                    Sign In
                  </Button>
                  <Button variant="primary" href="/register">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[var(--neon-yellow)] text-3xl"
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
                  className="absolute top-6 right-6 text-[var(--neon-yellow)] text-3xl"
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
                          ? "text-[var(--neon-yellow)]"
                          : "text-[var(--text-primary)] hover:text-[var(--neon-yellow)]"
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

                {user ? (
                  <div className="space-y-3">
                    <p className="text-[var(--text-primary)] text-center mb-2">
                      Welcome, <span className="text-[var(--neon-yellow)] font-bold">{user.name}</span>
                    </p>
                    <Button variant="outline" href="/jobs" className="w-full">
                      Jobs
                    </Button>
                    <Button variant="outline" href="/mentors" className="w-full">
                      Mentors
                    </Button>
                    <Button variant="outline" href="/messages" className="w-full">
                      Messages
                    </Button>
                    <Button variant="primary" href="/quiz" className="w-full">
                      Career Quiz
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        signOut();
                        router.push('/');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button variant="outline" href="/signin" className="w-full">
                      Sign In
                    </Button>
                    <Button variant="primary" href="/register" className="w-full">
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
