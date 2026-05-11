"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const postings = [
  { id: "1", title: "Investment Banking Analyst", location: "New York, NY", type: "Full-time", posted: "2 weeks ago", status: "Active", statusClass: "badge--success", applicants: 23, salary: "$85k - $105k", views: 340 },
  { id: "2", title: "Wealth Management Associate", location: "Chicago, IL", type: "Full-time", posted: "9 days ago", status: "Active", statusClass: "badge--success", applicants: 15, salary: "$70k - $90k", views: 210 },
  { id: "3", title: "Summer Intern — Strategy", location: "Remote", type: "Internship", posted: "3 weeks ago", status: "Closing Soon", statusClass: "badge--yellow", applicants: 9, salary: "$24/hr", views: 185 },
  { id: "4", title: "Client Relations Associate", location: "Boston, MA", type: "Full-time", posted: "1 month ago", status: "Closed", statusClass: "", applicants: 42, salary: "$60k - $75k", views: 520 },
];

const recentApplicants = [
  { initials: "MT", name: "Marcus Thompson", school: "U of Michigan · Football", role: "Investment Banking Analyst", when: "1 day ago", status: "New", statusClass: "badge--yellow" },
  { initials: "SP", name: "Sofia Perez", school: "UCLA · Volleyball", role: "Wealth Management Associate", when: "2 days ago", status: "New", statusClass: "badge--yellow" },
  { initials: "DW", name: "Derek Wilson", school: "Texas · Track & Field", role: "Summer Intern — Strategy", when: "3 days ago", status: "New", statusClass: "badge--yellow" },
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State · Basketball", role: "Investment Banking Analyst", when: "5 days ago", status: "Interview", statusClass: "badge--success" },
];

export default function JobPostingsPage() {
  const active = postings.filter((p) => p.status === "Active");
  const totalApplicants = postings.reduce((a, p) => a + p.applicants, 0);

  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Job Postings</h1>
          <p>Manage your job listings and track applicants.</p>
        </div>
        <button className="btn btn--primary btn--md">Post a New Job &rarr;</button>
      </div>

      {/* Stats */}
      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Active Postings", value: String(active.length), accent: true },
          { label: "Total Applicants", value: String(totalApplicants) },
          { label: "New This Week", value: "12" },
          { label: "Total Views", value: String(postings.reduce((a, p) => a + p.views, 0)) },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Job Postings */}
      <h2 style={{ fontSize: 24, marginBottom: 20, textTransform: "uppercase", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "-0.01em" }}>Your Postings</h2>
      <div className="grid grid--2" style={{ gap: 16, marginBottom: 48 }}>
        {postings.map((posting) => (
          <div key={posting.id} className="card card--lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
              <div>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16, marginBottom: 4 }}>{posting.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{posting.location} &middot; {posting.type}</div>
              </div>
              <span className={`badge ${posting.statusClass}`}>{posting.status}</span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              <span className="badge">{posting.salary}</span>
              <span className="badge">Posted {posting.posted}</span>
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--text-subtle)", marginBottom: 16 }}>
              <span>{posting.applicants} applicants</span>
              <span>{posting.views} views</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/dashboard/applicants" className="btn btn--primary btn--sm">View Applicants</Link>
              <button className="btn btn--secondary btn--sm">Edit Posting</button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Applicants */}
      <h2 style={{ fontSize: 24, marginBottom: 20, textTransform: "uppercase", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "-0.01em" }}>Recent Applicants</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {recentApplicants.map((app) => (
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
            <Link href="/dashboard/applicants" className="btn btn--secondary btn--sm">Review</Link>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
