"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";

const savedAthletes = [
  { initials: "MT", name: "Marcus Thompson", school: "U of Michigan", sport: "Football", grad: "2026", interests: ["Finance", "Consulting"], verified: true },
  { initials: "AJ", name: "Alyssa Jordan", school: "Stanford", sport: "Soccer", grad: "2026", interests: ["Marketing", "Brand Strategy"], verified: true },
  { initials: "KR", name: "Kevin Roberts", school: "Ohio State", sport: "Basketball", grad: "2025", interests: ["Finance", "Investment Banking"], verified: true },
  { initials: "LP", name: "Lisa Park", school: "USC", sport: "Track & Field", grad: "2026", interests: ["Sports Marketing", "Media"], verified: false },
  { initials: "DW", name: "Derek Wilson", school: "Texas", sport: "Track & Field", grad: "2027", interests: ["Tech", "Product Management"], verified: true },
  { initials: "SP", name: "Sofia Perez", school: "UCLA", sport: "Volleyball", grad: "2025", interests: ["Finance", "Operations"], verified: false },
  { initials: "RW", name: "Rachel Washington", school: "UNC", sport: "Swimming", grad: "2026", interests: ["Healthcare", "Biotech"], verified: true },
  { initials: "JM", name: "Jake Miller", school: "Duke", sport: "Lacrosse", grad: "2026", interests: ["Tech", "Startups"], verified: false },
];

export default function SavedAthletesPage() {
  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Saved Athletes</h1>
          <p>Athletes you&apos;ve bookmarked for potential roles.</p>
        </div>
      </div>

      <div className="grid grid--md-3" style={{ gap: 16 }}>
        {savedAthletes.map((a) => (
          <div key={a.name} className="card card--lg">
            <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 16 }}>
              <div className="avatar avatar--lg">{a.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{a.name}</div>
                  {a.verified && <span className="badge badge--success" style={{ fontSize: 10 }}>Verified</span>}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{a.school} &middot; {a.sport}</div>
                <div style={{ fontSize: 13, color: "var(--text-subtle)", marginTop: 2 }}>Class of {a.grad}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {a.interests.map((i) => (
                <span key={i} className="badge">{i}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/messages" className="btn btn--primary btn--sm" style={{ flex: 1 }}>Message</Link>
              <button className="btn btn--secondary btn--sm" style={{ flex: 1 }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
