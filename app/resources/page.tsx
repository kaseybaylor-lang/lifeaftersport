"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionHeading, Card, Badge, ScrollToTop, PageLoadAnimation } from "@/components/ui";

const categories = [
  {
    id: "career",
    name: "Career Transition",
    icon: "🧭",
    description: "Navigate the shift from athlete to professional with clarity and confidence.",
    resources: [
      {
        title: "Finding Your Career Identity Beyond Sport",
        type: "Article",
        readTime: "8 min read",
        description:
          "How to discover your strengths, values, and interests outside of athletics — and turn them into a career direction.",
      },
      {
        title: "Career Paths Popular Among Former Athletes",
        type: "Guide",
        readTime: "12 min read",
        description:
          "A breakdown of industries and roles where ex-athletes commonly thrive, from sales to coaching to tech.",
      },
      {
        title: "Your First 90 Days in a New Career",
        type: "Checklist",
        readTime: "5 min read",
        description:
          "A step-by-step guide for making a strong impression and building momentum in your first professional role.",
      },
    ],
  },
  {
    id: "resume",
    name: "Resume & Interview",
    icon: "📄",
    description: "Learn how to translate your athletic experience into professional impact.",
    resources: [
      {
        title: "Translating Athletic Achievements to Resume Bullets",
        type: "Template",
        readTime: "6 min read",
        description:
          "Turn team captaincy, discipline, and competitive stats into compelling resume language that employers understand.",
      },
      {
        title: "Interview Prep: Telling Your Athlete Story",
        type: "Guide",
        readTime: "10 min read",
        description:
          "How to use the STAR method to frame your sport experience as professional leadership, grit, and results.",
      },
      {
        title: "Cover Letter Templates for Career Changers",
        type: "Template",
        readTime: "4 min read",
        description:
          "Ready-to-customize cover letter frameworks that highlight transferable skills from athletics.",
      },
    ],
  },
  {
    id: "education",
    name: "Education Opportunities",
    icon: "🎓",
    description: "Explore programs, certifications, and continuing education paths.",
    resources: [
      {
        title: "Scholarships & Grants for Former Athletes",
        type: "Directory",
        readTime: "7 min read",
        description:
          "A curated list of financial aid opportunities specifically available to former student-athletes pursuing further education.",
      },
      {
        title: "Top Certifications That Don't Require a Degree",
        type: "Guide",
        readTime: "9 min read",
        description:
          "Industry-recognized certifications in tech, business, fitness, and more that can jumpstart your career.",
      },
      {
        title: "MBA Programs with Athlete-Friendly Schedules",
        type: "List",
        readTime: "5 min read",
        description:
          "Part-time and online MBA programs popular among athletes balancing career transition with education.",
      },
    ],
  },
  {
    id: "financial",
    name: "Financial Literacy",
    icon: "💰",
    description: "Build the financial knowledge to support your next chapter.",
    resources: [
      {
        title: "Budgeting After Your Last Scholarship Check",
        type: "Guide",
        readTime: "8 min read",
        description:
          "Practical steps to manage your finances when athletic stipends and scholarships end.",
      },
      {
        title: "Understanding Your First Full-Time Paycheck",
        type: "Article",
        readTime: "6 min read",
        description:
          "Taxes, benefits, 401(k), and health insurance — decoded for first-time professionals.",
      },
      {
        title: "Investing 101 for Young Professionals",
        type: "Course",
        readTime: "15 min",
        description:
          "A beginner-friendly introduction to saving, investing, and building long-term wealth.",
      },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health & Wellness",
    icon: "🧠",
    description: "Support your mental well-being during and after the transition.",
    resources: [
      {
        title: "The Emotional Side of Retiring from Sport",
        type: "Article",
        readTime: "10 min read",
        description:
          "Understanding grief, loss of identity, and the emotional journey that comes with leaving competitive athletics.",
      },
      {
        title: "Finding a Therapist Who Understands Athletes",
        type: "Directory",
        readTime: "4 min read",
        description:
          "A guide to locating mental health professionals who specialize in working with current and former athletes.",
      },
      {
        title: "Daily Habits for Mental Wellness After Sport",
        type: "Checklist",
        readTime: "5 min read",
        description:
          "Practical routines — journaling, movement, and mindfulness — to maintain mental health during transition.",
      },
    ],
  },
  {
    id: "identity",
    name: "Identity & Purpose",
    icon: "🔥",
    description: "Rediscover who you are beyond the jersey number.",
    resources: [
      {
        title: "You Are More Than an Athlete",
        type: "Article",
        readTime: "7 min read",
        description:
          "Exploring the identity crisis many athletes face and how to build a sense of self beyond sport.",
      },
      {
        title: "Purpose Mapping Exercise",
        type: "Worksheet",
        readTime: "20 min",
        description:
          "A guided exercise to help you identify what drives you, what you value, and where you want to make an impact.",
      },
      {
        title: "Stories of Reinvention: Athletes Who Pivoted",
        type: "Video Series",
        readTime: "30 min",
        description:
          "Inspiring short films featuring former athletes who built fulfilling careers and lives after sport.",
      },
    ],
  },
];

const typeBadgeColor: Record<string, string> = {
  Article: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Guide: "bg-green-500/20 text-green-400 border-green-500/30",
  Template: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Checklist: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Directory: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  List: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Course: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Worksheet: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "Video Series": "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("career");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

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
              <Badge variant="outline">Resources Hub</Badge>
              <h1
                className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--neon-yellow)] uppercase tracking-[-0.02em] text-5xl md:text-6xl lg:text-7xl mt-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Level Up Your
                <br />
                Next Chapter
              </h1>
              <p
                className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mt-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Guides, templates, and tools to help you navigate every aspect
                of life after sport — from careers and finances to mental health
                and identity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12 border-b border-[var(--text-secondary)]/10">
          <div className="content-container">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer border ${
                    activeCategory === category.id
                      ? "bg-[var(--neon-yellow)] text-[var(--black)] border-[var(--neon-yellow)]"
                      : "bg-transparent text-[var(--text-secondary)] border-[var(--text-secondary)]/20 hover:border-[var(--neon-yellow)]/40 hover:text-[var(--text-primary)]"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Content */}
        <section className="py-20">
          <div className="content-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <span className="text-5xl mb-4 block">{currentCategory.icon}</span>
                  <h2
                    className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] uppercase text-3xl md:text-4xl"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {currentCategory.name}
                  </h2>
                  <p
                    className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-base md:text-lg mt-3 max-w-xl mx-auto"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {currentCategory.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {currentCategory.resources.map((resource, index) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`inline-block text-xs uppercase tracking-wide font-bold rounded-full px-3 py-1 border ${typeBadgeColor[resource.type] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}
                          >
                            {resource.type}
                          </span>
                          <span
                            className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-xs"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            {resource.readTime}
                          </span>
                        </div>
                        <h3
                          className="font-[family-name:var(--font-oswald)] font-[700] text-[var(--text-primary)] text-lg mb-3"
                          style={{ fontFamily: "var(--font-oswald)" }}
                        >
                          {resource.title}
                        </h3>
                        <p
                          className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm leading-relaxed flex-grow"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {resource.description}
                        </p>
                        <motion.button
                          className="mt-6 w-full py-2.5 rounded-md font-bold uppercase tracking-tight text-sm border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] hover:bg-[var(--neon-yellow)] hover:text-[var(--black)] transition-all duration-200 cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Read More
                        </motion.button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--dark-navy)]">
          <div className="content-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--neon-yellow)] uppercase text-3xl md:text-4xl lg:text-5xl mb-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Can&apos;t Find What You Need?
              </h2>
              <p
                className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We&apos;re always adding new resources. Let us know what topics
                you&apos;d like to see covered.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 rounded-md font-bold uppercase tracking-tight bg-[var(--neon-yellow)] text-[var(--black)] hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Resource
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </PageLoadAnimation>
  );
}
