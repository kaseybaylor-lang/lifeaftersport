"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionHeading, Card, Badge, ScrollToTop, PageLoadAnimation } from "@/components/ui";

const involvementOptions = [
  {
    id: "signup",
    title: "Sign Up",
    icon: "✨",
    description: "Create your free account and start exploring career tools, mentors, and resources built for athletes.",
    cta: "Get Started",
    href: "/register",
  },
  {
    id: "partner",
    title: "Partner With Us",
    icon: "🤝",
    description: "Are you an organization, university, or employer that wants to support athletes in transition? Let's work together.",
    cta: "Become a Partner",
  },
  {
    id: "mentor",
    title: "Become a Mentor",
    icon: "🧭",
    description: "Share your experience and guide the next generation of athletes through their career transition. Give back to the community.",
    cta: "Apply to Mentor",
  },
  {
    id: "story",
    title: "Share Your Story",
    icon: "📖",
    description: "Your transition story could inspire someone else. Share how you navigated life after sport and help others feel less alone.",
    cta: "Tell Your Story",
  },
  {
    id: "contact",
    title: "Contact the Team",
    icon: "💬",
    description: "Have a question, idea, or just want to say hi? We'd love to hear from you. Our team responds within 48 hours.",
    cta: "Send a Message",
  },
];

type FormData = {
  name: string;
  email: string;
  type: string;
  sport: string;
  message: string;
};

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: "general",
    sport: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", type: "general", sport: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageLoadAnimation>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-20 bg-[var(--dark-navy)]">
          <div className="content-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline">Get Involved</Badge>
              <h1
                className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--neon-yellow)] uppercase tracking-[-0.02em] text-5xl md:text-6xl lg:text-7xl mt-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Join the
                <br />
                Movement
              </h1>
              <p
                className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mt-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Whether you&apos;re an athlete looking for support, a mentor wanting
                to give back, or an organization ready to partner — there&apos;s a
                place for you here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get Involved Cards */}
        <section className="py-20">
          <div className="content-container">
            <SectionHeading subtitle="Choose how you'd like to get involved">
              Ways to Connect
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
              {involvementOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={option.id === "contact" ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Card className="h-full flex flex-col text-center">
                    <span className="text-4xl mb-4">{option.icon}</span>
                    <h3
                      className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] uppercase text-xl mb-3"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {option.title}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm leading-relaxed flex-grow mb-6"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {option.description}
                    </p>
                    {option.href ? (
                      <motion.a
                        href={option.href}
                        className="w-full py-3 rounded-md font-bold uppercase tracking-tight text-sm bg-[var(--neon-yellow)] text-[var(--black)] block text-center cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option.cta}
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={() =>
                          setActiveSection(activeSection === option.id ? null : option.id)
                        }
                        className={`w-full py-3 rounded-md font-bold uppercase tracking-tight text-sm cursor-pointer transition-all duration-200 ${
                          activeSection === option.id
                            ? "bg-[var(--neon-yellow)] text-[var(--black)]"
                            : "border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] hover:bg-[var(--neon-yellow)] hover:text-[var(--black)]"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {activeSection === option.id ? "Close" : option.cta}
                      </motion.button>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-[var(--dark-navy)]" id="contact-form">
          <div className="content-container">
            <div className="max-w-2xl mx-auto">
              <SectionHeading subtitle="Fill out the form and we'll get back to you within 48 hours">
                Send Us a Message
              </SectionHeading>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-12 text-center"
                >
                  <Card className="py-12">
                    <span className="text-5xl mb-4 block">✅</span>
                    <h3
                      className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--neon-yellow)] uppercase text-2xl mb-2"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Thanks for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </Card>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-12 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[var(--black)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] focus:border-[var(--neon-yellow)] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        className="block font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[var(--black)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] focus:border-[var(--neon-yellow)] focus:outline-none transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        I&apos;m interested in
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--black)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] focus:border-[var(--neon-yellow)] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partner">Partnering With Life After Sport</option>
                        <option value="mentor">Becoming a Mentor</option>
                        <option value="story">Sharing My Story</option>
                        <option value="feedback">Giving Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Sport (optional)
                      </label>
                      <input
                        type="text"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--black)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] focus:border-[var(--neon-yellow)] focus:outline-none transition-colors"
                        placeholder="e.g. Soccer, Basketball"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm font-bold mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--black)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] focus:border-[var(--neon-yellow)] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-md font-bold uppercase tracking-tight text-lg bg-[var(--neon-yellow)] text-[var(--black)] cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </PageLoadAnimation>
  );
}
