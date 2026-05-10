"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { mentors as allMentors, type Mentor } from "@/lib/mentors";

/* ------------------------------------------------------------------ */
/*  Inline enrichment data (fields not on Mentor type)                */
/* ------------------------------------------------------------------ */
const enrichment: Record<
  string,
  {
    rating: number;
    sessions: number;
    expertise: string[];
    availability: "accepting" | "limited" | "full";
    school: string;
  }
> = {
  "1": {
    rating: 4.9,
    sessions: 142,
    expertise: ["Enterprise Sales", "Leadership", "Career Pivots"],
    availability: "accepting",
    school: "USC",
  },
  "2": {
    rating: 4.8,
    sessions: 98,
    expertise: ["Brand Strategy", "Sports Marketing", "Campaign Management"],
    availability: "limited",
    school: "Stanford",
  },
  "3": {
    rating: 5.0,
    sessions: 76,
    expertise: ["Sports Medicine", "Rehab Protocols", "Patient Care"],
    availability: "accepting",
    school: "UCLA",
  },
  "4": {
    rating: 4.7,
    sessions: 63,
    expertise: ["Product Management", "Sports Tech", "Data Analytics"],
    availability: "accepting",
    school: "Oregon",
  },
  "5": {
    rating: 4.9,
    sessions: 110,
    expertise: ["Investment Banking", "Financial Modeling", "Networking"],
    availability: "limited",
    school: "Vanderbilt",
  },
  "6": {
    rating: 4.8,
    sessions: 55,
    expertise: ["Coaching", "Player Development", "Recruiting"],
    availability: "full",
    school: "Penn State",
  },
  "7": {
    rating: 4.6,
    sessions: 47,
    expertise: ["Data Science", "Performance Analytics", "Python"],
    availability: "accepting",
    school: "Florida",
  },
  "8": {
    rating: 4.7,
    sessions: 82,
    expertise: ["Social Media", "Content Strategy", "Personal Branding"],
    availability: "accepting",
    school: "Duke",
  },
  "9": {
    rating: 4.9,
    sessions: 91,
    expertise: ["Sports Law", "Contract Negotiation", "Athlete Representation"],
    availability: "limited",
    school: "UConn",
  },
  "10": {
    rating: 4.5,
    sessions: 34,
    expertise: ["Brand Partnerships", "Campus Marketing", "Event Planning"],
    availability: "accepting",
    school: "UNC",
  },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function AvailabilityBadge({ status }: { status: "accepting" | "limited" | "full" }) {
  if (status === "accepting")
    return <span className="badge badge--success">Accepting mentees</span>;
  if (status === "limited")
    return <span className="badge badge--yellow">Limited availability</span>;
  return <span className="badge">Currently full</span>;
}

export default function MentorsPage() {
  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [sportFilter, setSportFilter] = useState("all");
  const [acceptingOnly, setAcceptingOnly] = useState(false);

  const sports = useMemo(() => Array.from(new Set(allMentors.map((m) => m.formerSport))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(allMentors.map((m) => m.industry))).sort(), []);

  const filtered = useMemo(() => {
    let list = [...allMentors];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.currentRole.toLowerCase().includes(q) ||
          m.company.toLowerCase().includes(q)
      );
    }

    if (industryFilter !== "all") list = list.filter((m) => m.industry === industryFilter);
    if (sportFilter !== "all") list = list.filter((m) => m.formerSport === sportFilter);
    if (acceptingOnly)
      list = list.filter((m) => enrichment[m.id]?.availability === "accepting");

    return list;
  }, [search, industryFilter, sportFilter, acceptingOnly]);

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow">
            <span>Mentors</span>
          </div>
          <h1>Find your guide.</h1>
          <p>
            Connect with former student-athletes who have successfully transitioned into
            rewarding careers. Get real advice from people who understand the journey.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="section">
        <div className="container" style={{ display: "flex", gap: 32, flexDirection: "column" }}>
          {/* Desktop: sidebar + cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: 32,
            }}
            className="mentors-layout"
          >
            {/* ---- Sidebar filters ---- */}
            <aside>
              <div
                className="card card--lg"
                style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 20 }}
              >
                <h3
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 4,
                  }}
                >
                  Filters
                </h3>

                {/* Search */}
                <div>
                  <label className="field-label">Search</label>
                  <input
                    className="input"
                    placeholder="Name, role, or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="field-label">Industry</label>
                  <select
                    className="select"
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                  >
                    <option value="all">All industries</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sport */}
                <div>
                  <label className="field-label">Former sport</label>
                  <select
                    className="select"
                    value={sportFilter}
                    onChange={(e) => setSportFilter(e.target.value)}
                  >
                    <option value="all">All sports</option>
                    {sports.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Accepting only */}
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={acceptingOnly}
                    onChange={(e) => setAcceptingOnly(e.target.checked)}
                  />
                  Accepting mentees only
                </label>
              </div>
            </aside>

            {/* ---- Right column ---- */}
            <div>
              {/* Results counter */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  Showing
                </span>
                <span className="badge badge--yellow">{filtered.length}</span>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  mentor{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Mentor cards grid */}
              <div className="grid grid--2" style={{ gap: 20 }}>
                {filtered.map((mentor) => {
                  const extra = enrichment[mentor.id];
                  return (
                    <Link key={mentor.id} href={`/mentors/${mentor.id}`} style={{ textDecoration: "none" }}>
                      <div className="card card--interactive" style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
                        {/* Top row: avatar + info */}
                        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                          <div className="avatar avatar--lg">{getInitials(mentor.name)}</div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                              <span
                                style={{
                                  fontFamily: "var(--font-oswald), Impact, sans-serif",
                                  fontSize: 18,
                                  color: "var(--text-strong)",
                                  fontWeight: 600,
                                  textTransform: "uppercase",
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {mentor.name}
                              </span>
                              {extra && (
                                <span style={{ fontSize: 13, color: "var(--accent)" }}>
                                  {"*"} {extra.rating}
                                </span>
                              )}
                            </div>
                            <p style={{ fontSize: 14, color: "var(--text)", margin: 0 }}>
                              {mentor.currentRole} at {mentor.company}
                            </p>
                            <p style={{ fontSize: 13, color: "var(--text-subtle)", margin: 0 }}>
                              Former {mentor.formerSport}
                            </p>
                          </div>
                        </div>

                        {/* Bio - 2 lines */}
                        <p
                          style={{
                            fontSize: 14,
                            color: "var(--text-muted)",
                            margin: 0,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: 1.5,
                          }}
                        >
                          {mentor.bio}
                        </p>

                        {/* Expertise badges */}
                        {extra && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {extra.expertise.map((tag) => (
                              <span key={tag} className="badge">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Bottom row: availability + sessions */}
                        {extra && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "auto",
                              paddingTop: 10,
                              borderTop: "1px solid var(--border)",
                            }}
                          >
                            <AvailabilityBadge status={extra.availability} />
                            <span style={{ fontSize: 13, color: "var(--text-subtle)" }}>
                              {extra.sessions} sessions
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "64px 0" }}>
                  <p className="text-muted">No mentors match your filters. Try broadening your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive override: stack on small screens */}
      <style>{`
        @media (max-width: 767px) {
          .mentors-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
