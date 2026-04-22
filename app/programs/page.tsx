"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionHeading, Card, ScrollToTop, PageLoadAnimation } from "@/components/ui";

const programs = [
  {
    title: "1-on-1 Coaching & Mentorship",
    description:
      "Get matched with a mentor who's been where you are. Former athletes turned professionals guide you through career exploration, goal-setting, and your first steps into life after sport.",
    icon: "🤝",
    badge: "Most Popular",
    details: ["Personalized career mapping", "Bi-weekly 30-min sessions", "Goal tracking & accountability"],
  },
  {
    title: "Workshops",
    description:
      "Hands-on skill-building sessions designed for athletes. From resume writing to personal branding, learn the tools you need to compete in the professional world.",
    icon: "🛠️",
    badge: "In-Person & Virtual",
    details: ["Resume & LinkedIn optimization", "Personal branding for athletes", "Networking fundamentals"],
  },
  {
    title: "Webinars",
    description:
      "Live and on-demand sessions featuring former athletes, industry experts, and career coaches sharing insights on thriving beyond the game.",
    icon: "🎥",
    badge: "Free Access",
    details: ["Monthly expert panels", "Q&A with former athletes", "On-demand replay library"],
  },
  {
    title: "Networking Events",
    description:
      "Connect with fellow athletes in transition, employers who value athletic backgrounds, and professionals across industries at our curated events.",
    icon: "🌐",
    badge: "Upcoming",
    details: ["Quarterly mixer events", "Industry-specific meetups", "Employer showcase nights"],
  },
  {
    title: "Job Opportunities",
    description:
      "Access our curated job board featuring employers who actively seek the discipline, teamwork, and resilience that athletes bring to the table.",
    icon: "💼",
    badge: "Updated Weekly",
    details: ["Athlete-friendly employers", "Internships & entry-level roles", "Career-switcher positions"],
    href: "/jobs",
  },
  {
    title: "Community Groups",
    description:
      "Join a community of athletes navigating the same transition. Share experiences, get advice, and build lasting connections with people who understand your journey.",
    icon: "👥",
    badge: "Join Free",
    details: ["Sport-specific groups", "Industry interest groups", "Regional chapters"],
  },
];

const upcomingEvents = [
  {
    title: "Resume Workshop: Translating Athletic Experience",
    date: "May 8, 2026",
    time: "6:00 PM EST",
    type: "Workshop",
    location: "Virtual",
  },
  {
    title: "Panel: Life After College Athletics",
    date: "May 15, 2026",
    time: "7:00 PM EST",
    type: "Webinar",
    location: "Virtual",
  },
  {
    title: "Spring Networking Mixer",
    date: "May 22, 2026",
    time: "5:30 PM EST",
    type: "Networking",
    location: "Atlanta, GA",
  },
  {
    title: "Financial Literacy for Athletes",
    date: "June 3, 2026",
    time: "12:00 PM EST",
    type: "Webinar",
    location: "Virtual",
  },
];

const typeBadgeColor: Record<string, string> = {
  Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Webinar: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Networking: "bg-green-500/20 text-green-400 border-green-500/30",
};

export default function ProgramsPage() {
  return (
    <PageLoadAnimation>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-[var(--dark-navy)]">
          <div className="content-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--neon-yellow)] uppercase tracking-[-0.02em] text-5xl md:text-6xl lg:text-7xl mt-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Your Playbook for
                <br />
                What&apos;s Next
              </h1>
              <p
                className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mt-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                From mentorship to networking, we offer the programs and resources
                to help you transition from athlete to professional with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="content-container">
            <SectionHeading subtitle="Everything you need to build your career after sport">
              Our Programs
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{program.icon}</span>
                      <span className="text-xs uppercase tracking-wide text-[var(--neon-yellow)] border border-[var(--neon-yellow)]/30 rounded-full px-3 py-1">
                        {program.badge}
                      </span>
                    </div>
                    <h3
                      className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] uppercase text-xl mb-3"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {program.title}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {program.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {program.details.map((detail) => (
                        <li
                          key={detail}
                          className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-sm flex items-center gap-2"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          <span className="text-[var(--neon-yellow)] text-xs">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="w-full py-3 rounded-md font-bold uppercase tracking-tight text-sm border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] hover:bg-[var(--neon-yellow)] hover:text-[var(--black)] transition-all duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {program.href ? "View Listings" : "Learn More"}
                    </motion.button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-[var(--dark-navy)]">
          <div className="content-container">
            <SectionHeading subtitle="Register now — spots fill up fast">
              Upcoming Events
            </SectionHeading>
            <div className="mt-16 space-y-4 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block text-xs uppercase tracking-wide font-bold rounded-full px-3 py-1 border ${typeBadgeColor[event.type]}`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h4
                        className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] text-lg"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {event.title}
                      </h4>
                      <p
                        className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm mt-1"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {event.date} · {event.time} · {event.location}
                      </p>
                    </div>
                    <motion.button
                      className="flex-shrink-0 px-5 py-2 rounded-md font-bold uppercase tracking-tight text-sm bg-[var(--neon-yellow)] text-[var(--black)] cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Register
                    </motion.button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </PageLoadAnimation>
  );
}
