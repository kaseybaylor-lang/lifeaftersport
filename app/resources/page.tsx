"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";

type ResourceType = "Article" | "Guide" | "Video" | "Template";

interface Resource {
  title: string;
  type: ResourceType;
  duration: string;
  description: string;
  cta: string;
}

const filters: Array<"All" | ResourceType> = ["All", "Article", "Guide", "Video", "Template"];

const resources: Resource[] = [
  {
    title: "How to Translate Your Athletic Resume",
    type: "Guide",
    duration: "8 min read",
    description:
      "Learn how to reframe your athletic achievements into professional language that hiring managers understand and value.",
    cta: "Read",
  },
  {
    title: "Resume & Cover Letter Templates",
    type: "Template",
    duration: "",
    description:
      "Ready-to-use resume and cover letter frameworks designed specifically for athletes transitioning into new careers.",
    cta: "Download",
  },
  {
    title: "Networking 101 for Athletes",
    type: "Video",
    duration: "22 min",
    description:
      "Watch this step-by-step guide to building professional relationships and expanding your network beyond sports.",
    cta: "Watch",
  },
  {
    title: "Personal Branding After Sports",
    type: "Article",
    duration: "6 min read",
    description:
      "Discover how to build a compelling personal brand that highlights your unique strengths as a former athlete.",
    cta: "Read",
  },
  {
    title: "Interview Prep: The Athlete's Advantage",
    type: "Guide",
    duration: "12 min read",
    description:
      "Use the STAR method and your athletic experience to ace any interview. Includes practice questions and frameworks.",
    cta: "Read",
  },
  {
    title: "Financial Planning for Career Transitions",
    type: "Article",
    duration: "10 min read",
    description:
      "Practical strategies for managing your finances during the transition from athletics to a professional career.",
    cta: "Read",
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState<"All" | ResourceType>("All");

  const filtered = active === "All" ? resources : resources.filter((r) => r.type === active);

  return (
    <>
      <Navbar />

      {/* ── Page header ── */}
      <header className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow">
            <span>Resources</span>
          </div>
          <h1>Read, watch, learn.</h1>
          <p>
            Guides, templates, and tools to help you navigate every aspect of
            life after sport — from careers and finances to personal branding.
          </p>
        </div>
      </header>

      {/* ── Filter + cards ── */}
      <section className="section">
        <div className="container">
          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={active === f ? "btn btn--sm" : "btn btn--sm btn--secondary"}
                style={
                  active === f
                    ? { background: "var(--accent)", color: "#000", borderColor: "var(--accent)" }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid--3">
            {filtered.map((r) => (
              <div
                key={r.title}
                className="card card--interactive"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span className="badge badge--yellow">{r.type}</span>
                  {r.duration && <span className="badge">{r.duration}</span>}
                </div>

                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{r.title}</h3>

                <p
                  className="text-muted"
                  style={{ fontSize: 14, lineHeight: 1.6, flex: 1, marginBottom: 24 }}
                >
                  {r.description}
                </p>

                <a href="#" className="btn btn--secondary btn--md btn--full">
                  {r.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
