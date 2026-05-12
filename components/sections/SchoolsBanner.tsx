"use client";

import { schools } from "@/lib/schools";
import Image from "next/image";

export default function SchoolsBanner() {
  // Split into two rows for a two-row marquee effect
  const mid = Math.ceil(schools.length / 2);
  const row1 = schools.slice(0, mid);
  const row2 = schools.slice(mid);

  return (
    <section
      style={{
        padding: "64px 0",
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        overflow: "hidden",
      }}
    >
      {/* Partnered with NCAA */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
        <span
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          Partnered with
        </span>
        <Image
          src="/ncaa.png"
          alt="NCAA"
          width={120}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          <span>Trusted Nationwide</span>
        </div>
        <h2
          style={{
            fontSize: 48,
            color: "var(--text)",
            lineHeight: 1,
          }}
        >
          Schools Who Trust Us<span style={{ color: "var(--accent)" }}>.</span>
        </h2>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="schools-marquee" style={{ marginBottom: 16 }}>
        <div className="schools-marquee__track schools-marquee__track--left">
          {[...row1, ...row1].map((school, i) => (
            <div
              key={`r1-${i}`}
              className="schools-marquee__item"
              title={school.name}
            >
              <Image
                src={school.logo}
                alt={school.name}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="schools-marquee">
        <div className="schools-marquee__track schools-marquee__track--right">
          {[...row2, ...row2].map((school, i) => (
            <div
              key={`r2-${i}`}
              className="schools-marquee__item"
              title={school.name}
            >
              <Image
                src={school.logo}
                alt={school.name}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
