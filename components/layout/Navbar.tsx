"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Jobs", href: "/jobs" },
  { name: "Mentors", href: "/mentors" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <Link
            href={user ? "/dashboard" : "/"}
            style={{
              fontFamily: "var(--font-oswald), Impact, sans-serif",
              fontSize: 18,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--text)",
              fontWeight: 600,
            }}
          >
            Life After Sport<span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          <nav
            style={{
              display: "none",
              gap: 32,
              fontSize: 14,
            }}
            className="md:!flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "var(--text)",
                  transition: "color 0.15s",
                }}
                className="hover:!text-[var(--accent)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: 8,
            }}
            className="md:!flex"
          >
            {user ? (
              <>
                <Link href="/dashboard" className="btn btn--primary btn--sm">
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    router.push("/");
                  }}
                  style={{
                    fontSize: 14,
                    color: "var(--text)",
                    padding: "8px 12px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontFamily: "inherit",
                    transition: "color 0.15s",
                  }}
                  className="hover:!text-[var(--accent)]"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  style={{
                    fontSize: 14,
                    color: "var(--text)",
                    padding: "8px 12px",
                    cursor: "pointer",
                    transition: "color 0.15s",
                  }}
                  className="hover:!text-[var(--accent)]"
                >
                  Sign In
                </Link>
                <Link href="/register" className="btn btn--primary btn--sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text)",
              fontSize: 24,
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(16px)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 18,
                color: "var(--text)",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="btn btn--primary btn--lg btn--full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    router.push("/");
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn btn--secondary btn--lg btn--full"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="btn btn--secondary btn--lg btn--full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="btn btn--primary btn--lg btn--full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
