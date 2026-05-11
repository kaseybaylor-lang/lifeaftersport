"use client";

import { useAuth } from "@/contexts/AuthContext";
import DashboardShell from "@/components/dashboard/DashboardShell";
import Link from "next/link";
import { Star } from "lucide-react";

/* ── Student Dashboard ── */
function StudentDashboard({ firstName }: { firstName: string }) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {firstName}.</h1>
          <p>You have 1 upcoming session and 1 active application.</p>
        </div>
        <Link href="/quiz" className="btn btn--secondary btn--md">Retake Career Quiz &rarr;</Link>
      </div>

      <div className="card card--lg" style={{ borderColor: "rgba(250,204,21,0.3)", background: "rgba(250,204,21,0.03)", marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16, gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 8, fontWeight: 500 }}>Profile Completion</div>
            <h3 style={{ fontSize: 24, marginBottom: 4 }}>Your profile is 75% complete.</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>A complete profile gets 3x more mentor responses and 2x more job interviews.</p>
          </div>
          <Link href="/dashboard/profile" className="btn btn--primary btn--md">Complete Profile &rarr;</Link>
        </div>
        <div className="progress-bar"><div className="progress-bar__fill" style={{ width: "75%" }} /></div>
      </div>

      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Mentor Sessions", value: "3", sub: "2 this month" },
          { label: "Applications", value: "1", sub: "In review", accent: true },
          { label: "Saved Jobs", value: "7", sub: "3 closing soon" },
          { label: "Resources", value: "12", sub: "Read this month" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid--2" style={{ marginBottom: 32 }}>
        <div className="card card--lg">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>Next Session</div>
            <span className="badge badge--yellow">Tomorrow</span>
          </div>
          <div style={{ display: "flex", alignItems: "start", gap: 16, marginBottom: 16 }}>
            <div className="avatar avatar--lg">DC</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>David Chen</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>VP of Strategy &middot; Goldman Sachs</div>
              <div style={{ fontSize: 14, color: "var(--accent)", marginTop: 8 }}>Tomorrow &middot; 4:00 PM EST &middot; 30 min</div>
            </div>
          </div>
          <div style={{ fontSize: 14, color: "var(--text-muted)", padding: "12px 16px", background: "#0a0a0a", borderRadius: 8, border: "1px solid #383838", marginBottom: 16 }}>
            <strong style={{ color: "#c8c8c8" }}>Topic:</strong> Resume review + IB recruiting timeline
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Link href="/messages" className="btn btn--primary btn--md">Join Session</Link>
            <Link href="/messages" className="btn btn--secondary btn--md">Message David</Link>
          </div>
        </div>

        <div className="card card--lg">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>Active Application</div>
            <span className="badge badge--success">In Review</span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "var(--text-subtle)", marginBottom: 4 }}>Apex Capital</div>
            <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 18, marginBottom: 8 }}>Wealth Management Associate</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">Full-time</span>
              <span className="badge">Chicago, IL</span>
            </div>
          </div>
          <div style={{ padding: "12px 16px", background: "#0a0a0a", borderRadius: 8, border: "1px solid #383838", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>Application timeline</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
              <span className="text-accent">&#9679;</span><span style={{ color: "#c8c8c8" }}>Submitted</span>
              <span className="text-subtle">&rarr;</span>
              <span className="text-accent">&#9679;</span><span style={{ color: "#c8c8c8" }}>In review</span>
              <span className="text-subtle">&rarr;</span>
              <span className="text-subtle">&#9675;</span><span className="text-subtle">Interview</span>
            </div>
          </div>
          <Link href="/jobs" className="btn btn--secondary btn--md">View Application &rarr;</Link>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 28, marginBottom: 4 }}>Recommended for you</h2>
            <p className="text-muted" style={{ fontSize: 14 }}>Based on your profile, interests, and quiz results.</p>
          </div>
          <Link href="/jobs" className="text-accent" style={{ fontSize: 14 }}>Browse all &rarr;</Link>
        </div>
        <div className="grid grid--md-3">
          {[
            { company: "Apex Capital", title: "Investment Banking Analyst", match: "94%", tags: ["Full-time", "New York, NY"], posted: "2w ago", salary: "$110-135k" },
            { company: "Bright Labs", title: "Product Marketing Associate", match: "87%", tags: ["Full-time", "Remote"], posted: "1w ago", salary: "$80-100k" },
            { company: "Apex Capital", title: "Sales Development Rep", match: "81%", tags: ["Full-time", "Austin, TX"], posted: "11d ago", salary: "$55-70k" },
          ].map((job) => (
            <Link key={job.title} href="/jobs" className="card card--interactive">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16, marginBottom: 16 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: "var(--text-subtle)", marginBottom: 4 }}>{job.company}</div>
                  <div style={{ fontWeight: 600, color: "#c8c8c8" }}>{job.title}</div>
                </div>
                <span className="badge badge--yellow"><Star size={10} style={{ display: "inline", verticalAlign: "middle" }} /> {job.match} match</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {job.tags.map((tag) => (<span key={tag} className="badge">{tag}</span>))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-subtle)", paddingTop: 12, borderTop: "1px solid #383838" }}>
                <span>{job.posted}</span>
                <span className="text-accent">{job.salary}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 28, marginBottom: 4 }}>Suggested mentors</h2>
            <p className="text-muted" style={{ fontSize: 14 }}>Other mentors who match your career interests.</p>
          </div>
          <Link href="/mentors" className="text-accent" style={{ fontSize: 14 }}>Browse all &rarr;</Link>
        </div>
        <div className="grid grid--md-3">
          {[
            { initials: "SO", name: "Sarah Okonkwo", role: "Senior Brand Mgr \u00B7 Nike", rating: "4.8", status: "Accepting", statusClass: "badge--success" },
            { initials: "RP", name: "Ryan Patel", role: "Consultant \u00B7 McKinsey", rating: "5.0", status: "Currently full", statusClass: "" },
            { initials: "JW", name: "James Wright", role: "Founder \u00B7 PlaybookHQ", rating: "4.7", status: "Accepting", statusClass: "badge--success" },
          ].map((m) => (
            <Link key={m.name} href="/mentors" className="card card--interactive">
              <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                <div className="avatar avatar--md">{m.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{m.role}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 500 }}><Star size={10} style={{ display: "inline", verticalAlign: "middle" }} /> {m.rating}</div>
              </div>
              <span className={`badge ${m.statusClass}`} style={{ fontSize: 11 }}>&#9679; {m.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Mentor Dashboard ── */
function MentorDashboard({ firstName }: { firstName: string }) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {firstName}.</h1>
          <p>You have 2 upcoming sessions and 3 pending mentee requests.</p>
        </div>
        <Link href="/dashboard/profile" className="btn btn--secondary btn--md">View My Profile &rarr;</Link>
      </div>

      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Active Mentees", value: "5", sub: "2 new this month", accent: true },
          { label: "Sessions This Month", value: "8", sub: "Next: Tomorrow" },
          { label: "Pending Requests", value: "3", sub: "Review now" },
          { label: "Avg. Rating", value: "4.9", sub: "From 42 reviews" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 24 }}>Upcoming sessions</h2>
        <div className="grid grid--2">
          {[
            { initials: "MT", name: "Marcus Thompson", school: "U of Michigan \u00B7 Football", time: "Tomorrow \u00B7 4:00 PM EST", topic: "Resume review + IB recruiting timeline" },
            { initials: "AJ", name: "Alyssa Jordan", school: "Stanford \u00B7 Soccer", time: "Thursday \u00B7 2:00 PM EST", topic: "Career exploration: Marketing vs. Consulting" },
          ].map((session) => (
            <div key={session.name} className="card card--lg">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>Upcoming Session</div>
                <span className="badge badge--yellow">Scheduled</span>
              </div>
              <div style={{ display: "flex", alignItems: "start", gap: 16, marginBottom: 16 }}>
                <div className="avatar avatar--lg">{session.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{session.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{session.school}</div>
                  <div style={{ fontSize: 14, color: "var(--accent)", marginTop: 8 }}>{session.time} &middot; 30 min</div>
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, marginBottom: 4 }}>Mentee requests</h2>
          <Link href="/dashboard/requests" className="text-accent" style={{ fontSize: 14 }}>View all &rarr;</Link>
        </div>
        <div className="grid grid--md-3">
          {[
            { initials: "KR", name: "Kevin Roberts", school: "Ohio State \u00B7 Basketball", interest: "Finance & Consulting", when: "2 days ago" },
            { initials: "LP", name: "Lisa Park", school: "USC \u00B7 Track & Field", interest: "Sports Marketing", when: "3 days ago" },
            { initials: "JM", name: "Jake Miller", school: "Duke \u00B7 Lacrosse", interest: "Tech & Product Management", when: "5 days ago" },
          ].map((req) => (
            <div key={req.name} className="card card--lg">
              <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 16 }}>
                <div className="avatar avatar--md">{req.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{req.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{req.school}</div>
                  <div style={{ fontSize: 12, color: "var(--text-subtle)", marginTop: 4 }}>Interested in: {req.interest}</div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: "var(--text-subtle)", marginBottom: 16 }}>Requested {req.when}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn--primary btn--sm" style={{ flex: 1 }}>Accept</button>
                <button className="btn btn--secondary btn--sm" style={{ flex: 1 }}>Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Employer Dashboard ── */
function EmployerDashboard({ firstName }: { firstName: string }) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {firstName}.</h1>
          <p>You have 12 new applicants across 3 active job postings.</p>
        </div>
        <Link href="/jobs" className="btn btn--primary btn--md">Post a New Job &rarr;</Link>
      </div>

      <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
        {[
          { label: "Active Postings", value: "3", sub: "1 closing soon", accent: true },
          { label: "Total Applicants", value: "47", sub: "12 new this week" },
          { label: "Saved Athletes", value: "8", sub: "5 athlete-verified" },
          { label: "Messages", value: "4", sub: "1 unread" },
        ].map((stat) => (
          <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
            <div className="stat-box__label">{stat.label}</div>
            <div className="stat-box__value">{stat.value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 24 }}>Your job postings</h2>
        <div className="grid grid--md-3">
          {[
            { title: "Investment Banking Analyst", location: "New York, NY", applicants: 23, status: "Active", statusClass: "badge--success", posted: "2 weeks ago" },
            { title: "Wealth Management Associate", location: "Chicago, IL", applicants: 15, status: "Active", statusClass: "badge--success", posted: "9 days ago" },
            { title: "Summer Intern \u2014 Strategy", location: "Remote", applicants: 9, status: "Closing Soon", statusClass: "badge--yellow", posted: "3 weeks ago" },
          ].map((job) => (
            <div key={job.title} className="card card--lg">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 16 }}>{job.title}</div>
                <span className={`badge ${job.statusClass}`}>{job.status}</span>
              </div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>{job.location} &middot; Posted {job.posted}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid #383838" }}>
                <span style={{ fontSize: 14, color: "var(--text)" }}>{job.applicants} applicants</span>
                <Link href="/dashboard/applicants" className="text-accent" style={{ fontSize: 14, fontWeight: 500 }}>View &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, marginBottom: 4 }}>Recent applicants</h2>
          <Link href="/dashboard/applicants" className="text-accent" style={{ fontSize: 14 }}>View all &rarr;</Link>
        </div>
        <div className="grid grid--md-3">
          {[
            { initials: "MT", name: "Marcus Thompson", school: "U of Michigan \u00B7 Football", role: "Wealth Mgmt Associate", when: "1 day ago" },
            { initials: "SP", name: "Sofia Perez", school: "UCLA \u00B7 Volleyball", role: "IB Analyst", when: "2 days ago" },
            { initials: "DW", name: "Derek Wilson", school: "Texas \u00B7 Track & Field", role: "Summer Intern", when: "3 days ago" },
          ].map((app) => (
            <div key={app.name} className="card card--interactive">
              <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                <div className="avatar avatar--md">{app.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{app.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{app.school}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "var(--text)", marginBottom: 8 }}>Applied for: <span style={{ color: "var(--accent)" }}>{app.role}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text-subtle)" }}>
                <span>{app.when}</span>
                <Link href="/dashboard/applicants" className="text-accent" style={{ fontWeight: 500 }}>Review &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Main Page ── */
export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] || "User";

  return (
    <DashboardShell>
      {user?.role === "mentor" && <MentorDashboard firstName={firstName} />}
      {user?.role === "employer" && <EmployerDashboard firstName={firstName} />}
      {(!user?.role || user?.role === "student") && <StudentDashboard firstName={firstName} />}
    </DashboardShell>
  );
}
