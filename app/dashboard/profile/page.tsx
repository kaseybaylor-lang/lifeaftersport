"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <DashboardShell>
      <div className="dashboard-header">
        <div>
          <h1>Profile</h1>
          <p>Update your personal information and preferences.</p>
        </div>
        <button className="btn btn--primary btn--md">Save Changes</button>
      </div>

      <div className="card card--lg" style={{ borderColor: "rgba(250,204,21,0.3)", background: "rgba(250,204,21,0.03)", marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 8, fontWeight: 500 }}>Profile Completion</div>
            <h3 style={{ fontSize: 20, marginBottom: 4 }}>Your profile is 75% complete.</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>Complete your profile to get more visibility.</p>
          </div>
        </div>
        <div className="progress-bar" style={{ marginTop: 16 }}><div className="progress-bar__fill" style={{ width: "75%" }} /></div>
      </div>

      <div className="card card--lg" style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Personal Information</div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div className="avatar avatar--lg" style={{ width: 80, height: 80, fontSize: 28 }}>
            {user?.name?.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 18 }}>{user?.name}</div>
            <div style={{ fontSize: 14, color: "var(--text-muted)", textTransform: "capitalize" }}>{user?.role || "Student"}</div>
          </div>
        </div>

        <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
          <div>
            <label className="field-label">First Name</label>
            <input className="input" type="text" defaultValue={user?.name?.split(" ")[0] || ""} />
          </div>
          <div>
            <label className="field-label">Last Name</label>
            <input className="input" type="text" defaultValue={user?.name?.split(" ").slice(1).join(" ") || ""} />
          </div>
        </div>

        <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
          <div>
            <label className="field-label">Email</label>
            <input className="input" type="email" defaultValue={user?.email || ""} />
          </div>
          <div>
            <label className="field-label">Phone</label>
            <input className="input" type="tel" placeholder="(555) 000-0000" />
          </div>
        </div>

        {user?.role === "student" && (
          <>
            <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
              <div>
                <label className="field-label">Sport</label>
                <input className="input" type="text" defaultValue={user?.sport || ""} />
              </div>
              <div>
                <label className="field-label">University</label>
                <input className="input" type="text" defaultValue={user?.university || ""} />
              </div>
            </div>
            <div className="grid grid--2" style={{ gap: 20 }}>
              <div>
                <label className="field-label">Graduation Year</label>
                <input className="input" type="text" defaultValue={user?.graduationYear || ""} />
              </div>
              <div>
                <label className="field-label">Status</label>
                <input className="input" type="text" defaultValue="Current Athlete" />
              </div>
            </div>
          </>
        )}
      </div>

      {user?.role === "student" && (
        <div className="card card--lg">
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Career Interests</div>
          <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
            <div>
              <label className="field-label">Industries of Interest</label>
              <input className="input" type="text" defaultValue="Finance, Consulting" />
            </div>
            <div>
              <label className="field-label">Preferred Locations</label>
              <input className="input" type="text" defaultValue="New York, Chicago" />
            </div>
          </div>
          <div>
            <label className="field-label">Bio</label>
            <textarea
              className="input"
              rows={4}
              placeholder="Tell mentors and employers about yourself, your athletic journey, and career goals..."
              style={{ resize: "vertical" }}
            />
          </div>
        </div>
      )}

      {user?.role === "mentor" && (
        <div className="card card--lg">
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>Mentoring Preferences</div>
          <div className="grid grid--2" style={{ gap: 20, marginBottom: 20 }}>
            <div>
              <label className="field-label">Areas of Expertise</label>
              <input className="input" type="text" defaultValue="Finance, Career Transitions" />
            </div>
            <div>
              <label className="field-label">Max Mentees</label>
              <input className="input" type="number" defaultValue="8" />
            </div>
          </div>
          <div>
            <label className="field-label">About / Bio</label>
            <textarea
              className="input"
              rows={4}
              defaultValue="Former Division I athlete turned finance professional. Passionate about helping student-athletes navigate their career transitions with confidence."
              style={{ resize: "vertical" }}
            />
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
