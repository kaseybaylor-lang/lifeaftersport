import { Navbar, Footer } from "@/components/layout";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow"><span>Legal</span></div>
          <h1 style={{ fontSize: 56, marginBottom: 24 }}>Privacy Policy</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)" }}>
            Last updated: April 29, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            Life After Sport (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            is committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, and share information when you use our platform, website, and
            related services (collectively, the &ldquo;Service&rdquo;).
          </p>

          {/* Information We Collect */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            Information We Collect
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            We collect information you provide directly, as well as information generated
            through your use of the Service:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>Account information such as your name, email address, sport, university, and graduation year</li>
            <li>Profile information including your bio, skills, career interests, and resume</li>
            <li>Communications you send through the platform, including messages to mentors</li>
            <li>Usage data such as pages visited, features used, and session duration</li>
            <li>Device and browser information, including IP address, for security and analytics</li>
          </ul>

          {/* How We Use Your Information */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            How We Use Your Information
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            We use the information we collect to operate, improve, and personalize the
            Service:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>To create and manage your account and profile</li>
            <li>To match you with mentors, jobs, and resources relevant to your background</li>
            <li>To communicate with you about your account, updates, and new features</li>
            <li>To analyze usage patterns and improve the platform experience</li>
            <li>To detect and prevent fraud, abuse, and security issues</li>
          </ul>

          {/* Information Sharing */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            Information Sharing
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            We do not sell your personal information. We may share your information in the
            following limited circumstances:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>With mentors or employers when you choose to connect with them through the platform</li>
            <li>With service providers who help us operate the platform (hosting, analytics, email delivery)</li>
            <li>When required by law, such as in response to a subpoena or legal process</li>
            <li>In connection with a merger, acquisition, or sale of assets, with notice to you</li>
          </ul>

          {/* Your Rights */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            Your Rights
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            You have control over your personal information. Depending on your location,
            you may have the right to:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>Access, correct, or delete your personal information at any time</li>
            <li>Export your data in a portable format</li>
            <li>Opt out of non-essential communications and marketing emails</li>
            <li>Request information about how your data is used and shared</li>
            <li>Close your account, which will remove your profile and associated data</li>
          </ul>

          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
            If you have questions about this Privacy Policy or your data, contact us at{" "}
            <span className="text-accent">hello@lifeaftsport.com</span>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
