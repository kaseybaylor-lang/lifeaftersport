"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import { useAuth } from "@/contexts/AuthContext";

export default function CompanyProfilePage() {
  const { user } = useAuth();

  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Company Profile</h1>
          <p>Manage how your company appears to athletes.</p>
        </div>
        <button className="btn btn--primary btn--md">Save Changes</button>
      </div>

      <div className="card card--lg" style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Company Information</div>

        <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
          <div>
            <label className="field-label">Company Name</label>
            <input className="input" type="text" defaultValue="Apex Capital" />
          </div>
          <div>
            <label className="field-label">Industry</label>
            <input className="input" type="text" defaultValue="Financial Services" />
          </div>
        </div>

        <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
          <div>
            <label className="field-label">Company Size</label>
            <input className="input" type="text" defaultValue="500-1000 employees" />
          </div>
          <div>
            <label className="field-label">Headquarters</label>
            <input className="input" type="text" defaultValue="New York, NY" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label className="field-label">Website</label>
          <input className="input" type="text" defaultValue="https://apexcapital.com" />
        </div>

        <div>
          <label className="field-label">About</label>
          <textarea
            className="input"
            rows={4}
            defaultValue="Apex Capital is a leading financial services firm committed to hiring top talent from diverse backgrounds, including former student-athletes who bring discipline, teamwork, and competitive drive to our teams."
            style={{ resize: "vertical" }}
          />
        </div>
      </div>

      <div className="card card--lg" style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Contact Person</div>

        <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
          <div>
            <label className="field-label">Full Name</label>
            <input className="input" type="text" defaultValue={user?.name || ""} />
          </div>
          <div>
            <label className="field-label">Job Title</label>
            <input className="input" type="text" defaultValue="Head of Talent Acquisition" />
          </div>
        </div>

        <div className="grid grid--2" style={{ gap: 20 }}>
          <div>
            <label className="field-label">Email</label>
            <input className="input" type="email" defaultValue={user?.email || ""} />
          </div>
          <div>
            <label className="field-label">Phone</label>
            <input className="input" type="tel" defaultValue="(212) 555-0142" />
          </div>
        </div>
      </div>

      <div className="card card--lg">
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Why Athletes?</div>
        <p className="text-muted" style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
          This section is shown to athletes browsing your company. Explain why your organization values hiring former athletes.
        </p>
        <textarea
          className="input"
          rows={4}
          defaultValue="At Apex Capital, we've seen firsthand how former athletes excel in high-pressure environments. Their discipline, coachability, and team-first mentality make them ideal candidates for our fast-paced culture."
          style={{ resize: "vertical" }}
        />
      </div>
    </DashboardShell>
  );
}
