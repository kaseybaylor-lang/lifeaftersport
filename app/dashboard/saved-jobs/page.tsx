"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const savedJobs = [
  { id: "1", title: "Business Development Intern", company: "Nike", location: "Portland, OR", type: "Internship", salary: "$22/hr", savedDate: "2 days ago", industry: "Sports Industry", athleteFriendly: true },
  { id: "2", title: "Sports Marketing Coordinator", company: "Gatorade", location: "Chicago, IL", type: "Full-time", salary: "$55k - $70k", savedDate: "3 days ago", industry: "Marketing", athleteFriendly: true },
  { id: "3", title: "Financial Analyst", company: "JP Morgan", location: "New York, NY", type: "Full-time", salary: "$85k - $105k", savedDate: "5 days ago", industry: "Finance", athleteFriendly: false },
  { id: "4", title: "Account Executive", company: "Salesforce", location: "San Francisco, CA", type: "Full-time", salary: "$70k - $90k", savedDate: "1 week ago", industry: "Tech", athleteFriendly: true },
  { id: "5", title: "Brand Marketing Intern", company: "Under Armour", location: "Baltimore, MD", type: "Internship", salary: "$20/hr", savedDate: "1 week ago", industry: "Sports Industry", athleteFriendly: true },
  { id: "6", title: "Operations Associate", company: "Deloitte", location: "Remote", type: "Full-time", salary: "$65k - $80k", savedDate: "2 weeks ago", industry: "Consulting", athleteFriendly: false },
];

export default function SavedJobsPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Saved Jobs</h1>
          <p>Jobs you&apos;ve bookmarked for later.</p>
        </div>
        <Link href="/jobs" className="btn btn--secondary btn--md">Browse Job Board &rarr;</Link>
      </div>

      {/* Stats */}
      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Saved Jobs", value: String(savedJobs.length), accent: true },
          { label: "Athlete-Friendly", value: String(savedJobs.filter((j) => j.athleteFriendly).length) },
          { label: "Internships", value: String(savedJobs.filter((j) => j.type === "Internship").length) },
          { label: "Full-Time", value: String(savedJobs.filter((j) => j.type === "Full-time").length) },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Job Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {savedJobs.map((job) => (
          <div key={job.id} className="card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 15 }}>{job.title}</div>
                {job.athleteFriendly && <span className="badge badge--yellow" style={{ fontSize: 10 }}>Athlete-friendly</span>}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{job.company}</div>
            </div>
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              <span className="badge">{job.type}</span>
              <span className="badge">{job.location}</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text)", flexShrink: 0 }}>{job.salary}</div>
            <div style={{ fontSize: 12, color: "var(--text-subtle)", flexShrink: 0 }}>Saved {job.savedDate}</div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button className="btn btn--primary btn--sm">Apply</button>
              <button className="btn btn--secondary btn--sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
