"use client";

import { use } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { jobs as allJobs } from "@/lib/jobs";

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

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function typeLabel(t: string) {
  if (t === "full-time") return "Full-time";
  if (t === "internship") return "Internship";
  return t;
}

/* Why-athletes blurbs keyed by industry */
const athleteReasons: Record<string, string[]> = {
  default: [
    "Your competitive drive translates directly to exceeding targets and KPIs.",
    "Time-management skills from balancing sport and academics are exactly what fast-paced teams need.",
    "Coachability and a growth mindset mean you ramp up faster than most hires.",
  ],
  Technology: [
    "Athletes thrive in agile, sprint-based work environments.",
    "Your ability to perform under pressure makes you a natural for product launches and tight deadlines.",
    "Team-sport experience translates to effective cross-functional collaboration.",
  ],
  Healthcare: [
    "Your firsthand understanding of injury and recovery builds instant rapport with patients.",
    "Discipline from training regimens prepares you for the rigor of clinical work.",
    "Athletes communicate clearly under pressure, a critical skill in healthcare.",
  ],
  "Education & Coaching": [
    "Former athletes understand the student-athlete experience from the inside.",
    "Leadership on the field translates to mentoring the next generation.",
    "You know what it takes to push people past their limits, safely and strategically.",
  ],
};

export default function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const job = allJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="page-header">
          <div className="page-header__inner">
            <h1>Job not found</h1>
            <p>
              <Link href="/jobs" style={{ color: "var(--accent)" }}>
                Back to all jobs
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const meta = jobMeta[job.id] || { salary: "Competitive", applicants: 0 };
  const reasons = athleteReasons[job.industry] || athleteReasons.default;

  /* Similar roles: same industry, excluding current, max 2 */
  const similar = allJobs
    .filter((j) => j.id !== job.id && j.industry === job.industry)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <div className="section" style={{ paddingTop: 128 }}>
        <div className="container">
          {/* Back link */}
          <Link
            href="/jobs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              color: "var(--text-muted)",
              marginBottom: 32,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            &#8592; Back to all jobs
          </Link>

          {/* Two-column layout */}
          <div
            style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
            }}
          >
            {/* ── Content column ── */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Company */}
              <p
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: 8,
                }}
              >
                {job.company}
              </p>

              {/* Title */}
              <h1
                style={{
                  fontSize: 40,
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                {job.title}
              </h1>

              {/* Badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                {job.athleteFriendly && (
                  <span className="badge badge--yellow">Athlete-friendly</span>
                )}
                <span className="badge">{typeLabel(job.type)}</span>
                <span className="badge">{job.location}</span>
                <span className="badge">{job.industry}</span>
                <span className="badge">
                  {job.remote === "remote"
                    ? "Remote"
                    : job.remote === "hybrid"
                    ? "Hybrid"
                    : "On-site"}
                </span>
              </div>

              {/* About the role */}
              <div style={{ marginBottom: 40 }}>
                <h2
                  style={{
                    fontSize: 20,
                    marginBottom: 16,
                    color: "var(--text-strong)",
                  }}
                >
                  About the role
                </h2>
                <p style={{ color: "var(--text)", lineHeight: 1.7 }}>
                  {job.description}
                </p>
              </div>

              {/* What we are looking for */}
              <div style={{ marginBottom: 40 }}>
                <h2
                  style={{
                    fontSize: 20,
                    marginBottom: 16,
                    color: "var(--text-strong)",
                  }}
                >
                  What we&apos;re looking for
                </h2>
                <ul className="list-clean">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Why this role works for athletes */}
              <div style={{ marginBottom: 40 }}>
                <h2
                  style={{
                    fontSize: 20,
                    marginBottom: 16,
                    color: "var(--text-strong)",
                  }}
                >
                  Why this role works for athletes
                </h2>
                <ul className="list-clean">
                  {reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Sticky sidebar ── */}
            <aside
              style={{
                width: 320,
                flexShrink: 0,
                position: "sticky",
                top: 96,
              }}
            >
              <div className="card card--lg">
                {/* Key details grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <div className="stat-box">
                    <div className="stat-box__label">Salary</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-strong)" }}>
                      {meta.salary}
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-box__label">Type</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-strong)" }}>
                      {typeLabel(job.type)}
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-box__label">Location</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-strong)" }}>
                      {job.location}
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-box__label">Posted</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-strong)" }}>
                      {formatDate(job.postedDate)}
                    </div>
                  </div>
                </div>

                {/* Applicants */}
                <div className="stat-box stat-box--accent" style={{ marginBottom: 24 }}>
                  <div className="stat-box__label">Applicants</div>
                  <div className="stat-box__value">{meta.applicants}</div>
                </div>

                {/* Actions */}
                <button className="btn btn--primary btn--lg btn--full" style={{ marginBottom: 12 }}>
                  Apply Now
                </button>
                <button className="btn btn--secondary btn--lg btn--full">
                  Save for later
                </button>
              </div>
            </aside>
          </div>

          {/* ── Similar roles ── */}
          {similar.length > 0 && (
            <div style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid var(--border)" }}>
              <h2
                style={{
                  fontSize: 24,
                  marginBottom: 24,
                  color: "var(--text-strong)",
                }}
              >
                Similar roles
              </h2>
              <div className="grid grid--2">
                {similar.map((sj) => {
                  const sm = jobMeta[sj.id] || { salary: "Competitive", applicants: 0 };
                  return (
                    <Link key={sj.id} href={`/jobs/${sj.id}`}>
                      <div className="card card--interactive" style={{ height: "100%" }}>
                        <p
                          style={{
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--text-muted)",
                            marginBottom: 4,
                          }}
                        >
                          {sj.company}
                        </p>
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
                            {sj.title}
                          </h3>
                          {sj.athleteFriendly && (
                            <span className="badge badge--yellow" style={{ flexShrink: 0 }}>
                              Athlete-friendly
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                          <span className="badge">{typeLabel(sj.type)}</span>
                          <span className="badge">{sj.location}</span>
                          <span className="badge">{sj.industry}</span>
                        </div>
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
                          {sj.description}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: 12,
                            color: "var(--text-subtle)",
                            borderTop: "1px solid var(--border)",
                            paddingTop: 12,
                          }}
                        >
                          <span>{formatDate(sj.postedDate)}</span>
                          <span style={{ color: "var(--text-muted)" }}>{sm.salary}</span>
                          <span>{sm.applicants} applicants</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
