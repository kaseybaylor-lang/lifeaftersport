import { Navbar, Footer } from "@/components/layout";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__inner">
          <div className="eyebrow"><span>Legal</span></div>
          <h1 style={{ fontSize: 56, marginBottom: 24 }}>Terms of Service</h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)" }}>
            Last updated: April 29, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            Welcome to Life After Sport. By accessing or using our platform, website, and
            related services (collectively, the &ldquo;Service&rdquo;), you agree to be
            bound by these Terms of Service (&ldquo;Terms&rdquo;). Please read them
            carefully.
          </p>

          {/* 1. Eligibility */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            1. Eligibility
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            You must be at least 16 years of age to use the Service. By creating an
            account, you represent that you meet this age requirement. If you are under 18,
            you confirm that you have obtained parental or guardian consent. We reserve the
            right to terminate accounts that do not meet eligibility requirements.
          </p>

          {/* 2. Account Responsibilities */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            2. Account Responsibilities
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            You are responsible for maintaining the security of your account and all
            activity that occurs under it. When creating your account, you agree to:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Keep your login credentials secure and confidential</li>
            <li>Notify us immediately of any unauthorized access to your account</li>
            <li>Not share your account or transfer it to another person</li>
          </ul>

          {/* 3. Acceptable Use */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            3. Acceptable Use
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            You agree to use the Service in a lawful and respectful manner. You may not:
          </p>
          <ul className="list-clean" style={{ marginBottom: 48 }}>
            <li>Post false, misleading, or fraudulent information on your profile or in communications</li>
            <li>Harass, threaten, or abuse other users, mentors, or staff</li>
            <li>Use the platform to solicit, spam, or send unsolicited commercial messages</li>
            <li>Attempt to access another user&apos;s account or private information</li>
            <li>Scrape, crawl, or use automated tools to extract data from the platform</li>
            <li>Interfere with the operation or security of the Service</li>
          </ul>

          {/* 4. Content Ownership */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            4. Content Ownership
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
            You retain ownership of content you create and upload to the Service, including
            your profile information, resume, and messages. By posting content, you grant
            Life After Sport a non-exclusive, royalty-free license to display and distribute
            that content as needed to operate the platform.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            All platform content, including design, branding, and proprietary features,
            remains the property of Life After Sport and may not be copied or reproduced
            without written permission.
          </p>

          {/* 5. Termination */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            5. Termination
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            You may close your account at any time by contacting us or using the account
            settings. We reserve the right to suspend or terminate your account if you
            violate these Terms, engage in harmful behavior, or if required by law. Upon
            termination, your access to the Service will end and your data will be handled
            in accordance with our Privacy Policy.
          </p>

          {/* 6. Changes to Terms */}
          <h2 style={{ fontSize: 28, marginBottom: 20, color: "var(--text)" }}>
            6. Changes to Terms
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
            We may update these Terms from time to time. When we make material changes, we
            will notify you by email or through the platform. Your continued use of the
            Service after changes take effect constitutes acceptance of the updated Terms.
            We encourage you to review this page periodically.
          </p>

          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
            If you have questions about these Terms, contact us at{" "}
            <span className="text-accent">hello@lifeaftsport.com</span>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
