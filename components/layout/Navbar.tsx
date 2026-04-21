"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Programs", href: "/programs", isPage: true },
  { name: "Resources", href: "/resources", isPage: true },
  { name: "Get Involved", href: "/contact", isPage: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Link href={user ? "/dashboard" : "/"}>
              <span
                className="font-[family-name:var(--font-oswald)] font-bold text-[var(--neon-yellow)] uppercase text-xl tracking-tight cursor-pointer"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                LIFE AFTER SPORT
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-[family-name:var(--font-jakarta)] transition-colors duration-200 text-[var(--text-primary)] hover:text-[var(--neon-yellow)]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <div className="flex items-center gap-3 ml-4">
                  <Button variant="outline" href="/dashboard">
                    Dashboard
                  </Button>
                  <Button variant="outline" href="/jobs">
                    Jobs
                  </Button>
                  <Button variant="outline" href="/mentors">
                    Mentors
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
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-[family-name:var(--font-oswald)] font-[600] uppercase text-2xl text-left transition-colors duration-200 text-[var(--text-primary)] hover:text-[var(--neon-yellow)] block"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {user ? (
                  <div className="space-y-3">
                    <p className="text-[var(--text-primary)] text-center mb-2">
                      Welcome, <span className="text-[var(--neon-yellow)] font-bold">{user.name}</span>
                    </p>
                    <Button variant="primary" href="/dashboard" className="w-full">
                      Dashboard
                    </Button>
                    <Button variant="outline" href="/jobs" className="w-full">
                      Jobs
                    </Button>
                    <Button variant="outline" href="/mentors" className="w-full">
                      Mentors
                    </Button>
                    <Button variant="outline" href="/messages" className="w-full">
                      Messages
                    </Button>
                    <Button variant="outline" href="/quiz" className="w-full">
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
