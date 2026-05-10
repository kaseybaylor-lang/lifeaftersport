import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import {
  Users, Target, Briefcase, Handshake, Wrench, Video,
  Globe, UserPlus, CalendarDays, BookOpen, MessageSquare,
} from "lucide-react";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero__grid-bg" />
        <div className="hero__glow" />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              marginBottom: 32,
              borderRadius: 999,
              border: "1px solid #333",
              background: "#1a1a1a",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--text)",
              }}
            >
              Designed for college athletes nationwide
            </span>
          </div>
          <h1
            style={{
              fontSize: 72,
              lineHeight: 0.9,
              marginBottom: 32,
              color: "var(--text)",
            }}
            className="md:!text-[144px] lg:!text-[160px]"
          >
            Life<br />After<br /><span style={{ color: "var(--accent)" }}>Sport.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--text)",
              maxWidth: 560,
              marginBottom: 40,
              lineHeight: 1.6,
            }}
            className="md:!text-[20px]"
          >
            The career platform built for student-athletes transitioning out of
            competitive sports. Mentorship, jobs, and community &mdash; all in one
            place, designed by athletes for athletes.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/register?role=student" className="btn btn--primary btn--lg">
              Start Free Trial &rarr;
            </Link>
            <Link href="#programs" className="btn btn--secondary btn--lg">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" id="pillars">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>The Platform</span></div>
            <h2 style={{ fontSize: 56, marginBottom: 24 }}>
              Three pillars.<br /><span style={{ color: "#888" }}>One transition.</span>
            </h2>
            <p style={{ fontSize: 18, color: "#c8c8c8" }}>
              Everything you need to translate athletic experience into a career &mdash;
              structured around the three things that matter most.
            </p>
          </div>
          <div className="grid grid--3">
            {[
              {
                num: "01",
                title: "Mentorship",
                bold: "Get matched 1-on-1 with former athletes who've already made the transition.",
                desc: "Bi-weekly sessions, personalized career mapping, accountability from people who've been exactly where you are.",
                link: "/mentors",
              },
              {
                num: "02",
                title: "Jobs",
                bold: "A curated job board built around employers who actively value athletic backgrounds.",
                desc: "Internships, entry-level roles, and career-switcher positions — all from companies that get what you bring to the table.",
                link: "/jobs",
              },
              {
                num: "03",
                title: "Community",
                bold: "Join a community of athletes navigating the same transition you are.",
                desc: "Sport-specific groups, industry interest channels, and regional chapters — never figure this out alone.",
                link: "/programs",
              },
            ].map((pillar) => (
              <div key={pillar.num} className="card card--lg" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                    fontSize: 72,
                    color: "var(--accent)",
                    marginBottom: 32,
                    fontWeight: 600,
                  }}
                >
                  {pillar.num}
                </div>
                <h3 style={{ fontSize: 28, marginBottom: 16 }}>{pillar.title}</h3>
                <p style={{ color: "#fff", fontWeight: 500, marginBottom: 12 }}>{pillar.bold}</p>
                <p style={{ color: "#a1a1a1", fontSize: 14, marginBottom: 24, flex: 1 }}>{pillar.desc}</p>
                <Link href={pillar.link} className="text-accent" style={{ fontWeight: 500 }}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH STATS */}
      <section className="section" style={{ borderTop: "1px solid #1f1f1f" }}>
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "start", gap: 64 }}>
            <div>
              <div className="eyebrow"><span>Why It Matters</span></div>
              <h2 style={{ fontSize: 56, marginBottom: 24 }}>The transition<br />is hard.</h2>
              <p style={{ fontSize: 18, color: "#c8c8c8" }}>
                Based on our research with college student-athletes nationwide, the move
                from sport to career is filled with uncertainty. We built Life After Sport
                to fix that.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { value: "54.5%", accent: true, label: "Feel anxiety about transitioning out of competitive sport" },
                { value: "63.6%", accent: false, label: "Don't know who to ask for career guidance" },
                { value: "68.2%", accent: false, label: "Want a clear career roadmap after athletics" },
              ].map((stat) => (
                <div key={stat.value} className="stat-card">
                  <div className={`stat-card__value${stat.accent ? " stat-card__value--accent" : ""}`}>
                    {stat.value}
                  </div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGN UP PATHS */}
      <section className="section section--bg-elevated">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>Choose Your Path</span></div>
            <h2 style={{ fontSize: 56, marginBottom: 24 }}>Three ways<br />to join.</h2>
            <p style={{ fontSize: 18, color: "#c8c8c8" }}>
              Whether you&apos;re transitioning, mentoring, or hiring &mdash; there&apos;s a place for you.
            </p>
          </div>
          <div className="grid grid--3">
            {([
              {
                icon: <Users size={32} />,
                label: "For Student-Athletes",
                title: "Find your next play.",
                desc: "Get matched with mentors, browse athlete-friendly jobs, and access the resources to translate your athletic career into a professional one.",
                href: "/register?role=student",
                cta: "Sign Up as Athlete",
              },
              {
                icon: <Target size={32} />,
                label: "For Mentors",
                title: "Pay it forward.",
                desc: "Former student-athlete now in your career? Share your experience with athletes navigating the same transition you did.",
                href: "/register?role=mentor",
                cta: "Become a Mentor",
              },
              {
                icon: <Briefcase size={32} />,
                label: "For Employers",
                title: "Hire battle-tested talent.",
                desc: "Reach a curated pool of college student-athletes with the discipline, teamwork, and resilience that makes them top performers.",
                href: "/register?role=employer",
                cta: "Post Jobs & Hire",
              },
            ] as { icon: ReactNode; label: string; title: string; desc: string; href: string; cta: string }[]).map((path) => (
              <div key={path.label} className="card card--lg" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: "var(--accent)", marginBottom: 24 }}>{path.icon}</div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "#a1a1a1", marginBottom: 8 }}>
                  {path.label}
                </div>
                <h3 style={{ fontSize: 24, color: "var(--accent)", marginBottom: 16 }}>{path.title}</h3>
                <p style={{ color: "#a1a1a1", fontSize: 14, marginBottom: 32, flex: 1 }}>{path.desc}</p>
                <Link href={path.href} className="btn btn--secondary btn--full">
                  {path.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section" id="programs">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>Programs &amp; Resources</span></div>
            <h2 style={{ fontSize: 56, marginBottom: 24 }}>Everything,<br />in one place.</h2>
            <p style={{ fontSize: 18, color: "#c8c8c8" }}>
              Six programs designed for every stage of your transition. Free to explore,
              no account required.
            </p>
          </div>
          <div className="grid grid--md-3">
            {([
              {
                icon: <Handshake size={28} />,
                badge: "Most Popular",
                title: "1-on-1 Coaching & Mentorship",
                desc: "Get matched with a mentor who's been where you are. Former athletes turned professionals guide you through career exploration.",
                features: ["Personalized career mapping", "Bi-weekly 30-min sessions", "Goal tracking & accountability"],
                cta: "Find a Mentor",
                href: "/mentors",
              },
              {
                icon: <Wrench size={28} />,
                badge: "In-Person & Virtual",
                title: "Workshops",
                desc: "Hands-on skill-building sessions designed for athletes. From resume writing to personal branding, learn the tools you need.",
                features: ["Resume & LinkedIn optimization", "Personal branding for athletes", "Networking fundamentals"],
                cta: "Browse Workshops",
                href: "/programs",
              },
              {
                icon: <Video size={28} />,
                badge: "Free Access",
                title: "Webinars",
                desc: "Live and on-demand sessions featuring former athletes, industry experts, and career coaches sharing insights.",
                features: ["Monthly expert panels", "Q&A with former athletes", "On-demand replay library"],
                cta: "Watch Now",
                href: "/resources",
              },
              {
                icon: <Globe size={28} />,
                badge: "Upcoming",
                title: "Networking Events",
                desc: "Connect with fellow athletes in transition, employers who value athletic backgrounds, and professionals across industries.",
                features: ["Quarterly mixer events", "Industry-specific meetups", "Employer showcase nights"],
                cta: "See Events",
                href: "/programs",
              },
              {
                icon: <Briefcase size={28} />,
                badge: "Updated Weekly",
                title: "Job Opportunities",
                desc: "Access our curated job board featuring employers who actively seek the discipline, teamwork, and resilience that athletes bring.",
                features: ["Athlete-friendly employers", "Internships & entry-level roles", "Career-switcher positions"],
                cta: "View Listings",
                href: "/jobs",
              },
              {
                icon: <UserPlus size={28} />,
                badge: "Join Free",
                title: "Community Groups",
                desc: "Join a community of athletes navigating the same transition. Share experiences, get advice, build lasting connections.",
                features: ["Sport-specific groups", "Industry interest groups", "Regional chapters"],
                cta: "Join Community",
                href: "/programs",
              },
            ] as { icon: ReactNode; badge: string; title: string; desc: string; features: string[]; cta: string; href: string }[]).map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="card card--interactive card--lg"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 20 }}>
                  <div style={{ color: "var(--accent)" }}>{program.icon}</div>
                  <span className="badge badge--yellow">{program.badge}</span>
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 12 }}>{program.title}</h3>
                <p style={{ color: "#a1a1a1", fontSize: 14, marginBottom: 20 }}>{program.desc}</p>
                <ul className="list-clean" style={{ marginBottom: 24 }}>
                  {program.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="text-accent" style={{ fontSize: 14, fontWeight: 500 }}>
                  {program.cta} &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="section section--bg-elevated">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>See It In Action</span></div>
            <h2 style={{ fontSize: 56, marginBottom: 24 }}>See it before<br />you sign up.</h2>
            <p style={{ fontSize: 18, color: "#c8c8c8" }}>
              A glimpse of the mentors and jobs available to members.
            </p>
          </div>

          {/* Featured Mentors */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <h3 style={{ fontSize: 24 }}>Featured Mentors</h3>
                <span className="badge badge--yellow">Live preview</span>
              </div>
              <Link href="/mentors" className="text-accent" style={{ fontSize: 14 }}>View all &rarr;</Link>
            </div>
            <div className="grid grid--md-3">
              {[
                {
                  initials: "DC",
                  name: "David Chen",
                  role: "VP of Strategy",
                  org: "Goldman Sachs \u00B7 Former Football",
                  rating: "4.9",
                  bio: "Former D1 football player turned investment banker. Helping athletes translate competitive drive into financial careers.",
                  tags: ["Career Switching", "Networking"],
                  status: "Limited availability",
                  statusClass: "badge--yellow",
                  sessions: 87,
                },
                {
                  initials: "SO",
                  name: "Sarah Okonkwo",
                  role: "Senior Brand Manager",
                  org: "Nike \u00B7 Former Soccer",
                  rating: "4.8",
                  bio: "Ex-soccer captain now leading brand strategy. Passionate about helping female athletes build standout personal brands.",
                  tags: ["Personal Branding", "Marketing"],
                  status: "Accepting mentees",
                  statusClass: "badge--success",
                  sessions: 54,
                },
                {
                  initials: "JW",
                  name: "James Wright",
                  role: "Founder & CEO",
                  org: "PlaybookHQ \u00B7 Former Basketball",
                  rating: "4.7",
                  bio: "Former point guard, now building software for athletes. Open to mentoring on entrepreneurship and tech careers.",
                  tags: ["Entrepreneurship", "Tech Careers"],
                  status: "Accepting mentees",
                  statusClass: "badge--success",
                  sessions: 32,
                },
              ].map((mentor) => (
                <Link key={mentor.name} href="/mentors" className="card card--interactive">
                  <div style={{ display: "flex", alignItems: "start", gap: 16, marginBottom: 16 }}>
                    <div className="avatar avatar--lg">{mentor.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, color: "#c8c8c8" }}>{mentor.name}</div>
                      <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{mentor.role}</div>
                      <div style={{ fontSize: 12, color: "var(--text-subtle)" }}>{mentor.org}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>
                      &#9733; {mentor.rating}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      marginBottom: 16,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {mentor.bio}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {mentor.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 16,
                      borderTop: "1px solid #383838",
                    }}
                  >
                    <span className={`badge ${mentor.statusClass}`}>
                      &#9679; {mentor.status}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{mentor.sessions} sessions</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <h3 style={{ fontSize: 24 }}>Open Roles</h3>
                <span className="badge badge--yellow">Live preview</span>
              </div>
              <Link href="/jobs" className="text-accent" style={{ fontSize: 14 }}>View all &rarr;</Link>
            </div>
            <div className="grid grid--md-3">
              {[
                {
                  company: "Apex Capital",
                  title: "Investment Banking Analyst",
                  tags: ["Full-time", "New York, NY", "Finance"],
                  posted: "2 weeks ago",
                  salary: "$110-135k",
                  applicants: 47,
                },
                {
                  company: "Apex Capital",
                  title: "Wealth Management Associate",
                  tags: ["Full-time", "Chicago, IL", "Finance"],
                  posted: "9 days ago",
                  salary: "$75-95k",
                  applicants: 23,
                },
                {
                  company: "Bright Labs",
                  title: "Product Marketing Associate",
                  tags: ["Full-time", "Remote", "Marketing"],
                  posted: "7 days ago",
                  salary: "$80-100k",
                  applicants: 89,
                },
              ].map((job) => (
                <Link key={job.title} href="/jobs" className="card card--interactive">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16, marginBottom: 16 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: "var(--text-subtle)", marginBottom: 4 }}>{job.company}</div>
                      <div style={{ fontWeight: 600, color: "#c8c8c8" }}>{job.title}</div>
                    </div>
                    <span className="badge badge--yellow">&#9733; Athlete-friendly</span>
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
                      paddingTop: 16,
                      borderTop: "1px solid #383838",
                    }}
                  >
                    <span>{job.posted}</span>
                    <span>
                      <span className="text-accent" style={{ fontWeight: 500 }}>{job.salary}</span>
                      {" \u00B7 "}
                      {job.applicants} applicants
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>Athlete Stories</span></div>
            <h2 style={{ fontSize: 56 }}>
              From the<br />locker room<br />
              <span style={{ color: "var(--accent)" }}>to the boardroom.</span>
            </h2>
          </div>
          <div className="grid grid--md-3">
            {[
              {
                quote: "I had no idea what I wanted to do after my last game. My mentor walked me through every step \u2014 from resume to interview prep. Six months later I had three offers.",
                initials: "MJ",
                name: "Maya Johnson",
                sport: "Basketball \u00B7 UConn",
                now: "Now: Analyst at JPMorgan",
              },
              {
                quote: "The community alone was worth it. Talking to other athletes going through the same thing made the transition feel less terrifying. The job board landed me my role.",
                initials: "DC",
                name: "Devin Carter",
                sport: "Football \u00B7 Texas",
                now: "Now: Sales at Salesforce",
              },
              {
                quote: "I always thought my soccer career was \u2018just\u2019 a passion. Life After Sport helped me see how much it had taught me \u2014 and how to translate that into a real brand career.",
                initials: "EV",
                name: "Elena Vasquez",
                sport: "Soccer \u00B7 UCLA",
                now: "Now: Brand Strategist at Nike",
              },
            ].map((t) => (
              <div key={t.name} className="card card--lg" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                    fontSize: 64,
                    lineHeight: 1,
                    color: "rgba(250,204,21,0.4)",
                    marginBottom: 16,
                  }}
                >
                  &ldquo;
                </div>
                <p style={{ color: "#c8c8c8", marginBottom: 32, flex: 1 }}>{t.quote}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    paddingTop: 24,
                    borderTop: "1px solid #383838",
                  }}
                >
                  <div className="avatar avatar--md">{t.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#c8c8c8" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.sport}</div>
                    <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 2 }}>{t.now}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR ORGANIZATIONS */}
      <section className="section section--bg-elevated">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="eyebrow"><span>For Universities &amp; Employers</span></div>
            <h2 style={{ fontSize: 56 }}>Partner<br />with us.</h2>
          </div>
          <div className="grid grid--2">
            {[
              {
                label: "For Universities",
                title: "Equip your athletes for what\u2019s next.",
                desc: "Pilot Life After Sport with one team or roll it out school-wide. Your athletes get full platform access; you get reporting on engagement and outcomes.",
                features: [
                  "Dedicated success manager",
                  "Custom branded portal",
                  "Engagement & outcome reporting",
                  "Pilot program available",
                ],
                href: "/contact?type=university",
              },
              {
                label: "For Employers",
                title: "Hire athletes who win.",
                desc: "Reach a curated pool of college student-athletes. Talk to us about hiring partnerships, job postings, and sponsorship opportunities.",
                features: [
                  "Curated athlete database",
                  "Verified athletic backgrounds",
                  "Branded company profile",
                  "Custom hiring partnerships",
                ],
                href: "/contact?type=employer",
              },
            ].map((org) => (
              <div key={org.label} className="card card--xl">
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--accent)",
                    marginBottom: 16,
                  }}
                >
                  {org.label}
                </div>
                <h3 style={{ fontSize: 28, marginBottom: 16 }}>{org.title}</h3>
                <p style={{ color: "#a1a1a1", marginBottom: 24 }}>{org.desc}</p>
                <ul style={{ listStyle: "none", marginBottom: 32 }}>
                  {org.features.map((f, i) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        gap: 12,
                        marginBottom: i < org.features.length - 1 ? 12 : 0,
                        color: "#c8c8c8",
                        fontSize: 14,
                      }}
                    >
                      <span className="text-accent">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={org.href} className="btn btn--primary">
                  Book a Demo &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section section--bg-elevated">
        <div className="container">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <div className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }}>
              <span>Stay In The Loop</span>
            </div>
            <h2 style={{ fontSize: 48, marginBottom: 24 }}>The next play,<br />in your inbox.</h2>
            <p style={{ fontSize: 18, color: "#c8c8c8", marginBottom: 32 }}>
              Career tips, mentor spotlights, and new job postings &mdash; every other week. No spam.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, maxWidth: 480, margin: "0 auto" }}>
              <input
                type="email"
                className="input"
                placeholder="you@example.com"
                style={{ flex: 1, minWidth: 200 }}
              />
              <button className="btn btn--primary btn--md">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="grid grid--2" style={{ gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow"><span>Get In Touch</span></div>
              <h2 style={{ fontSize: 56, marginBottom: 24 }}>Questions?<br />Let&apos;s talk.</h2>
              <p style={{ fontSize: 18, color: "#c8c8c8", marginBottom: 32 }}>
                Whether you&apos;re an athlete, a school, or a company &mdash; we&apos;d love to hear from you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="text-accent">&#9993;</span>
                  <span style={{ color: "#c8c8c8" }}>hello@lifeaftsport.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)" }}>
                  <span className="text-accent">&#8599;</span>
                  <span>Response within 1 business day</span>
                </div>
              </div>
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input type="text" className="input" placeholder="First name" />
                <input type="text" className="input" placeholder="Last name" />
              </div>
              <input type="email" className="input" placeholder="Email" />
              <select className="select">
                <option value="">I am a...</option>
                <option>Student-athlete</option>
                <option>Potential mentor</option>
                <option>University / Athletic dept</option>
                <option>Employer</option>
                <option>Other</option>
              </select>
              <textarea className="textarea" rows={5} placeholder="What's on your mind?" />
              <button type="submit" className="btn btn--primary btn--lg btn--full">
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
