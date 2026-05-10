"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { jobs as allJobs, type Job } from "@/lib/jobs";

/* Inline salary / applicant data keyed by job id */
const jobMeta: Record<string, { salary: string; applicants: number }> = {
  "1":  { salary: "$22/hr",        applicants: 84 },
  "2":  { salary: "$55k - $70k",   applicants: 112 },
  "3":  { salary: "$85k - $105k",  applicants: 203 },
  "4":  { salary: "$18/hr",        applicants: 47 },
  "5":  { salary: "$110k - $140k", applicants: 156 },
  "6":  { salary: "$65k - $80k",   applicants: 38 },
  "7":  { salary: "$70k - $90k",   applicants: 129 },
  "8":  { salary: "$80k - $100k",  applicants: 91 },
  "9":  { salary: "$24/hr",        applicants: 67 },
  "10": { salary: "$16/hr",        applicants: 53 },
  "11": { salary: "$50k - $65k",   applicants: 174 },
  "12": { salary: "$45k - $60k",   applicants: 62 },
  "13": { salary: "$55k - $75k",   applicants: 198 },
  "14": { salary: "$20/hr",        applicants: 88 },
};

const TYPE_OPTIONS  = ["All", "Full-time", "Internship", "Part-time", "Contract"] as const;
const INDUSTRY_OPTIONS = [
  "All",
  "Finance",
  "Tech",
  "Marketing",
  "Sales",
  "Consulting",
  "Media",
  "Sports Management",
] as const;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function typeLabel(t: string) {
  if (t === "full-time") return "Full-time";
  if (t === "internship") return "Internship";
  return t;
}

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filtered = allJobs.filter((job) => {
    if (search) {
      const q = search.toLowerCase();
      const match =
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (typeFilter !== "All") {
      const mapped = typeFilter.toLowerCase();
      if (job.type !== mapped) return false;
    }
    if (industryFilter !== "All") {
      const ind = industryFilter.toLowerCase();
      if (!job.industry.toLowerCase().includes(ind)) return false;
    }
    if (remoteOnly && job.remote !== "remote") return false;
    return true;
  });

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow">
            <span>Job Board</span>
          </div>
          <h1>Find your next role.</h1>
          <p>
            Browse athlete-friendly positions from companies that value discipline,
            teamwork, and the competitive mindset you bring from sport.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
            }}
          >
            {/* ── Sidebar ── */}
            <aside
              style={{
                width: 256,
                flexShrink: 0,
                position: "sticky",
                top: 96,
              }}
              className="card card--lg"
            >
              <h3
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                  color: "var(--text-strong)",
                }}
              >
                Filters
              </h3>

              {/* Search */}
              <div style={{ marginBottom: 20 }}>
                <label className="field-label">Search</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Title, company..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Type */}
              <div style={{ marginBottom: 20 }}>
                <label className="field-label">Type</label>
                <select
                  className="select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  {TYPE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div style={{ marginBottom: 20 }}>
                <label className="field-label">Industry</label>
                <select
                  className="select"
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  {INDUSTRY_OPTIONS.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              {/* Remote only */}
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={remoteOnly}
                  onChange={(e) => setRemoteOnly(e.target.checked)}
                />
                Remote only
              </label>
            </aside>

            {/* ── Content ── */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Results counter */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  Showing {filtered.length} of {allJobs.length} jobs
                </span>
                <span className="badge badge--yellow">All athlete-friendly</span>
              </div>

              {/* Job cards grid */}
              {filtered.length === 0 ? (
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: 64,
                    color: "var(--text-muted)",
                  }}
                >
                  No jobs match your filters. Try adjusting your search.
                </div>
              ) : (
                <div className="grid grid--2">
                  {filtered.map((job) => {
                    const meta = jobMeta[job.id] || {
                      salary: "Competitive",
                      applicants: 0,
                    };
                    return (
                      <Link key={job.id} href={`/jobs/${job.id}`}>
                        <div className="card card--interactive" style={{ height: "100%" }}>
                          {/* Company */}
                          <p
                            style={{
                              fontSize: 12,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "var(--text-muted)",
                              marginBottom: 4,
                            }}
                          >
                            {job.company}
                          </p>

                          {/* Title + badge */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              gap: 8,
                              marginBottom: 12,
                            }}
                          >
                            <h3
                              style={{
                                fontSize: 18,
                                lineHeight: 1.2,
                                color: "var(--text-strong)",
                              }}
                            >
                              {job.title}
                            </h3>
                            {job.athleteFriendly && (
                              <span className="badge badge--yellow" style={{ flexShrink: 0 }}>
                                Athlete-friendly
                              </span>
                            )}
                          </div>

                          {/* Badges row */}
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 6,
                              marginBottom: 12,
                            }}
                          >
                            <span className="badge">{typeLabel(job.type)}</span>
                            <span className="badge">{job.location}</span>
                            <span className="badge">{job.industry}</span>
                          </div>

                          {/* Description (2 lines) */}
                          <p
                            style={{
                              fontSize: 14,
                              color: "var(--text-muted)",
                              lineHeight: 1.5,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              marginBottom: 16,
                            }}
                          >
                            {job.description}
                          </p>

                          {/* Footer row */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              fontSize: 12,
                              color: "var(--text-subtle)",
                              borderTop: "1px solid var(--border)",
                              paddingTop: 12,
                              marginTop: "auto",
                            }}
                          >
                            <span>{formatDate(job.postedDate)}</span>
                            <span style={{ color: "var(--text-muted)" }}>{meta.salary}</span>
                            <span>{meta.applicants} applicants</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
