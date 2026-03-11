"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import {
  jobs as allJobs,
  filterJobs,
  saveJob,
  unsaveJob,
  isJobSaved,
  type Job,
} from "@/lib/jobs";
import Link from "next/link";

export default function JobsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [remoteFilter, setRemoteFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);

  // Load saved jobs from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lifeaftersport_saved_jobs");
      setSavedJobIds(saved ? JSON.parse(saved) : []);
    }
  }, []);

  const filteredJobs = filterJobs(allJobs, {
    industry: industryFilter,
    type: typeFilter,
    remote: remoteFilter,
    search: searchTerm,
  });

  const toggleSaveJob = (jobId: string) => {
    if (savedJobIds.includes(jobId)) {
      unsaveJob(jobId);
      setSavedJobIds(savedJobIds.filter((id) => id !== jobId));
    } else {
      saveJob(jobId);
      setSavedJobIds([...savedJobIds, jobId]);
    }
  };

  const industries = Array.from(new Set(allJobs.map((job) => job.industry)));

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
            Job & Internship Board
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            {filteredJobs.length} {filteredJobs.length === 1 ? "opportunity" : "opportunities"} for
            student-athletes
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon-yellow)]"
            />

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

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)]"
            >
              <option value="all">All Types</option>
              <option value="internship">Internship</option>
              <option value="full-time">Full-Time</option>
            </select>

            {/* Remote Filter */}
            <select
              value={remoteFilter}
              onChange={(e) => setRemoteFilter(e.target.value)}
              className="px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--neon-yellow)]"
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-Site</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)] text-lg">
                No jobs found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 hover:border-[var(--neon-yellow)]/40 transition-all cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-heading font-bold text-white">
                        {job.title}
                      </h3>
                      {job.athleteFriendly && (
                        <span className="px-3 py-1 bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/30 text-[var(--neon-yellow)] text-xs font-semibold rounded-full">
                          Athlete-Friendly
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--text-primary)] font-semibold mb-2">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type === "internship" ? "Internship" : "Full-Time"}</span>
                      <span>🏢 {job.remote === "remote" ? "Remote" : job.remote === "hybrid" ? "Hybrid" : "On-Site"}</span>
                      <span>🏷️ {job.industry}</span>
                    </div>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveJob(job.id);
                    }}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {savedJobIds.includes(job.id) ? "🔖" : "📌"}
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
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
                onClick={() => setSelectedJob(null)}
                className="float-right text-white/40 hover:text-white text-2xl"
              >
                ✕
              </button>

              {/* Job Details */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-3xl font-heading font-bold text-white">
                    {selectedJob.title}
                  </h2>
                  {selectedJob.athleteFriendly && (
                    <span className="px-3 py-1 bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/30 text-[var(--neon-yellow)] text-xs font-semibold rounded-full">
                      Athlete-Friendly
                    </span>
                  )}
                </div>
                <p className="text-xl text-[var(--text-primary)] font-semibold mb-4">
                  {selectedJob.company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mb-6">
                  <span>📍 {selectedJob.location}</span>
                  <span>💼 {selectedJob.type === "internship" ? "Internship" : "Full-Time"}</span>
                  <span>🏢 {selectedJob.remote === "remote" ? "Remote" : selectedJob.remote === "hybrid" ? "Hybrid" : "On-Site"}</span>
                  <span>🏷️ {selectedJob.industry}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-3">
                  DESCRIPTION
                </h3>
                <p className="text-[var(--text-primary)] leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-3">
                  REQUIREMENTS
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--text-primary)]">
                      <span className="text-[var(--neon-yellow)] mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveJob(selectedJob.id);
                  }}
                  className="px-6 py-3 border border-[var(--neon-yellow)]/40 text-[var(--neon-yellow)] rounded-xl font-semibold hover:bg-[var(--neon-yellow)]/10 transition-all"
                >
                  {savedJobIds.includes(selectedJob.id) ? "Unsave Job" : "Save Job"}
                </button>
                <a
                  href="#"
                  className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all"
                >
                  Apply Now →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
