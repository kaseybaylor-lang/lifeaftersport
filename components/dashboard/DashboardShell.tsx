"use client";

import { ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, Target, Briefcase, ClipboardList, Mail, User,
  Users, Calendar, FileText, Building2, Bookmark,
} from "lucide-react";

type NavItem = { icon: ReactNode; label: string; href: string; badge?: number };

const studentNav: NavItem[] = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/dashboard" },
  { icon: <Target size={16} />, label: "My Mentors", href: "/mentors" },
  { icon: <Briefcase size={16} />, label: "Saved Jobs", href: "/jobs" },
  { icon: <ClipboardList size={16} />, label: "Applications", href: "/jobs" },
  { icon: <Mail size={16} />, label: "Messages", href: "/messages", badge: 2 },
  { icon: <User size={16} />, label: "Profile", href: "/dashboard/profile" },
];

const mentorNav: NavItem[] = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/dashboard" },
  { icon: <Users size={16} />, label: "My Mentees", href: "/dashboard/mentees" },
  { icon: <Calendar size={16} />, label: "Sessions", href: "/dashboard/sessions" },
  { icon: <FileText size={16} />, label: "Requests", href: "/dashboard/requests" },
  { icon: <Mail size={16} />, label: "Messages", href: "/messages", badge: 3 },
  { icon: <User size={16} />, label: "Profile", href: "/dashboard/profile" },
];

const employerNav: NavItem[] = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard", href: "/dashboard" },
  { icon: <Briefcase size={16} />, label: "Job Postings", href: "/jobs" },
  { icon: <ClipboardList size={16} />, label: "Applicants", href: "/dashboard/applicants" },
  { icon: <Bookmark size={16} />, label: "Saved Athletes", href: "/dashboard/saved-athletes" },
  { icon: <Mail size={16} />, label: "Messages", href: "/messages", badge: 1 },
  { icon: <Building2 size={16} />, label: "Company Profile", href: "/dashboard/company-profile" },
];

function getRoleLabel(role?: string) {
  if (role === "mentor") return "Mentor";
  if (role === "employer") return "Employer";
  return "Student-Athlete";
}

function getNavItems(role?: string) {
  if (role === "mentor") return mentorNav;
  if (role === "employer") return employerNav;
  return studentNav;
}

export default function DashboardShell({ children }: { children: ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "var(--accent)", fontSize: 18 }}>Loading...</div>
      </div>
    );
  }

  if (!user) {
    router.push("/signin");
    return null;
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="dashboard-layout">
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
          <div className="dashboard-sidebar__role">{getRoleLabel(user.role)}</div>
        </div>
        <nav className="dashboard-sidebar__nav">
          {getNavItems(user.role).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`dashboard-sidebar__nav-item${pathname === item.href ? " active" : ""}`}
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
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
