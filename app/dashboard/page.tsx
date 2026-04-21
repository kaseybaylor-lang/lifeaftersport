"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { getStoredQuizResults } from "@/lib/quiz";
import { getSavedJobs } from "@/lib/jobs";
import { getConnectedMentors, getUnreadCount } from "@/lib/mentors";
import Link from "next/link";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [quizResults, setQuizResults] = useState<any>(null);
  const [savedJobsCount, setSavedJobsCount] = useState(0);
  const [connectedMentorsCount, setConnectedMentorsCount] = useState(0);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const [profileCompletion, setProfileCompletion] = useState(0);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  // Load dashboard data
  useEffect(() => {
    if (typeof window !== "undefined" && user) {
      const results = getStoredQuizResults();
      setQuizResults(results);

      const savedJobs = getSavedJobs();
      setSavedJobsCount(savedJobs.length);

      const connected = getConnectedMentors();
      setConnectedMentorsCount(connected.length);

      const unread = getUnreadCount();
      setUnreadMessagesCount(unread);

      // Calculate profile completion
      let completion = 40; // Base (has account)
      if (results) completion += 30; // Completed quiz
      if (savedJobs.length > 0) completion += 15; // Saved jobs
      if (connected.length > 0) completion += 15; // Connected mentors

      setProfileCompletion(completion);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--black)] flex items-center justify-center">
        <div className="text-[var(--neon-yellow)] text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const quickActions = [
    {
      title: "Career Quiz",
      description: quizResults
        ? "Retake your career assessment"
        : "Discover your ideal career path",
      href: "/quiz",
      icon: "📋",
      variant: quizResults ? "outline" : "primary",
    },
    {
      title: "Browse Jobs",
      description: `${savedJobsCount} saved ${savedJobsCount === 1 ? 'job' : 'jobs'}`,
      href: "/jobs",
      icon: "💼",
      variant: "outline",
    },
    {
      title: "Find Mentors",
      description: `${connectedMentorsCount} ${connectedMentorsCount === 1 ? 'connection' : 'connections'}`,
      href: "/mentors",
      icon: "👥",
      variant: "outline",
    },
    {
      title: "Messages",
      description:
        unreadMessagesCount > 0
          ? `${unreadMessagesCount} unread ${unreadMessagesCount === 1 ? 'message' : 'messages'}`
          : "No new messages",
      href: "/messages",
      icon: "💬",
      variant: "outline",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] pt-28 pb-20">
      <div className="content-container">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3">
            Welcome back, <span className="text-[var(--neon-yellow)]">{user.name.split(' ')[0]}</span>!
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)]">
            Former {user.sport} athlete • Class of {user.graduationYear}
          </p>
        </motion.div>

        {/* Profile Completion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Profile Completion
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {profileCompletion < 100
                  ? "Complete your profile to unlock all features"
                  : "Your profile is complete!"}
              </p>
            </div>
            <div className="text-3xl font-heading font-bold text-[var(--neon-yellow)]">
              {profileCompletion}%
            </div>
          </div>
          <div className="h-3 bg-[var(--black)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--neon-yellow)]"
              initial={{ width: 0 }}
              animate={{ width: `${profileCompletion}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          {profileCompletion < 100 && (
            <div className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              {!quizResults && (
                <p>• Take the career quiz to boost your profile (+30%)</p>
              )}
              {savedJobsCount === 0 && (
                <p>• Save your first job to increase completion (+15%)</p>
              )}
              {connectedMentorsCount === 0 && (
                <p>• Connect with a mentor to improve your profile (+15%)</p>
              )}
            </div>
          )}
        </motion.div>

        {/* Career Roadmap Summary */}
        {quizResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[var(--dark-navy)] to-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/30 text-[var(--neon-yellow)] text-xs font-semibold rounded-full mb-3">
                  YOUR CAREER PATH
                </span>
                <h2 className="text-3xl font-heading font-bold text-white mb-2">
                  {quizResults.roadmap.path}
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Based on your {quizResults.sport} background and interests
                </p>
              </div>
              <Link href="/quiz">
                <button className="px-4 py-2 border border-[var(--neon-yellow)]/40 text-[var(--neon-yellow)] rounded-lg text-sm hover:bg-[var(--neon-yellow)]/10 transition-all">
                  Retake Quiz
                </button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-3">
                  YOUR STRENGTHS
                </h3>
                <div className="space-y-2">
                  {quizResults.strengths.map((strength: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[var(--text-primary)]"
                    >
                      <span className="text-[var(--neon-yellow)]">✓</span>
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-3">
                  SUGGESTED ROLES
                </h3>
                <div className="space-y-2">
                  {quizResults.roadmap.titles.map((title: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[var(--text-primary)]"
                    >
                      <span className="text-[var(--neon-yellow)]">→</span>
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link href={action.href}>
                  <div
                    className={`h-full p-10 rounded-2xl border transition-all cursor-pointer min-h-[200px] flex flex-col justify-center ${
                      action.variant === "primary"
                        ? "bg-[var(--neon-yellow)]/10 border-[var(--neon-yellow)] hover:bg-[var(--neon-yellow)]/20"
                        : "bg-[var(--dark-navy)]/50 border-[var(--neon-yellow)]/20 hover:border-[var(--neon-yellow)]/40"
                    }`}
                  >
                    <div className="text-5xl mb-5">{action.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {action.title}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)]">
                      {action.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        {quizResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Your Next Steps
            </h2>
            <div className="space-y-4">
              {quizResults.roadmap.steps.slice(0, 3).map((step: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--neon-yellow)]/20 border border-[var(--neon-yellow)]/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[var(--neon-yellow)] font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-[var(--text-primary)] leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/quiz">
              <button className="mt-6 px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all">
                View Full Roadmap
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
