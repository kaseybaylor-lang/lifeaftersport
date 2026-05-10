import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

const programs = [
  {
    emoji: "🤝",
    badge: "Most Popular",
    title: "1-on-1 Coaching",
    description:
      "Get matched with a mentor who's been where you are. Former athletes turned professionals guide you through career exploration, goal-setting, and your first steps into life after sport.",
    features: [
      "Personalized career mapping",
      "Bi-weekly 30-min sessions",
      "Goal tracking & accountability",
    ],
    href: "/programs",
  },
  {
    emoji: "🛠️",
    badge: "In-Person & Virtual",
    title: "Workshops",
    description:
      "Hands-on skill-building sessions designed for athletes. From resume writing to personal branding, learn the tools you need to compete in the professional world.",
    features: [
      "Resume & LinkedIn optimization",
      "Personal branding for athletes",
      "Networking fundamentals",
    ],
    href: "/programs",
  },
  {
    emoji: "🎥",
    badge: "Free Access",
    title: "Webinars",
    description:
      "Live and on-demand sessions featuring former athletes, industry experts, and career coaches sharing insights on thriving beyond the game.",
    features: [
      "Monthly expert panels",
      "Q&A with former athletes",
      "On-demand replay library",
    ],
    href: "/programs",
  },
  {
    emoji: "🌐",
    badge: "Upcoming",
    title: "Networking Events",
    description:
      "Connect with fellow athletes in transition, employers who value athletic backgrounds, and professionals across industries at our curated events.",
    features: [
      "Quarterly mixer events",
      "Industry-specific meetups",
      "Employer showcase nights",
    ],
    href: "/programs",
  },
  {
    emoji: "💼",
    badge: "Updated Weekly",
    title: "Job Opportunities",
    description:
      "Access our curated job board featuring employers who actively seek the discipline, teamwork, and resilience that athletes bring to the table.",
    features: [
      "Athlete-friendly employers",
      "Internships & entry-level roles",
      "Career-switcher positions",
    ],
    href: "/jobs",
  },
  {
    emoji: "👥",
    badge: "Join Free",
    title: "Community Groups",
    description:
      "Join a community of athletes navigating the same transition. Share experiences, get advice, and build lasting connections with people who understand your journey.",
    features: [
      "Sport-specific groups",
      "Industry interest groups",
      "Regional chapters",
    ],
    href: "/programs",
  },
];

const upcomingEvents = [
  {
    title: "Resume Workshop",
    type: "Workshop",
    format: "Virtual",
    date: "May 15, 2026",
    time: "2:00 - 3:30 PM EST",
    location: "Virtual",
  },
  {
    title: "From Court to Career Panel",
    type: "Webinar",
    format: "Virtual",
    date: "May 22, 2026",
    time: "6:00 - 7:30 PM EST",
    location: "Virtual",
  },
  {
    title: "Spring Athlete Mixer",
    type: "Networking",
    format: "In-Person",
    date: "Jun 1, 2026",
    time: "5:00 - 8:00 PM CST",
    location: "Austin, TX",
  },
  {
    title: "Financial Literacy for Athletes",
    type: "Webinar",
    format: "Virtual",
    date: "Jun 8, 2026",
    time: "1:00 - 2:00 PM EST",
    location: "Virtual",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      {/* ── Page header ── */}
      <header className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow">
            <span>Programs</span>
          </div>
          <h1>Your playbook for what&apos;s next.</h1>
          <p>
            From mentorship to networking, we offer the programs and resources to
            help you transition from athlete to professional with confidence.
          </p>
        </div>
      </header>

      {/* ── All programs ── */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 32, marginBottom: 40 }}>All programs</h2>

          <div className="grid grid--3">
            {programs.map((p) => (
              <div key={p.title} className="card card--interactive" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{p.emoji}</span>
                  <span className="badge badge--yellow">{p.badge}</span>
                </div>

                <h3 style={{ fontSize: 20, marginBottom: 12 }}>{p.title}</h3>

                <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 24, flex: 1 }}>
                  {p.description}
                </p>

                <ul className="list-clean" style={{ marginBottom: 24 }}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <Link href={p.href} className="btn btn--secondary btn--md btn--full">
                  {p.href === "/jobs" ? "View Listings" : "Learn More"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="section section--bg-elevated">
        <div className="container">
          <h2 style={{ fontSize: 32, marginBottom: 40 }}>Upcoming events</h2>

          <div className="grid grid--2">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className="card card--lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="badge badge--yellow">{ev.type}</span>
                  <span className="badge">{ev.format}</span>
                </div>

                <h3 style={{ fontSize: 20 }}>{ev.title}</h3>

                <p className="text-muted" style={{ fontSize: 14 }}>
                  {ev.date} &middot; {ev.time} &middot; {ev.location}
                </p>

                <div style={{ marginTop: "auto" }}>
                  <button className="btn btn--secondary btn--md">Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
