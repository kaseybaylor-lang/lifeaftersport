import { Navbar, Footer } from "@/components/layout";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow"><span>About Us</span></div>
          <h1 style={{ fontSize: 56, marginBottom: 24 }}>
            Built by athletes,<br />for athletes.
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 640, lineHeight: 1.6 }}>
            Life After Sport was born from a simple observation: the transition out of
            competitive sports is one of the hardest things an athlete will ever face.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: 40, marginBottom: 32 }}>Our story</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 24 }}>
            In 2025, three former college athletes realized something that had been hiding in
            plain sight: there was no centralized platform helping student-athletes navigate
            the transition from competitive sport to professional life. Career centers
            offered generic advice. Mentorship was informal and inconsistent. Job boards
            didn&apos;t understand what made athletes different.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 24 }}>
            So we built Life After Sport &mdash; a platform designed from the ground up to
            bridge that gap. We combined mentorship from former athletes who&apos;ve already
            made the leap, a curated job board featuring employers who genuinely value
            athletic backgrounds, and a community where athletes can share experiences and
            support each other through the transition.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
            What started as a conversation between teammates has grown into a platform
            serving student-athletes across the country. We&apos;re building the resource we
            wish we&apos;d had &mdash; and we&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ borderTop: "1px solid #1f1f1f" }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 64 }}>
            <h2 style={{ fontSize: 40, marginBottom: 16 }}>The team behind it</h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)" }}>
              Three former athletes building the platform they wish they&apos;d had.
            </p>
          </div>
          <div className="grid grid--3">
            {[
              {
                initials: "KB",
                name: "Kasey",
                role: "Co-founder",
                bio: "Former swimmer turned product builder. Kasey leads product strategy and design, drawing on years of competitive swimming to build tools that actually help athletes transition.",
              },
              {
                initials: "EB",
                name: "Ella",
                role: "Co-founder",
                bio: "Former soccer player and partnerships lead. Ella connects Life After Sport with universities and employers who believe in the power of athletic backgrounds.",
              },
              {
                initials: "KM",
                name: "Kenny",
                role: "Co-founder",
                bio: "Former track athlete and engineer. Kenny builds the platform from the ground up, bringing the same discipline from the track to the codebase.",
              },
            ].map((member) => (
              <div key={member.name} className="card card--lg" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div className="avatar avatar--xl" style={{ marginBottom: 24 }}>
                  {member.initials}
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 4 }}>{member.name}</h3>
                <p style={{ fontSize: 14, color: "var(--accent)", marginBottom: 16 }}>{member.role}</p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ borderTop: "1px solid #1f1f1f" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="card card--lg" style={{ textAlign: "center", padding: "64px 48px" }}>
            <div className="eyebrow" style={{ display: "inline-flex", justifyContent: "center", marginBottom: 24 }}>
              <span>Our Mission</span>
            </div>
            <p style={{ fontSize: 24, lineHeight: 1.6, color: "var(--text)" }}>
              &ldquo;To make every athlete&apos;s transition out of sport intentional,
              supported, and full of opportunity &mdash; so no one has to figure it out
              alone.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
