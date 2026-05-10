"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { mentors, type Mentor } from "@/lib/mentors";

/* ------------------------------------------------------------------ */
/*  Inline enrichment data                                            */
/* ------------------------------------------------------------------ */
const enrichment: Record<
  string,
  {
    rating: number;
    sessions: number;
    expertise: string[];
    availability: "accepting" | "limited" | "full";
    school: string;
    yearsExperience: number;
    whatToExpect: string[];
  }
> = {
  "1": {
    rating: 4.9,
    sessions: 142,
    expertise: ["Enterprise Sales", "Leadership", "Career Pivots", "Tech Industry"],
    availability: "accepting",
    school: "USC",
    yearsExperience: 10,
    whatToExpect: [
      "Bi-weekly 30-minute video calls",
      "Resume and LinkedIn profile review",
      "Mock interview practice for sales roles",
      "Introductions to hiring managers in tech",
    ],
  },
  "2": {
    rating: 4.8,
    sessions: 98,
    expertise: ["Brand Strategy", "Sports Marketing", "Campaign Management", "Creative Direction"],
    availability: "limited",
    school: "Stanford",
    yearsExperience: 8,
    whatToExpect: [
      "Monthly 45-minute strategy sessions",
      "Portfolio and project feedback",
      "Guidance on breaking into sports marketing",
      "Networking tips for the industry",
    ],
  },
  "3": {
    rating: 5.0,
    sessions: 76,
    expertise: ["Sports Medicine", "Rehab Protocols", "Patient Care", "DPT Programs"],
    availability: "accepting",
    school: "UCLA",
    yearsExperience: 8,
    whatToExpect: [
      "Bi-weekly 30-minute calls",
      "Guidance on DPT program applications",
      "Shadowing opportunities at the clinic",
      "Advice on specialization paths",
    ],
  },
  "4": {
    rating: 4.7,
    sessions: 63,
    expertise: ["Product Management", "Sports Tech", "Data Analytics", "Agile Development"],
    availability: "accepting",
    school: "Oregon",
    yearsExperience: 7,
    whatToExpect: [
      "Weekly async check-ins via Slack",
      "PM case study practice",
      "Product sense and strategy feedback",
      "Help preparing for APM programs",
    ],
  },
  "5": {
    rating: 4.9,
    sessions: 110,
    expertise: ["Investment Banking", "Financial Modeling", "Networking", "Wall Street Culture"],
    availability: "limited",
    school: "Vanderbilt",
    yearsExperience: 10,
    whatToExpect: [
      "Monthly 30-minute calls",
      "Technical interview prep for finance",
      "Resume review tailored for banking",
      "Introductions to recruiting contacts",
    ],
  },
  "6": {
    rating: 4.8,
    sessions: 55,
    expertise: ["Coaching", "Player Development", "Recruiting", "Sport Management"],
    availability: "full",
    school: "Penn State",
    yearsExperience: 6,
    whatToExpect: [
      "Monthly video calls when availability opens",
      "Coaching philosophy discussions",
      "Advice on graduate assistant positions",
      "Recruiting process walkthroughs",
    ],
  },
  "7": {
    rating: 4.6,
    sessions: 47,
    expertise: ["Data Science", "Performance Analytics", "Python", "Machine Learning"],
    availability: "accepting",
    school: "Florida",
    yearsExperience: 8,
    whatToExpect: [
      "Bi-weekly 30-minute video calls",
      "Code review and project feedback",
      "Guidance on sports analytics portfolios",
      "Help with data science interview prep",
    ],
  },
  "8": {
    rating: 4.7,
    sessions: 82,
    expertise: ["Social Media", "Content Strategy", "Personal Branding", "Video Production"],
    availability: "accepting",
    school: "Duke",
    yearsExperience: 7,
    whatToExpect: [
      "Bi-weekly 30-minute calls",
      "Content calendar and strategy review",
      "Personal brand audit and roadmap",
      "Tips on growing your audience",
    ],
  },
  "9": {
    rating: 4.9,
    sessions: 91,
    expertise: ["Sports Law", "Contract Negotiation", "Athlete Representation", "NBPA Certification"],
    availability: "limited",
    school: "UConn",
    yearsExperience: 10,
    whatToExpect: [
      "Monthly 30-minute calls",
      "Overview of the agent certification process",
      "Advice on law school and internship paths",
      "Networking in the sports agency world",
    ],
  },
  "10": {
    rating: 4.5,
    sessions: 34,
    expertise: ["Brand Partnerships", "Campus Marketing", "Event Planning", "Influencer Strategy"],
    availability: "accepting",
    school: "UNC",
    yearsExperience: 5,
    whatToExpect: [
      "Weekly async check-ins",
      "Help building a marketing portfolio",
      "Guidance on ambassador and NIL opportunities",
      "Event planning and activation tips",
    ],
  },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function availabilityLabel(status: "accepting" | "limited" | "full") {
  if (status === "accepting") return "Accepting mentees";
  if (status === "limited") return "Limited availability";
  return "Currently full";
}

function AvailabilityBadge({ status }: { status: "accepting" | "limited" | "full" }) {
  if (status === "accepting")
    return <span className="badge badge--success">Accepting mentees</span>;
  if (status === "limited")
    return <span className="badge badge--yellow">Limited availability</span>;
  return <span className="badge">Currently full</span>;
}

export default function MentorDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const mentor = mentors.find((m) => m.id === id);
  const extra = id ? enrichment[id] : undefined;

  if (!mentor) {
    return (
      <>
        <Navbar />
        <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: 36, marginBottom: 16 }}>Mentor not found</h1>
            <Link href="/mentors" className="btn btn--secondary btn--md">
              Back to mentors
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          {/* Back link */}
          <Link
            href="/mentors"
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
            &larr; Back to mentors
          </Link>

          {/* Two-column layout */}
          <div
            className="mentor-detail-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 340px",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* ---- Content column ---- */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Hero card */}
              <div className="card card--xl" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div className="avatar avatar--xl">{getInitials(mentor.name)}</div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h1
                      style={{
                        fontSize: 36,
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {mentor.name}
                    </h1>
                    <p style={{ fontSize: 16, color: "var(--text)", margin: "0 0 4px" }}>
                      {mentor.currentRole} at{" "}
                      <span style={{ color: "var(--text-strong)" }}>{mentor.company}</span>
                    </p>

                    {/* Inline badges */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                      {extra && (
                        <span className="badge badge--yellow">
                          {"*"} {extra.rating} rating
                        </span>
                      )}
                      {extra && (
                        <span className="badge">{extra.sessions} sessions</span>
                      )}
                      <span className="badge">Former {mentor.formerSport}</span>
                      {extra && <span className="badge">{extra.school}</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h2
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  About
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", margin: 0 }}>
                  {mentor.bio}
                </p>
              </div>

              {/* Career Journey */}
              <div className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h2
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  Career Journey
                </h2>
                <ul className="list-clean">
                  {mentor.careerJourney.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              {extra && (
                <div className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2
                    style={{
                      fontSize: 14,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Expertise
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {extra.expertise.map((tag) => (
                      <span key={tag} className="badge badge--yellow">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* What to expect */}
              {extra && (
                <div className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2
                    style={{
                      fontSize: 14,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    What to expect
                  </h2>
                  <ul className="list-clean">
                    {extra.whatToExpect.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ---- Sidebar ---- */}
            <aside style={{ position: "sticky", top: 88 }}>
              <div className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <h3
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 4,
                  }}
                >
                  Key Details
                </h3>

                {/* Detail rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <span className="field-label">Industry</span>
                    <p style={{ margin: 0, fontSize: 15, color: "var(--text-strong)" }}>
                      {mentor.industry}
                    </p>
                  </div>
                  {extra && (
                    <div>
                      <span className="field-label">Experience</span>
                      <p style={{ margin: 0, fontSize: 15, color: "var(--text-strong)" }}>
                        {extra.yearsExperience} years post-sport
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="field-label">Availability</span>
                    <div style={{ marginTop: 4 }}>
                      {extra ? (
                        <AvailabilityBadge status={extra.availability} />
                      ) : (
                        <span className="badge">Unknown</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid var(--border)" }} />

                {/* CTAs */}
                <button className="btn btn--primary btn--lg btn--full">
                  Request Mentorship
                </button>
                <button className="btn btn--secondary btn--lg btn--full">
                  Send a message
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 767px) {
          .mentor-detail-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
