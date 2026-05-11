"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const mentees = [
  { initials: "MT", name: "Marcus Thompson", school: "U of Michigan", sport: "Football", grad: "2026", interest: "Finance & Consulting", sessions: 4, nextSession: "Tomorrow · 4:00 PM EST", status: "Active" },
  { initials: "AJ", name: "Alyssa Jordan", school: "Stanford", sport: "Soccer", grad: "2026", interest: "Marketing & Brand Strategy", sessions: 3, nextSession: "Thursday · 2:00 PM EST", status: "Active" },
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State", sport: "Basketball", grad: "2025", interest: "Finance & Investment Banking", sessions: 6, nextSession: "May 16 · 3:00 PM EST", status: "Active" },
  { initials: "LP", name: "Lisa Park", school: "USC", sport: "Track & Field", grad: "2026", interest: "Sports Marketing", sessions: 2, nextSession: "May 19 · 1:00 PM EST", status: "Active" },
  { initials: "DW", name: "Derek Wilson", school: "Texas", sport: "Track & Field", grad: "2027", interest: "Tech & Product Management", sessions: 5, nextSession: "TBD", status: "Active" },
];

export default function MenteesPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>My Mentees</h1>
          <p>Athletes you&apos;re currently mentoring.</p>
        </div>
        <Link href="/dashboard/requests" className="btn btn--secondary btn--md">View Requests &rarr;</Link>
      </div>

      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Active Mentees", value: String(mentees.length), accent: true },
          { label: "Total Sessions", value: String(mentees.reduce((a, m) => a + m.sessions, 0)) },
          { label: "This Month", value: "8" },
          { label: "Avg. Rating", value: "4.9" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {mentees.map((m) => (
          <div key={m.name} className="card card--lg" style={{ display: "flex", alignItems: "start", gap: 20 }}>
            <div className="avatar avatar--lg">{m.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{m.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{m.school} &middot; {m.sport} &middot; Class of {m.grad}</div>
                </div>
                <span className="badge badge--success">{m.status}</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
                Interested in: <span style={{ color: "var(--accent)" }}>{m.interest}</span>
              </div>
              <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--text-subtle)", marginBottom: 16 }}>
                <span>{m.sessions} sessions completed</span>
                <span>Next: <span style={{ color: "var(--accent)" }}>{m.nextSession}</span></span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Link href="/dashboard/messages" className="btn btn--primary btn--sm">Message</Link>
                <Link href="/dashboard/sessions" className="btn btn--secondary btn--sm">View Sessions</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
