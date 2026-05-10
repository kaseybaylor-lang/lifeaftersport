import { Navbar, Footer } from "@/components/layout";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ── Page header ── */}
      <header className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow">
            <span>Contact</span>
          </div>
          <h1>Let&apos;s talk.</h1>
          <p>
            Have a question, idea, or just want to say hello? We&apos;d love to
            hear from you.
          </p>
        </div>
      </header>

      {/* ── Two-column layout ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "start" }}>
            {/* Left column */}
            <div>
              <h2 style={{ fontSize: 32, marginBottom: 16 }}>Questions?</h2>
              <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
                Whether you&apos;re an athlete looking for support, a mentor wanting
                to give back, or an organization ready to partner — reach out and
                we&apos;ll point you in the right direction.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span
                  className="text-muted"
                  style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}
                >
                  Email us
                </span>
                <a
                  href="mailto:hello@lifeaftsport.com"
                  className="text-accent"
                  style={{ fontSize: 18, fontWeight: 500 }}
                >
                  hello@lifeaftsport.com
                </a>
              </div>

              <p className="text-subtle" style={{ fontSize: 14 }}>
                We typically respond within 48 hours.
              </p>
            </div>

            {/* Right column — form */}
            <div className="card card--lg">
              <form>
                <div className="grid grid--2" style={{ marginBottom: 20 }}>
                  <div>
                    <label className="field-label">First name</label>
                    <input className="input" type="text" placeholder="Jane" required />
                  </div>
                  <div>
                    <label className="field-label">Last name</label>
                    <input className="input" type="text" placeholder="Doe" required />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label className="field-label">Email</label>
                  <input className="input" type="email" placeholder="you@email.com" required />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label className="field-label">I am a&hellip;</label>
                  <select className="select">
                    <option value="">Select one</option>
                    <option value="athlete">Current / Former Athlete</option>
                    <option value="mentor">Mentor</option>
                    <option value="employer">Employer / Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="field-label">Message</label>
                  <textarea
                    className="textarea"
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg btn--full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
