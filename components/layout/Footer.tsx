"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-oswald), Impact, sans-serif",
                fontSize: 24,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--text)",
                fontWeight: 600,
                marginBottom: 16,
                display: "inline-block",
              }}
            >
              Life After Sport<span style={{ color: "var(--accent)" }}>.</span>
            </Link>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                maxWidth: 360,
                lineHeight: 1.6,
              }}
            >
              The career platform built for student-athletes transitioning out of
              competitive sports. Your next play starts here.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                marginBottom: 16,
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Platform
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { name: "Programs", href: "/programs" },
                { name: "Jobs", href: "/jobs" },
                { name: "Mentors", href: "/mentors" },
                { name: "Resources", href: "/resources" },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      transition: "color 0.15s",
                    }}
                    className="hover:!text-[var(--text)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                marginBottom: 16,
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              For Organizations
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { name: "For Universities", href: "/contact?type=university" },
                { name: "For Employers", href: "/contact?type=employer" },
                { name: "Book a Demo", href: "/contact" },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      transition: "color 0.15s",
                    }}
                    className="hover:!text-[var(--text)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                marginBottom: 16,
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      transition: "color 0.15s",
                    }}
                    className="hover:!text-[var(--text)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid #1f1f1f",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "space-between",
            fontSize: 12,
            color: "var(--text-subtle)",
          }}
          className="md:!flex-row md:!items-center"
        >
          <div>&copy; 2026 Life After Sport. Built by Kasey, Ella &amp; Kenny.</div>
          <div>Your Next Play Starts Here.</div>
        </div>
      </div>
    </footer>
  );
}
