"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";

const applications = [
  { id: "1", title: "Business Development Intern", company: "Nike", location: "Portland, OR", appliedDate: "May 8, 2026", status: "Under Review", statusClass: "badge--yellow", salary: "$22/hr", timeline: [{ step: "Applied", done: true }, { step: "Under Review", done: true }, { step: "Interview", done: false }, { step: "Offer", done: false }] },
  { id: "2", title: "Sports Marketing Coordinator", company: "Gatorade", location: "Chicago, IL", appliedDate: "May 5, 2026", status: "Interview Scheduled", statusClass: "badge--success", salary: "$55k - $70k", timeline: [{ step: "Applied", done: true }, { step: "Reviewed", done: true }, { step: "Interview", done: true }, { step: "Offer", done: false }] },
  { id: "3", title: "Financial Analyst", company: "JP Morgan", location: "New York, NY", appliedDate: "Apr 28, 2026", status: "Applied", statusClass: "", salary: "$85k - $105k", timeline: [{ step: "Applied", done: true }, { step: "Under Review", done: false }, { step: "Interview", done: false }, { step: "Offer", done: false }] },
  { id: "4", title: "Account Executive", company: "Salesforce", location: "San Francisco, CA", appliedDate: "Apr 20, 2026", status: "Rejected", statusClass: "", salary: "$70k - $90k", timeline: [{ step: "Applied", done: true }, { step: "Reviewed", done: true }, { step: "Rejected", done: true }, { step: "—", done: false }] },
  { id: "5", title: "Brand Marketing Intern", company: "Under Armour", location: "Baltimore, MD", appliedDate: "Apr 15, 2026", status: "Offer Received", statusClass: "badge--success", salary: "$20/hr", timeline: [{ step: "Applied", done: true }, { step: "Reviewed", done: true }, { step: "Interview", done: true }, { step: "Offer", done: true }] },
];

function StatusTimeline({ timeline }: { timeline: { step: string; done: boolean }[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 12 }}>
      {timeline.map((t, i) => (
        <div key={t.step} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              background: t.done ? "var(--accent)" : "#383838",
              border: t.done ? "none" : "1px solid #555",
            }} />
            <span style={{ fontSize: 11, color: t.done ? "var(--accent)" : "var(--text-subtle)", whiteSpace: "nowrap" }}>{t.step}</span>
          </div>
          {i < timeline.length - 1 && (
            <div style={{ width: 40, height: 2, background: t.done ? "var(--accent)" : "#383838", marginBottom: 18, marginInline: 4 }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ApplicationsPage() {
  const active = applications.filter((a) => a.status !== "Rejected");
  const interviews = applications.filter((a) => a.status === "Interview Scheduled");
  const offers = applications.filter((a) => a.status === "Offer Received");

  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Applications</h1>
          <p>Track the status of your job applications.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Total Applied", value: String(applications.length), accent: true },
          { label: "Active", value: String(active.length) },
          { label: "Interviews", value: String(interviews.length) },
          { label: "Offers", value: String(offers.length) },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Application Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {applications.map((app) => (
          <div key={app.id} className="card card--lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16, marginBottom: 4 }}>{app.title}</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{app.company} &middot; {app.location}</div>
              </div>
              <span className={`badge ${app.statusClass}`}>{app.status}</span>
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--text-subtle)", marginTop: 8 }}>
              <span>Applied: {app.appliedDate}</span>
              <span>Salary: <span style={{ color: "var(--text)" }}>{app.salary}</span></span>
            </div>
            <StatusTimeline timeline={app.timeline} />
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
