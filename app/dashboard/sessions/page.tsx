"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const sessions = [
  { initials: "MT", name: "Marcus Thompson", school: "U of Michigan · Football", time: "Tomorrow · 4:00 PM EST", topic: "Resume review + IB recruiting timeline", status: "Upcoming" },
  { initials: "AJ", name: "Alyssa Jordan", school: "Stanford · Soccer", time: "Thursday · 2:00 PM EST", topic: "Career exploration: Marketing vs. Consulting", status: "Upcoming" },
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State · Basketball", time: "May 5 · 3:00 PM EST", topic: "Networking strategies for finance", status: "Completed" },
  { initials: "LP", name: "Lisa Park", school: "USC · Track & Field", time: "May 2 · 1:00 PM EST", topic: "Personal branding workshop follow-up", status: "Completed" },
  { initials: "DW", name: "Derek Wilson", school: "Texas · Track & Field", time: "Apr 28 · 2:30 PM EST", topic: "Interview prep: behavioral questions", status: "Completed" },
];

export default function SessionsPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Sessions</h1>
          <p>Manage your upcoming and past mentoring sessions.</p>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 24 }}>Upcoming</h2>
        <div className="grid grid--2">
          {sessions.filter(s => s.status === "Upcoming").map((session) => (
            <div key={session.name} className="card card--lg">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span className="badge badge--yellow">Scheduled</span>
              </div>
              <div style={{ display: "flex", alignItems: "start", gap: 16, marginBottom: 16 }}>
                <div className="avatar avatar--lg">{session.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{session.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{session.school}</div>
                  <div style={{ fontSize: 14, color: "var(--accent)", marginTop: 8 }}>{session.time} · 30 min</div>
                </div>
              </div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", padding: "12px 16px", background: "#0a0a0a", borderRadius: 8, border: "1px solid #383838", marginBottom: 16 }}>
                <strong style={{ color: "#c8c8c8" }}>Topic:</strong> {session.topic}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Link href="/messages" className="btn btn--primary btn--md">Start Session</Link>
                <Link href="/messages" className="btn btn--secondary btn--md">Message</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: 24, marginBottom: 24 }}>Past sessions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sessions.filter(s => s.status === "Completed").map((session) => (
            <div key={session.name} className="card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}>
              <div className="avatar avatar--md">{session.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{session.name}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{session.topic}</div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-subtle)" }}>{session.time}</div>
              <span className="badge">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
