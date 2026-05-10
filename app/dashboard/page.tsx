"use client";

import { useEffect, ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, Target, Briefcase, ClipboardList, Mail, User,
} from "lucide-react";

const studentNav: { icon: ReactNode; label: string; href: string; active?: boolean; badge?: number }[] = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/dashboard", active: true },
  { icon: <Target size={16} />, label: "My Mentors", href: "/mentors" },
  { icon: <Briefcase size={16} />, label: "Saved Jobs", href: "/jobs" },
  { icon: <ClipboardList size={16} />, label: "Applications", href: "/jobs" },
  { icon: <Mail size={16} />, label: "Messages", href: "/messages", badge: 2 },
  { icon: <User size={16} />, label: "Profile", href: "/dashboard" },
];

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "var(--accent)", fontSize: 18 }}>Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  const firstName = user.name?.split(" ")[0] || "Athlete";
  const initials = user.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";
  const roleName = user.role === "mentor" ? "Mentor" : user.role === "employer" ? "Employer" : "Student-Athlete";

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar__brand">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-oswald), Impact, sans-serif",
              fontSize: 18,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#c8c8c8",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Life After Sport<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <div className="dashboard-sidebar__role">{roleName}</div>
        </div>
        <nav className="dashboard-sidebar__nav">
          {studentNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`dashboard-sidebar__nav-item${item.active ? " active" : ""}`}
            >
              <span className="dashboard-sidebar__nav-item-left">
                <span className="dashboard-sidebar__nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </span>
              {item.badge && (
                <span className="dashboard-sidebar__nav-badge">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>
        <div className="dashboard-sidebar__user">
          <div className="dashboard-sidebar__user-info">
            <div className="avatar avatar--md">{initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{user.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "capitalize" }}>{user.role || "Student"}</div>
            </div>
          </div>
          <button
            onClick={() => { signOut(); router.push("/"); }}
            style={{
              display: "block",
              fontSize: 14,
              color: "#a1a1a1",
              padding: "8px 12px",
              borderRadius: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              width: "100%",
              textAlign: "left",
            }}
          >
            &larr; Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {firstName}.</h1>
            <p>You have 1 upcoming session and 1 active application.</p>
          </div>
          <Link href="/quiz" className="btn btn--secondary btn--md">
            Retake Career Quiz &rarr;
          </Link>
        </div>

        {/* Profile Completion */}
        <div
          className="card card--lg"
          style={{
            borderColor: "rgba(250,204,21,0.3)",
            background: "rgba(250,204,21,0.03)",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16, gap: 16, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 8, fontWeight: 500 }}>
                Profile Completion
              </div>
              <h3 style={{ fontSize: 24, marginBottom: 4 }}>Your profile is 75% complete.</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                A complete profile gets 3x more mentor responses and 2x more job interviews.
              </p>
            </div>
            <Link href="/dashboard" className="btn btn--primary btn--md">
              Complete Profile &rarr;
            </Link>
          </div>
          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: "75%" }} />
          </div>
        </div>

        {/* Stat Boxes */}
        <div className="grid grid--4" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { label: "Mentor Sessions", value: "3", sub: "2 this month", accent: false },
            { label: "Applications", value: "1", sub: "In review", accent: true },
            { label: "Saved Jobs", value: "7", sub: "3 closing soon", accent: false },
            { label: "Resources", value: "12", sub: "Read this month", accent: false },
          ].map((stat) => (
            <div key={stat.label} className={`stat-box${stat.accent ? " stat-box--accent" : ""}`}>
              <div className="stat-box__label">{stat.label}</div>
              <div className="stat-box__value">{stat.value}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Session + Active Application */}
        <div className="grid grid--2" style={{ marginBottom: 32 }}>
          {/* Next Session */}
          <div className="card card--lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>
                Next Session
              </div>
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
            <div
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                padding: "12px 16px",
                background: "#0a0a0a",
                borderRadius: 8,
                border: "1px solid #383838",
                marginBottom: 16,
              }}
            >
              <strong style={{ color: "#c8c8c8" }}>Topic:</strong> Resume review + IB recruiting timeline
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/messages" className="btn btn--primary btn--md">Join Session</Link>
              <Link href="/messages" className="btn btn--secondary btn--md">Message David</Link>
            </div>
          </div>

          {/* Active Application */}
          <div className="card card--lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", fontWeight: 500 }}>
                Active Application
              </div>
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
            <div
              style={{
                padding: "12px 16px",
                background: "#0a0a0a",
                borderRadius: 8,
                border: "1px solid #383838",
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>Application timeline</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
                <span className="text-accent">&#9679;</span>
                <span style={{ color: "#c8c8c8" }}>Submitted</span>
                <span className="text-subtle">&rarr;</span>
                <span className="text-accent">&#9679;</span>
                <span style={{ color: "#c8c8c8" }}>In review</span>
                <span className="text-subtle">&rarr;</span>
                <span className="text-subtle">&#9675;</span>
                <span className="text-subtle">Interview</span>
              </div>
            </div>
            <Link href="/jobs" className="btn btn--secondary btn--md">
              View Application &rarr;
            </Link>
          </div>
        </div>

        {/* Recommended Jobs */}
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
                  <span className="badge badge--yellow">&#9733; {job.match} match</span>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {job.tags.map((tag) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "var(--text-subtle)",
                    paddingTop: 12,
                    borderTop: "1px solid #383838",
                  }}
                >
                  <span>{job.posted}</span>
                  <span className="text-accent">{job.salary}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Suggested Mentors */}
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
            ].map((mentor) => (
              <Link key={mentor.name} href="/mentors" className="card card--interactive">
                <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                  <div className="avatar avatar--md">{mentor.initials}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{mentor.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{mentor.role}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>&#9733; {mentor.rating}</div>
                </div>
                <span className={`badge ${mentor.statusClass}`} style={{ fontSize: 11 }}>
                  &#9679; {mentor.status}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
