"use client";

import { useState, useMemo } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";
import { mentors as allMentors } from "@/lib/mentors";

/* Assigned mentors (the student's current mentors) */
const myMentors = [
  { initials: "DC", name: "David Chen", role: "VP of Strategy", company: "Goldman Sachs", sport: "Basketball", school: "Vanderbilt", sessions: 4, nextSession: "Tomorrow · 4:00 PM EST", status: "Active" },
  { initials: "SO", name: "Sarah Okonkwo", role: "Senior Brand Manager", company: "Nike", sport: "Track & Field", school: "USC", sessions: 2, nextSession: "Thursday · 2:00 PM EST", status: "Active" },
  { initials: "JW", name: "James Wright", role: "Founder & CEO", company: "PlaybookHQ", sport: "Football", school: "Oregon", sessions: 1, nextSession: "May 19 · 1:00 PM EST", status: "Active" },
];

/* Enrichment for browse mentors */
const enrichment: Record<string, { rating: number; sessions: number; expertise: string[]; availability: "accepting" | "limited" | "full" }> = {
  "1": { rating: 4.9, sessions: 142, expertise: ["Enterprise Sales", "Leadership"], availability: "accepting" },
  "2": { rating: 4.8, sessions: 98, expertise: ["Brand Strategy", "Sports Marketing"], availability: "limited" },
  "3": { rating: 5.0, sessions: 76, expertise: ["Sports Medicine", "Rehab Protocols"], availability: "accepting" },
  "4": { rating: 4.7, sessions: 63, expertise: ["Product Management", "Sports Tech"], availability: "accepting" },
  "5": { rating: 4.9, sessions: 110, expertise: ["Investment Banking", "Networking"], availability: "limited" },
  "7": { rating: 4.6, sessions: 47, expertise: ["Data Science", "Performance Analytics"], availability: "accepting" },
  "8": { rating: 4.7, sessions: 82, expertise: ["Social Media", "Personal Branding"], availability: "accepting" },
  "10": { rating: 4.5, sessions: 34, expertise: ["Brand Partnerships", "Campus Marketing"], availability: "accepting" },
};

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function DashboardMentorsPage() {
  const [search, setSearch] = useState("");

  const browseMentors = useMemo(() => {
    let list = allMentors.filter((m) => enrichment[m.id]);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.currentRole.toLowerCase().includes(q) ||
          m.company.toLowerCase().includes(q) ||
          m.industry.toLowerCase().includes(q)
      );
    }
    return list.slice(0, 6);
  }, [search]);

  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>My Mentors</h1>
          <p>Your mentors and discover new connections.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Active Mentors", value: String(myMentors.length), accent: true },
          { label: "Total Sessions", value: String(myMentors.reduce((a, m) => a + m.sessions, 0)) },
          { label: "This Month", value: "3" },
          { label: "Next Session", value: "Tomorrow" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Your Mentors */}
      <h2 style={{ fontSize: 24, marginBottom: 20, textTransform: "uppercase", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "-0.01em" }}>Your Mentors</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
        {myMentors.map((m) => (
          <div key={m.name} className="card card--lg" style={{ display: "flex", alignItems: "start", gap: 20 }}>
            <div className="avatar avatar--lg">{m.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{m.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{m.role} at {m.company}</div>
                  <div style={{ fontSize: 13, color: "var(--text-subtle)" }}>Former {m.sport} &middot; {m.school}</div>
                </div>
                <span className="badge badge--success">{m.status}</span>
              </div>
              <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--text-subtle)", marginBottom: 16 }}>
                <span>{m.sessions} sessions completed</span>
                <span>Next: <span style={{ color: "var(--accent)" }}>{m.nextSession}</span></span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Link href="/dashboard/messages" className="btn btn--primary btn--sm">Message</Link>
                <button className="btn btn--secondary btn--sm">View Sessions</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse / Find a Mentor */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, textTransform: "uppercase", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "-0.01em" }}>Find a Mentor</h2>
        <Link href="/mentors" className="btn btn--secondary btn--sm">View All Mentors &rarr;</Link>
      </div>

      <div style={{ marginBottom: 20 }}>
        <input
          className="input"
          type="text"
          placeholder="Search by name, role, company, or industry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 400 }}
        />
      </div>

      <div className="grid grid--2" style={{ gap: 16 }}>
        {browseMentors.map((mentor) => {
          const extra = enrichment[mentor.id];
          return (
            <div key={mentor.id} className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className="avatar avatar--lg">{getInitials(mentor.name)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{mentor.name}</span>
                    {extra && <span style={{ fontSize: 13, color: "var(--accent)" }}>* {extra.rating}</span>}
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>{mentor.currentRole} at {mentor.company}</p>
                  <p style={{ fontSize: 13, color: "var(--text-subtle)", margin: 0 }}>Former {mentor.formerSport}</p>
                </div>
              </div>

              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.5 }}>
                {mentor.bio}
              </p>

              {extra && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {extra.expertise.map((tag) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                <span className={`badge ${extra?.availability === "accepting" ? "badge--success" : extra?.availability === "limited" ? "badge--yellow" : ""}`}>
                  {extra?.availability === "accepting" ? "Accepting mentees" : extra?.availability === "limited" ? "Limited availability" : "Currently full"}
                </span>
                <button className="btn btn--primary btn--sm">Request Mentor</button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}
