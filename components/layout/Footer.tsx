"use client";

const quickLinks = [
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Partners", href: "#partners" },
  { name: "Pricing", href: "#pricing" },
];

const domainIdeas = [
  "LifeAfterSport.com",
  "NextPlay.com",
  "BeyondtheSport.com",
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
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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

          {/* Center - Quick Links */}
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
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] hover:text-[var(--primary-yellow)] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Domain Ideas */}
          <div>
            <h3
              className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] uppercase text-lg mb-4"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Potential Domains
            </h3>
            <p
              className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {domainIdeas.join(" · ")}
            </p>
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
    </footer>
  );
}
