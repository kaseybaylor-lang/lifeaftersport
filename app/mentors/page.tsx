"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import {
  mentors as allMentors,
  filterMentors,
  connectWithMentor,
  disconnectFromMentor,
  isConnectedWithMentor,
  sendMessage,
  type Mentor,
} from "@/lib/mentors";
import Link from "next/link";

export default function MentorsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sportFilter, setSportFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [connectedMentorIds, setConnectedMentorIds] = useState<string[]>([]);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  // Load connected mentors from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const connected = localStorage.getItem("lifeaftersport_connected_mentors");
      setConnectedMentorIds(connected ? JSON.parse(connected) : []);
    }
  }, []);

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

  const filteredMentors = filterMentors(allMentors, {
    sport: sportFilter,
    industry: industryFilter,
  });

  const sports = Array.from(new Set(allMentors.map((m) => m.formerSport)));
  const industries = Array.from(new Set(allMentors.map((m) => m.industry)));

  const toggleConnection = (mentorId: string) => {
    if (connectedMentorIds.includes(mentorId)) {
      disconnectFromMentor(mentorId);
      setConnectedMentorIds(connectedMentorIds.filter((id) => id !== mentorId));
    } else {
      connectWithMentor(mentorId);
      setConnectedMentorIds([...connectedMentorIds, mentorId]);
    }
  };

  const handleSendMessage = () => {
    if (!selectedMentor || !messageSubject || !messageContent) return;

    sendMessage(selectedMentor.id, selectedMentor.name, messageSubject, messageContent);
    setShowMessageForm(false);
    setMessageSubject("");
    setMessageContent("");
    alert("Message sent! Check your inbox for a response.");
  };

  return (
    <div className="min-h-screen bg-[var(--black)] pt-24 pb-16">
      <div className="content-container">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <div className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-4 inline-block cursor-pointer hover:underline">
              ← BACK TO HOME
            </div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Mentor Network
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Connect with {filteredMentors.length} former student-athletes who've successfully
            transitioned to their careers
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sport Filter */}
            <select
              value={sportFilter}
              onChange={(e) => setSportFilter(e.target.value)}
              className="px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)]"
            >
              <option value="all">All Sports</option>
              {sports.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>

            {/* Industry Filter */}
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)]"
            >
              <option value="all">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 hover:border-[var(--neon-yellow)]/40 transition-all cursor-pointer"
              onClick={() => setSelectedMentor(mentor)}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-[var(--neon-yellow)]/20 flex items-center justify-center text-[var(--neon-yellow)] text-3xl font-bold mb-4">
                {mentor.name.charAt(0)}
              </div>

              {/* Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-heading font-bold text-white">
                    {mentor.name}
                  </h3>
                  {mentor.verified && (
                    <span className="text-[var(--neon-yellow)]" title="Verified Mentor">
                      ✓
                    </span>
                  )}
                </div>
                <p className="text-[var(--text-primary)] text-sm mb-1">
                  {mentor.currentRole} at {mentor.company}
                </p>
                <p className="text-[var(--text-secondary)] text-sm">
                  Former {mentor.formerSport} athlete
                </p>
              </div>

              {/* Industry Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/30 text-[var(--neon-yellow)] text-xs font-semibold rounded-full">
                  {mentor.industry}
                </span>
              </div>

              {/* Connect Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleConnection(mentor.id);
                }}
                className={`w-full px-4 py-2 rounded-lg font-semibold transition-all ${
                  connectedMentorIds.includes(mentor.id)
                    ? "bg-[var(--neon-yellow)]/20 border border-[var(--neon-yellow)] text-[var(--neon-yellow)]"
                    : "bg-[var(--neon-yellow)] text-[var(--black)] hover:shadow-lg"
                }`}
              >
                {connectedMentorIds.includes(mentor.id) ? "Connected ✓" : "Connect"}
              </button>
            </motion.div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)] text-lg">
              No mentors found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>

      {/* Mentor Profile Modal */}
      <AnimatePresence>
        {selectedMentor && !showMessageForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMentor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[var(--dark-navy)] border border-[var(--neon-yellow)]/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMentor(null)}
                className="float-right text-white/40 hover:text-white text-2xl"
              >
                ✕
              </button>

              {/* Profile Header */}
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full bg-[var(--neon-yellow)]/20 flex items-center justify-center text-[var(--neon-yellow)] text-4xl font-bold mb-4">
                  {selectedMentor.name.charAt(0)}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-heading font-bold text-white">
                    {selectedMentor.name}
                  </h2>
                  {selectedMentor.verified && (
                    <span className="px-3 py-1 bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/30 text-[var(--neon-yellow)] text-xs font-semibold rounded-full">
                      Verified Mentor
                    </span>
                  )}
                </div>
                <p className="text-xl text-[var(--text-primary)] font-semibold mb-2">
                  {selectedMentor.currentRole} at {selectedMentor.company}
                </p>
                <p className="text-[var(--text-secondary)]">
                  Former {selectedMentor.formerSport} athlete • {selectedMentor.industry}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-3">
                  ABOUT
                </h3>
                <p className="text-[var(--text-primary)] leading-relaxed">
                  {selectedMentor.bio}
                </p>
              </div>

              {/* Career Journey */}
              <div className="mb-8">
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-4">
                  CAREER JOURNEY
                </h3>
                <div className="space-y-3">
                  {selectedMentor.careerJourney.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--neon-yellow)]/20 border border-[var(--neon-yellow)]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--neon-yellow)]" />
                      </div>
                      <p className="text-[var(--text-primary)] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleConnection(selectedMentor.id);
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    connectedMentorIds.includes(selectedMentor.id)
                      ? "border border-[var(--neon-yellow)]/40 text-[var(--neon-yellow)]"
                      : "bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)] text-[var(--neon-yellow)]"
                  }`}
                >
                  {connectedMentorIds.includes(selectedMentor.id)
                    ? "Connected ✓"
                    : "Connect"}
                </button>
                <button
                  onClick={() => setShowMessageForm(true)}
                  className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Message Form Modal */}
        {selectedMentor && showMessageForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowMessageForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[var(--dark-navy)] border border-[var(--neon-yellow)]/30 rounded-2xl p-8 max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                Send Message to {selectedMentor.name}
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={messageSubject}
                    onChange={(e) => setMessageSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)]"
                    placeholder="Introduction from a fellow athlete"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)] resize-none"
                    placeholder="Hi! I'm a current student-athlete interested in learning more about your career path..."
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowMessageForm(false)}
                  className="px-6 py-3 border border-[var(--neon-yellow)]/40 text-[var(--neon-yellow)] rounded-xl font-semibold hover:bg-[var(--neon-yellow)]/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!messageSubject || !messageContent}
                  className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
