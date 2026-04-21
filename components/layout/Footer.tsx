"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Programs", href: "/programs" },
  { name: "Resources", href: "/resources" },
  { name: "Jobs", href: "/jobs" },
  { name: "Mentors", href: "/mentors" },
  { name: "Get Involved", href: "/contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background-card)] border-t border-[var(--text-secondary)]/20">
      <div className="content-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Logo & Tagline */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-4 group"
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
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] italic"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Your Next Play Starts Here.
            </p>
          </div>

          {/* Right - Quick Links */}
          <div>
            <h3
              className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] uppercase text-lg mb-4"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] hover:text-[var(--primary-yellow)] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[var(--text-secondary)]/20">
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm text-center"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              © 2025 Life After Sport. Built by Kasey, Ella & Kenny.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
