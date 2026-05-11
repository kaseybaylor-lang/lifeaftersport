"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const applicants = [
  { initials: "MT", name: "Marcus Thompson", school: "U of Michigan · Football", role: "Wealth Mgmt Associate", when: "1 day ago", status: "New", statusClass: "badge--yellow" },
  { initials: "SP", name: "Sofia Perez", school: "UCLA · Volleyball", role: "IB Analyst", when: "2 days ago", status: "New", statusClass: "badge--yellow" },
  { initials: "DW", name: "Derek Wilson", school: "Texas · Track & Field", role: "Summer Intern", when: "3 days ago", status: "New", statusClass: "badge--yellow" },
  { initials: "AJ", name: "Alyssa Jordan", school: "Stanford · Soccer", role: "IB Analyst", when: "5 days ago", status: "Reviewed", statusClass: "" },
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State · Basketball", role: "Wealth Mgmt Associate", when: "1 week ago", status: "Interview", statusClass: "badge--success" },
  { initials: "LP", name: "Lisa Park", school: "USC · Track & Field", role: "Summer Intern", when: "1 week ago", status: "Reviewed", statusClass: "" },
  { initials: "RW", name: "Rachel Washington", school: "UNC · Swimming", role: "IB Analyst", when: "2 weeks ago", status: "Rejected", statusClass: "" },
];

export default function ApplicantsPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Applicants</h1>
          <p>Review candidates across all your job postings.</p>
        </div>
        <Link href="/jobs" className="btn btn--primary btn--md">Post a New Job &rarr;</Link>
      </div>

      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Total Applicants", value: "47", accent: true },
          { label: "New This Week", value: "12" },
          { label: "In Review", value: "8" },
          { label: "Interviews Scheduled", value: "3" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {applicants.map((app) => (
          <div key={app.name + app.role} className="card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}>
            <div className="avatar avatar--md">{app.initials}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{app.name}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{app.school}</div>
            </div>
            <div style={{ fontSize: 13, color: "var(--text)" }}>
              Applied for: <span style={{ color: "var(--accent)" }}>{app.role}</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-subtle)" }}>{app.when}</div>
            <span className={`badge ${app.statusClass}`}>{app.status}</span>
            <button className="btn btn--secondary btn--sm">Review</button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
