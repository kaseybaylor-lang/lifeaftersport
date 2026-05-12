import { Navbar, Footer } from "@/components/layout";
import Image from "next/image";

const founders = [
  {
    name: "Ella Hwang",
    role: "Chief Executive Officer",
    initials: "EH",
    photo: "/founder-ella.jpg",
    bio: "As a Division I athlete, Ella experienced firsthand the pressure of tying identity, purpose, and self-worth to sports. Watching teammates struggle with uncertainty beyond competition became the spark behind Life After Sport. She leads the company's vision and strategy, driving the mission to bridge the gap between athletic identity and professional purpose.",
    linkedin: "https://www.linkedin.com/in/ella-hwang-408405201/",
  },
  {
    name: "Kasey Baylor",
    role: "Chief Technology Officer",
    initials: "KB",
    photo: "/founder-kasey.jpg",
    bio: "Kasey brings a deep understanding of the challenges athletes face when competition ends. As CTO, she architects the platform that powers Life After Sport — building the tools, systems, and infrastructure that connect athletes with mentors, jobs, and community at scale.",
    linkedin: "https://www.linkedin.com/in/kasey-baylor-37114023a/",
  },
  {
    name: "Kenny Van",
    role: "Chief Operating Officer",
    initials: "KV",
    photo: "/founder-kenny.jpg",
    bio: "Kenny drives the day-to-day operations that bring Life After Sport's mission to life. From partnerships to growth strategy, he ensures the platform delivers a seamless experience for every athlete navigating their transition — translating vision into execution at every stage.",
    linkedin: "https://www.linkedin.com/in/chuongvan/",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow"><span>Our Story</span></div>
          <h1>Built by athletes.<br />For athletes.</h1>
          <p style={{ maxWidth: 600 }}>
            Life After Sport was founded by classmates with one shared goal — creating a
            better future for athletes beyond the game.
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 18, color: "#c8c8c8", lineHeight: 1.85, marginBottom: 28 }}>
            Life After Sports was founded by classmates Ella Hwang, Kasey Baylor and Kenny Van
            with one shared goal: creating a better future for athletes beyond the game.
          </p>
          <p style={{ fontSize: 18, color: "#c8c8c8", lineHeight: 1.85, marginBottom: 28 }}>
            As a Division I athlete, Ella experienced firsthand the pressure of tying identity,
            purpose, and self-worth to sports from a young age. Throughout college athletics,
            she saw teammates struggle with uncertainty about their futures, a lack of guidance
            outside of competition, and difficulty navigating life beyond their sport. While some
            athletes have access to strong networks and opportunities, many do not — revealing a
            nationwide gap in support that often goes unspoken.
          </p>
          <p style={{ fontSize: 18, color: "#c8c8c8", lineHeight: 1.85, marginBottom: 28 }}>
            That experience became the foundation for Life After Sports. Together, the founders
            recognized that many university career centers and athlete support systems fail to
            fully address the unique transition athletes face when competition ends. By combining
            Ella&apos;s lived experience as a student-athlete with Kasey and Kenny&apos;s shared
            understanding of the issue, the team created Life After Sports to build a stronger
            sense of community, mentorship, and direction for athletes preparing for their next
            chapter.
          </p>
          <p style={{ fontSize: 20, color: "var(--accent)", lineHeight: 1.75, fontWeight: 500, borderLeft: "3px solid var(--accent)", paddingLeft: 24 }}>
            Life After Sports exists to remind athletes that their value extends far beyond the
            field, court, or track — and that the skills developed through sports can become the
            foundation for lifelong success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: 32 }}>
            {/* Mission */}
            <div className="card card--lg">
              <div className="eyebrow" style={{ marginBottom: 16 }}><span>Mission Statement</span></div>
              <h2 style={{ fontSize: 34, marginBottom: 24, lineHeight: 1.15 }}>Why We Exist</h2>
              <p style={{ fontSize: 16, color: "#c8c8c8", lineHeight: 1.8 }}>
                At Life After Sports, our mission is to empower athletes to confidently navigate
                life beyond competition by providing mentorship, career development, and a
                supportive community that values identity beyond the game. We are committed to
                helping athletes translate the discipline, leadership, and resilience built
                through sports into meaningful opportunities for their future.
              </p>
            </div>

            {/* Vision */}
            <div className="card card--lg">
              <div className="eyebrow" style={{ marginBottom: 16 }}><span>Vision Statement</span></div>
              <h2 style={{ fontSize: 34, marginBottom: 24, lineHeight: 1.15 }}>Where We&apos;re Going</h2>
              <p style={{ fontSize: 16, color: "#c8c8c8", lineHeight: 1.8 }}>
                We envision a future where every athlete feels prepared, supported, and inspired
                in their transition beyond sports — recognizing that the end of a playing career
                is not a loss of identity, but the beginning of a new journey of purpose, impact,
                and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}><span>The Team</span></div>
            <h2 style={{ fontSize: 48 }}>Meet the Founders</h2>
          </div>

          <div className="grid grid--md-3" style={{ gap: 32 }}>
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="card card--lg"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
              >
                {/* Photo — fixed square size for all */}
                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: 24,
                    border: "2px solid #2a2a2a",
                    flexShrink: 0,
                    position: "relative",
                    background: "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      quality={100}
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                        fontSize: 48,
                        color: "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      {founder.initials}
                    </span>
                  )}
                </div>

                <div style={{ fontWeight: 700, fontSize: 20, color: "#c8c8c8", marginBottom: 6 }}>
                  {founder.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 20,
                  }}
                >
                  {founder.role}
                </div>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 24 }}>
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--sm"
                  style={{ marginTop: "auto" }}
                >
                  LinkedIn &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
