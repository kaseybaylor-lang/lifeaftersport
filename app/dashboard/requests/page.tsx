"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";

const requests = [
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State · Basketball", interest: "Finance & Consulting", when: "2 days ago", message: "Hi! I'm a junior point guard looking to break into investment banking after graduation. Would love your guidance on recruiting timelines." },
  { initials: "LP", name: "Lisa Park", school: "USC · Track & Field", interest: "Sports Marketing", when: "3 days ago", message: "I've been exploring sports marketing roles and saw your background at Nike. Would love to learn about your transition from athletics." },
  { initials: "JM", name: "Jake Miller", school: "Duke · Lacrosse", interest: "Tech & Product Management", when: "5 days ago", message: "I'm interested in product management at a tech company. I'd appreciate any advice on breaking in without a CS background." },
  { initials: "RW", name: "Rachel Washington", school: "UNC · Swimming", interest: "Healthcare & Biotech", when: "1 week ago", message: "As a pre-med athlete, I'm considering pivoting to the business side of healthcare. Would value your perspective." },
];

export default function RequestsPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Mentee Requests</h1>
          <p>Review and respond to athletes who want to connect with you.</p>
        </div>
        <span className="badge badge--yellow" style={{ fontSize: 14, padding: "8px 16px" }}>{requests.length} pending</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {requests.map((req) => (
          <div key={req.name} className="card card--lg">
            <div style={{ display: "flex", alignItems: "start", gap: 16, marginBottom: 16 }}>
              <div className="avatar avatar--lg">{req.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{req.name}</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{req.school}</div>
                <div style={{ fontSize: 13, color: "var(--accent)", marginTop: 4 }}>Interested in: {req.interest}</div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-subtle)" }}>{req.when}</div>
            </div>
            <div style={{ fontSize: 14, color: "var(--text-muted)", padding: "12px 16px", background: "#0a0a0a", borderRadius: 8, border: "1px solid #383838", marginBottom: 16, lineHeight: 1.6 }}>
              &ldquo;{req.message}&rdquo;
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn--primary btn--md">Accept</button>
              <button className="btn btn--secondary btn--md">Decline</button>
              <button className="btn btn--ghost btn--md">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
